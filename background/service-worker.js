/**
 * @fileoverview Background service worker managing declarativeNetRequest header rules,
 * MAIN-world DOM injection lifecycle, dynamic Client Hints resolution, and state persistence.
 * @license MIT
 */

'use strict';

const RULE_ID_UA = 1;

const DEFAULT_SETTINGS = {
  deepEmulation: true,
  autoReload: false
};

/**
 * In-memory state cache to eliminate storage read latency during navigation commits.
 */
const stateCache = {
  activeProfile: null,
  settings: Object.assign({}, DEFAULT_SETTINGS),
  initialized: false
};

let syncPromise = null;

/**
 * Initializes and synchronizes in-memory cache with extension local storage.
 * Uses a singleton promise to eliminate redundant parallel read calls.
 * @returns {Promise<void>}
 */
async function syncCache() {
  if (syncPromise) return syncPromise;

  syncPromise = (async () => {
    try {
      const data = await chrome.storage.local.get(['activeUserAgent', 'settings']);
      stateCache.activeProfile = data.activeUserAgent || null;
      stateCache.settings = Object.assign({}, DEFAULT_SETTINGS, data.settings);
      stateCache.initialized = true;

      // Ensure action badge reflects cached state on worker startup
      await refreshActionBadge();
    } catch (err) {
      console.warn('[MimicUA] Cache synchronization warning:', err);
    } finally {
      syncPromise = null;
    }
  })();

  return syncPromise;
}

/**
 * Synchronizes browser action badge and tooltip with the active profile state.
 * @returns {Promise<void>}
 */
async function refreshActionBadge() {
  try {
    if (stateCache.activeProfile && stateCache.activeProfile.ua) {
      await chrome.action.setBadgeText({ text: 'ON' });
      await chrome.action.setBadgeBackgroundColor({ color: '#10b981' });
      await chrome.action.setTitle({
        title: `MimicUA: Active (${stateCache.activeProfile.name || 'Custom'})`
      });
    } else {
      await chrome.action.setBadgeText({ text: '' });
      await chrome.action.setTitle({ title: 'MimicUA (Default)' });
    }
  } catch (_) {
    // Action API can safely fail during background disposal
  }
}

/**
 * Resolves or derives realistic Chromium User-Agent Client Hints brands.
 * Returns null for Gecko (Firefox) and WebKit (Safari) targets to prevent leaks.
 * @param {Object} profile User-Agent configuration profile
 * @returns {Array<{brand: string, version: string}>|null}
 */
function resolveBrands(profile) {
  if (!profile || !profile.ua) return null;
  if (Array.isArray(profile.brands) && profile.brands.length > 0) {
    return profile.brands;
  }

  const ua = profile.ua;

  // Microsoft Edge
  const edgeMatch = ua.match(/Edg(?:e)?\/(\d+)/);
  if (edgeMatch) {
    const ver = edgeMatch[1];
    return [
      { brand: 'Not(A:Brand', version: '99' },
      { brand: 'Microsoft Edge', version: ver },
      { brand: 'Chromium', version: ver }
    ];
  }

  // Opera
  const oprMatch = ua.match(/OPR\/(\d+)/);
  if (oprMatch) {
    const ver = oprMatch[1];
    return [
      { brand: 'Not(A:Brand', version: '99' },
      { brand: 'Opera', version: ver },
      { brand: 'Chromium', version: ver }
    ];
  }

  // Google Chrome & generic Chromium
  const chromeMatch = ua.match(/Chrome\/(\d+)/);
  if (chromeMatch && !ua.includes('Gecko/') && !ua.includes('Firefox/')) {
    const ver = chromeMatch[1];
    return [
      { brand: 'Not(A:Brand', version: '99' },
      { brand: 'Google Chrome', version: ver },
      { brand: 'Chromium', version: ver }
    ];
  }

  return null;
}

/**
 * Translates navigator.platform string into standard Sec-CH-UA-Platform identifier.
 * @param {string} [platform]
 * @returns {string} Quoted platform token per Client Hints specification
 */
function toClientHintPlatform(platform) {
  if (!platform) return '"Windows"';
  const p = platform.toLowerCase();
  if (p.includes('mac')) return '"macOS"';
  if (p.includes('win')) return '"Windows"';
  if (p.includes('android')) return '"Android"';
  if (p.includes('iphone') || p.includes('ipad') || p.includes('ios')) return '"iOS"';
  if (p.includes('cros')) return '"Chrome OS"';
  if (p.includes('linux')) return '"Linux"';
  return `"${platform}"`;
}

/**
 * Generates declarativeNetRequest header rules for User-Agent and Client Hints.
 * Strips Client Hints for non-Chromium targets to prevent signature mismatch.
 * @param {Object} profile
 * @returns {chrome.declarativeNetRequest.Rule[]}
 */
function buildRules(profile) {
  if (!profile || !profile.ua) return [];

  const brands = resolveBrands(profile);
  const isChromium = Boolean(brands && brands.length > 0);
  const isMobile = Boolean(profile.mobile);

  /** @type {chrome.declarativeNetRequest.ModifyHeaderInfo[]} */
  const requestHeaders = [
    {
      header: 'User-Agent',
      operation: 'set',
      value: profile.ua
    }
  ];

  if (isChromium) {
    const brandsHeader = brands.map(b => `"${b.brand}";v="${b.version}"`).join(', ');
    requestHeaders.push(
      {
        header: 'Sec-CH-UA',
        operation: 'set',
        value: brandsHeader
      },
      {
        header: 'Sec-CH-UA-Platform',
        operation: 'set',
        value: toClientHintPlatform(profile.platform)
      },
      {
        header: 'Sec-CH-UA-Mobile',
        operation: 'set',
        value: isMobile ? '?1' : '?0'
      }
    );
  } else {
    // Safari, Firefox, and legacy engines do not transmit Sec-CH-* headers
    requestHeaders.push(
      { header: 'Sec-CH-UA', operation: 'remove' },
      { header: 'Sec-CH-UA-Platform', operation: 'remove' },
      { header: 'Sec-CH-UA-Mobile', operation: 'remove' },
      { header: 'Sec-CH-UA-Platform-Version', operation: 'remove' },
      { header: 'Sec-CH-UA-Model', operation: 'remove' }
    );
  }

  return [
    {
      id: RULE_ID_UA,
      priority: 1,
      action: {
        type: 'modifyHeaders',
        requestHeaders: requestHeaders
      },
      condition: {
        urlFilter: '*',
        resourceTypes: [
          'main_frame',
          'sub_frame',
          'stylesheet',
          'script',
          'image',
          'font',
          'object',
          'xmlhttprequest',
          'ping',
          'media',
          'websocket',
          'other'
        ]
      }
    }
  ];
}

/**
 * Applies or removes User-Agent declarativeNetRequest rules and synchronizes state.
 * @param {Object|null} profile
 * @returns {Promise<void>}
 */
async function applyProfile(profile) {
  try {
    await chrome.declarativeNetRequest.updateDynamicRules({
      removeRuleIds: [RULE_ID_UA]
    });

    if (!profile || !profile.ua) {
      stateCache.activeProfile = null;
      await chrome.storage.local.remove('activeUserAgent');
      await refreshActionBadge();
      return;
    }

    const rules = buildRules(profile);
    await chrome.declarativeNetRequest.updateDynamicRules({ addRules: rules });

    stateCache.activeProfile = profile;
    await chrome.storage.local.set({ activeUserAgent: profile });
    await refreshActionBadge();
  } catch (err) {
    console.error('[MimicUA] Profile rule update failed:', err);
    throw err;
  }
}

/**
 * Reloads the current active tab if it belongs to an accessible web URL.
 * @returns {Promise<void>}
 */
async function reloadActiveTab() {
  try {
    const tabs = await chrome.tabs.query({ active: true, currentWindow: true });
    if (!tabs || tabs.length === 0 || !tabs[0].id) return;

    const activeTab = tabs[0];
    if (activeTab.url && (activeTab.url.startsWith('http://') || activeTab.url.startsWith('https://'))) {
      await chrome.tabs.reload(activeTab.id);
    }
  } catch (err) {
    console.warn('[MimicUA] Active tab reload failed:', err);
  }
}

/**
 * Inlines DOM navigator and Client Hints spoofing into the page MAIN execution world.
 * Protects native prototype descriptors, accessor getters, and native code toString signatures.
 * @param {Object} profile
 */
function executeDomSpoof(profile) {
  if (!profile || !profile.ua) return;

  try {
    const nav = window.navigator;
    const navProto = Object.getPrototypeOf(nav) || Navigator.prototype;

    // Track spoofed getters for toString proxying
    const spoofedGetters = new WeakMap();

    /**
     * Creates a getter mimicking native browser C++ accessor functions.
     * @param {string} name
     * @param {*} val
     * @returns {Function}
     */
    function createNativeGetter(name, val) {
      const getter = function () {
        return val;
      };

      const nativeSignature = `function get ${name}() { [native code] }`;
      spoofedGetters.set(getter, nativeSignature);

      try {
        Object.defineProperty(getter, 'name', { value: 'get ' + name, configurable: true });
      } catch (_) {}

      try {
        getter.toString = function () {
          return nativeSignature;
        };
        spoofedGetters.set(getter.toString, 'function toString() { [native code] }');
      } catch (_) {}

      return getter;
    }

    // Intercept Function.prototype.toString to return native signature even if called unbound
    if (!window.__mimicUaToStringHooked) {
      const originalToString = Function.prototype.toString;
      const hookedToString = function toString() {
        if (spoofedGetters.has(this)) {
          return spoofedGetters.get(this);
        }
        return originalToString.call(this);
      };

      spoofedGetters.set(hookedToString, 'function toString() { [native code] }');

      try {
        Object.defineProperty(Function.prototype, 'toString', {
          value: hookedToString,
          writable: true,
          configurable: true
        });
        window.__mimicUaToStringHooked = true;
      } catch (_) {}
    }

    /**
     * Attaches property accessor descriptor to prototype or fallback instance.
     * @param {string} prop
     * @param {*} val
     */
    function defineAccessor(prop, val) {
      const desc = {
        get: createNativeGetter(prop, val),
        configurable: true,
        enumerable: true
      };
      try {
        Object.defineProperty(navProto, prop, desc);
      } catch (_) {
        try {
          Object.defineProperty(nav, prop, desc);
        } catch (_) {}
      }
    }

    // 1. Core navigator string properties
    defineAccessor('userAgent', profile.ua);
    defineAccessor('appVersion', profile.ua.replace(/^Mozilla\//, ''));

    if (profile.platform) {
      defineAccessor('platform', profile.platform);
    }
    if (typeof profile.vendor === 'string') {
      defineAccessor('vendor', profile.vendor);
    }
    if (typeof profile.maxTouchPoints === 'number') {
      defineAccessor('maxTouchPoints', profile.maxTouchPoints);
    }

    // 2. Client Hints API (navigator.userAgentData)
    // Resolve brands dynamically if not explicitly provided
    let brandsList = Array.isArray(profile.brands) && profile.brands.length > 0 ? profile.brands : null;
    if (!brandsList) {
      const ua = profile.ua;
      const edgeMatch = ua.match(/Edg(?:e)?\/(\d+)/);
      if (edgeMatch) {
        brandsList = [
          { brand: 'Not(A:Brand', version: '99' },
          { brand: 'Microsoft Edge', version: edgeMatch[1] },
          { brand: 'Chromium', version: edgeMatch[1] }
        ];
      } else {
        const oprMatch = ua.match(/OPR\/(\d+)/);
        if (oprMatch) {
          brandsList = [
            { brand: 'Not(A:Brand', version: '99' },
            { brand: 'Opera', version: oprMatch[1] },
            { brand: 'Chromium', version: oprMatch[1] }
          ];
        } else {
          const chromeMatch = ua.match(/Chrome\/(\d+)/);
          if (chromeMatch && !ua.includes('Gecko/') && !ua.includes('Firefox/')) {
            brandsList = [
              { brand: 'Not(A:Brand', version: '99' },
              { brand: 'Google Chrome', version: chromeMatch[1] },
              { brand: 'Chromium', version: chromeMatch[1] }
            ];
          }
        }
      }
    }

    const isChromium = Boolean(brandsList && brandsList.length > 0);

    if (isChromium) {
      const isMobile = Boolean(profile.mobile);
      const platformName = profile.platform || 'Windows';

      // Parse full version from User-Agent for high entropy query fidelity
      const fullVerMatch = profile.ua.match(/(?:Chrome|Edg|OPR)\/([\d.]+)/);
      const uaFullVersion = fullVerMatch ? fullVerMatch[1] : (brandsList[1]?.version ? `${brandsList[1].version}.0.0.0` : '133.0.0.0');

      const fullVersionList = brandsList.map(b => ({
        brand: b.brand,
        version: b.brand === 'Not(A:Brand' ? '99.0.0.0' : uaFullVersion
      }));

      // Compute realistic platform version
      let platformVersion = '15.0.0';
      const pLower = platformName.toLowerCase();
      if (pLower.includes('win')) platformVersion = '15.0.0';
      else if (pLower.includes('mac')) platformVersion = '14.5.0';
      else if (pLower.includes('android')) platformVersion = '14.0.0';

      const fakeUaData = {
        brands: Object.freeze([...brandsList]),
        mobile: isMobile,
        platform: platformName,
        toJSON: function () {
          return {
            brands: this.brands,
            mobile: this.mobile,
            platform: this.platform
          };
        },
        getHighEntropyValues: function (hints) {
          const res = {
            brands: brandsList,
            mobile: isMobile,
            platform: platformName
          };
          if (!Array.isArray(hints)) return Promise.resolve(res);

          const uaLower = profile.ua.toLowerCase();
          const isArm = uaLower.includes('arm') || uaLower.includes('aarch64');

          if (hints.includes('architecture')) {
            res.architecture = isArm ? 'arm' : 'x86';
          }
          if (hints.includes('bitness')) {
            res.bitness = (uaLower.includes('x64') || uaLower.includes('win64') || uaLower.includes('x86_64') || isArm) ? '64' : '32';
          }
          if (hints.includes('model')) {
            let modelName = '';
            if (isMobile) {
              const modelMatch = profile.ua.match(/;\s*([^;)]+)\s+Build\//);
              modelName = modelMatch ? modelMatch[1].trim() : 'Pixel 8';
            }
            res.model = modelName;
          }
          if (hints.includes('platformVersion')) res.platformVersion = platformVersion;
          if (hints.includes('uaFullVersion')) res.uaFullVersion = uaFullVersion;
          if (hints.includes('fullVersionList')) res.fullVersionList = fullVersionList;
          return Promise.resolve(res);
        }
      };

      defineAccessor('userAgentData', fakeUaData);
    } else {
      // Non-Chromium engines (Gecko/WebKit) do not implement navigator.userAgentData
      try {
        delete navProto.userAgentData;
      } catch (_) {}
      try {
        delete nav.userAgentData;
      } catch (_) {}
    }
  } catch (err) {
    console.warn('[MimicUA] DOM spoofing warning:', err);
  }
}

/**
 * Synchronously injects MAIN-world overrides upon navigation commit.
 */
chrome.webNavigation.onCommitted.addListener(async (details) => {
  if (!details.url || (!details.url.startsWith('http://') && !details.url.startsWith('https://'))) {
    return;
  }

  if (!stateCache.initialized) {
    await syncCache();
  }

  if (!stateCache.settings.deepEmulation || !stateCache.activeProfile) {
    return;
  }

  try {
    await chrome.scripting.executeScript({
      target: {
        tabId: details.tabId,
        frameIds: [details.frameId]
      },
      world: 'MAIN',
      injectImmediately: true,
      func: executeDomSpoof,
      args: [stateCache.activeProfile]
    });
  } catch (_) {
    // Restricted or protected system pages (chrome://, webstore) reject execution safely
  }
});

/**
 * Extension runtime message dispatcher.
 */
chrome.runtime.onMessage.addListener((message, _sender, sendResponse) => {
  if (message.action === 'setUserAgent') {
    applyProfile(message.userAgent)
      .then(async () => {
        if (stateCache.settings.autoReload || message.reload) {
          await reloadActiveTab();
        }
        sendResponse({ success: true });
      })
      .catch((e) => sendResponse({ success: false, error: e.message }));
    return true;
  }

  if (message.action === 'clearUserAgent') {
    applyProfile(null)
      .then(async () => {
        if (stateCache.settings.autoReload || message.reload) {
          await reloadActiveTab();
        }
        sendResponse({ success: true });
      })
      .catch((e) => sendResponse({ success: false, error: e.message }));
    return true;
  }

  if (message.action === 'getActiveUserAgent') {
    if (!stateCache.initialized) {
      syncCache().then(() => {
        sendResponse({
          userAgent: stateCache.activeProfile,
          settings: stateCache.settings
        });
      });
      return true;
    }
    sendResponse({
      userAgent: stateCache.activeProfile,
      settings: stateCache.settings
    });
    return true;
  }

  if (message.action === 'reloadTab') {
    reloadActiveTab().then(() => sendResponse({ success: true }));
    return true;
  }
});

/**
 * Storage change listener ensuring multi-context synchronization.
 */
chrome.storage.onChanged.addListener((changes, area) => {
  if (area !== 'local') return;
  if (changes.activeUserAgent) {
    stateCache.activeProfile = changes.activeUserAgent.newValue || null;
    refreshActionBadge();
  }
  if (changes.settings) {
    stateCache.settings = Object.assign({}, DEFAULT_SETTINGS, changes.settings.newValue);
  }
});

// Lifecycle initializations
chrome.runtime.onStartup.addListener(syncCache);
chrome.runtime.onInstalled.addListener(syncCache);

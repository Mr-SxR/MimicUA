/**
 * @fileoverview Standalone DOM spoofing library for the browser MAIN execution world.
 * Overrides navigator prototype properties, native accessor descriptors, and User-Agent Client Hints API.
 * @license MIT
 */

(function () {
  'use strict';

  /**
   * Applies realistic browser identity overrides to window.navigator.
   * Modifies Navigator.prototype with native-like accessor descriptors.
   * @param {Object} profile User-Agent configuration profile
   */
  function applyNavigatorSpoof(profile) {
    if (!profile || !profile.ua) return;

    try {
      const nav = window.navigator;
      const navProto = Object.getPrototypeOf(nav) || Navigator.prototype;

      // Track spoofed getters for toString proxying
      const spoofedGetters = new WeakMap();

      /**
       * Creates a getter mimicking native browser C++ accessor functions.
       * @param {string} propName
       * @param {*} value
       * @returns {Function}
       */
      function createNativeGetter(propName, value) {
        const getter = function () {
          return value;
        };

        const nativeSignature = `function get ${propName}() { [native code] }`;
        spoofedGetters.set(getter, nativeSignature);

        try {
          Object.defineProperty(getter, 'name', { value: 'get ' + propName, configurable: true });
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
       * @param {*} value
       */
      function defineAccessor(prop, value) {
        const descriptor = {
          get: createNativeGetter(prop, value),
          configurable: true,
          enumerable: true
        };
        try {
          Object.defineProperty(navProto, prop, descriptor);
        } catch (_) {
          try {
            Object.defineProperty(nav, prop, descriptor);
          } catch (e) {
            console.warn('[MimicUA] Failed to define navigator.' + prop, e);
          }
        }
      }

      // 1. Core Navigator Strings
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

        const fullVerMatch = profile.ua.match(/(?:Chrome|Edg|OPR)\/([\d.]+)/);
        const uaFullVersion = fullVerMatch ? fullVerMatch[1] : (brandsList[1]?.version ? `${brandsList[1].version}.0.0.0` : '133.0.0.0');

        const fullVersionList = brandsList.map(b => ({
          brand: b.brand,
          version: b.brand === 'Not(A:Brand' ? '99.0.0.0' : uaFullVersion
        }));

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
            const result = {
              brands: brandsList,
              mobile: isMobile,
              platform: platformName
            };
            if (!Array.isArray(hints)) return Promise.resolve(result);

            const uaLower = profile.ua.toLowerCase();
            const isArm = uaLower.includes('arm') || uaLower.includes('aarch64');

            if (hints.includes('architecture')) {
              result.architecture = isArm ? 'arm' : 'x86';
            }
            if (hints.includes('bitness')) {
              result.bitness = (uaLower.includes('x64') || uaLower.includes('win64') || uaLower.includes('x86_64') || isArm) ? '64' : '32';
            }
            if (hints.includes('model')) {
              let modelName = '';
              if (isMobile) {
                const modelMatch = profile.ua.match(/;\s*([^;)]+)\s+Build\//);
                modelName = modelMatch ? modelMatch[1].trim() : 'Pixel 8';
              }
              result.model = modelName;
            }
            if (hints.includes('platformVersion')) result.platformVersion = platformVersion;
            if (hints.includes('uaFullVersion')) result.uaFullVersion = uaFullVersion;
            if (hints.includes('fullVersionList')) result.fullVersionList = fullVersionList;
            return Promise.resolve(result);
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

  if (typeof window !== 'undefined') {
    window.__mimicUaSpoofNavigator = applyNavigatorSpoof;
  }
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = applyNavigatorSpoof;
  }
})();

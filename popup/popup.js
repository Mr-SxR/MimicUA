/**
 * @fileoverview Popup UI controller managing preset navigation, instant search,
 * favorites pinning, custom profile CRUD, and settings synchronization.
 * @license MIT
 */

'use strict';

/**
 * Platform SVG icons map.
 */
const PLATFORM_ICONS = {
  windows: '<svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor"><path d="M3 5.5l7.5-1v7H3V5.5zM3 12.5h7.5v7L3 18.5v-6zM11.5 4.3L21 3v8.5h-9.5V4.3zM11.5 12.5H21V21l-9.5-1.3v-7.2z"/></svg>',
  macos: '<svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/></svg>',
  linux: '<svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="8" r="5"/><path d="M10 9.5l2 1 2-1"/><path d="M7 13c-2 2-2 5 0 7h10c2-2 2-5 0-7"/></svg>',
  ios: '<svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/></svg>',
  ipad: '<svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2"><rect x="4" y="2" width="16" height="20" rx="2"/><line x1="12" y1="18" x2="12" y2="18"/></svg>',
  android: '<svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2"><rect x="5" y="11" width="14" height="10" rx="2"/><line x1="8" y1="7" x2="8" y2="11"/><line x1="16" y1="7" x2="16" y2="11"/><circle cx="9" cy="14" r="1" fill="currentColor"/><circle cx="15" cy="14" r="1" fill="currentColor"/><line x1="6" y1="5" x2="8.5" y2="8"/><line x1="18" y1="5" x2="15.5" y2="8"/></svg>',
  bot: '<svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="11" width="18" height="10" rx="2"/><circle cx="12" cy="5" r="2"/><path d="M12 7v4"/><line x1="8" y1="16" x2="8" y2="16"/><line x1="16" y1="16" x2="16" y2="16"/></svg>',
  gamepad: '<svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="6" width="20" height="12" rx="3"/><line x1="6" y1="12" x2="10" y2="12"/><line x1="8" y1="10" x2="8" y2="14"/><circle cx="15" cy="11" r="1" fill="currentColor"/><circle cx="17" cy="13" r="1" fill="currentColor"/></svg>',
  tv: '<svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="4" width="20" height="13" rx="2"/><polyline points="8 20 12 17 16 20"/></svg>',
  terminal: '<svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2"><polyline points="4 17 10 11 4 5"/><line x1="12" y1="19" x2="20" y2="19"/></svg>',
  custom: '<svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>'
};

/**
 * Resolves platform SVG icon markup with fallback.
 * @param {string} iconKey
 * @returns {string} SVG HTML markup
 */
function getPlatformIcon(iconKey) {
  return PLATFORM_ICONS[iconKey] || PLATFORM_ICONS.custom;
}

document.addEventListener('DOMContentLoaded', () => {
  const state = {
    activeProfile: null,
    selectedCategoryIndex: 0,
    searchFilter: '',
    currentTab: 'presets',
    favorites: [],
    customProfiles: [],
    settings: {
      deepEmulation: true,
      autoReload: false
    },
    editingIndex: null,
    searchDebounceTimer: null
  };

  const $ = (id) => document.getElementById(id);

  const els = {
    statusPill: $('statusPill'),
    statusLabel: $('statusLabel'),
    activeBar: $('activeBar'),
    activeNameText: $('activeNameText'),
    btnReloadTab: $('btnReloadTab'),
    btnResetUa: $('btnResetUa'),

    searchInput: $('searchInput'),
    btnClearSearch: $('btnClearSearch'),
    kbdHint: $('kbdHint'),

    tabBtns: document.querySelectorAll('.tab-btn'),
    viewPanels: document.querySelectorAll('.view-panel'),
    favCountBadge: $('favCount'),
    customCountBadge: $('customCount'),

    categoryList: $('categoryList'),
    presetsList: $('presetsList'),
    currentCatTitle: $('currentCatTitle'),
    itemCountBadge: $('itemCountBadge'),
    catTotalBadge: $('catTotalBadge'),

    favoritesList: $('favoritesList'),

    customFormTitle: $('customFormTitle'),
    customName: $('customName'),
    customPlatform: $('customPlatform'),
    customUaString: $('customUaString'),
    customIsMobile: $('customIsMobile'),
    btnSaveCustom: $('btnSaveCustom'),
    btnCancelEdit: $('btnCancelEdit'),
    savedCustomCount: $('savedCustomCount'),
    customItemsList: $('customItemsList'),

    toggleDeepEmulation: $('toggleDeepEmulation'),
    toggleAutoReload: $('toggleAutoReload'),
    diagPlatform: $('diagPlatform'),
    diagVendor: $('diagVendor'),
    diagNativeUa: $('diagNativeUa'),
    btnCopyNativeUa: $('btnCopyNativeUa'),
    btnExportData: $('btnExportData'),
    importFileInput: $('importFileInput'),

    toastContainer: $('toastContainer'),
    totalPresetStats: $('totalPresetStats')
  };

  let activeTooltipEl = null;

  /**
   * Displays an interactive floating toast notification.
   * @param {string} message
   * @param {'info'|'success'|'error'} [type='info']
   */
  function showToast(message, type = 'info') {
    if (!els.toastContainer) return;

    const toast = document.createElement('div');
    toast.className = `toast-message ${type === 'error' ? 'toast-error' : (type === 'success' ? 'toast-success' : '')}`;
    toast.textContent = message;

    els.toastContainer.appendChild(toast);

    setTimeout(() => {
      toast.style.transition = 'opacity 0.2s ease, transform 0.2s ease';
      toast.style.opacity = '0';
      toast.style.transform = 'translateY(6px)';
      setTimeout(() => toast.remove(), 200);
    }, 2200);
  }

  /**
   * Initializes application state and loads stored settings.
   */
  function init() {
    renderNativeDiagnostics();
    updatePresetStats();

    chrome.runtime.sendMessage({ action: 'getActiveUserAgent' }, (res) => {
      if (!chrome.runtime.lastError && res) {
        state.activeProfile = res.userAgent || null;
        if (res.settings) {
          state.settings = Object.assign(state.settings, res.settings);
        }
      }

      chrome.storage.local.get(['favorites', 'customProfiles', 'settings'], (data) => {
        if (!chrome.runtime.lastError && data) {
          state.favorites = Array.isArray(data.favorites) ? data.favorites : [];
          state.customProfiles = Array.isArray(data.customProfiles) ? data.customProfiles : [];
          if (data.settings) {
            state.settings = Object.assign(state.settings, data.settings);
          }
        }

        syncSettingsUI();
        updateActiveUI();
        updateCounterBadges();
        renderCategories();
        renderPresets();
      });
    });

    bindEvents();
  }

  /**
   * Populates native environment diagnostics in the Settings tab.
   */
  function renderNativeDiagnostics() {
    els.diagPlatform.textContent = navigator.platform || 'Unknown';
    els.diagVendor.textContent = navigator.vendor || 'None (Firefox/Gecko)';
    els.diagNativeUa.textContent = navigator.userAgent;
  }

  /**
   * Updates database statistics in header/footer badges.
   */
  function updatePresetStats() {
    if (window.USER_AGENTS_DB) {
      const total = window.USER_AGENTS_DB.getTotalCount();
      const cats = window.USER_AGENTS_DB.categories.length;
      els.catTotalBadge.textContent = cats;
      els.totalPresetStats.textContent = `${total} Presets Across ${cats} Categories`;
    }
  }

  /**
   * Refreshes pinned favorites and custom profiles badge counts.
   */
  function updateCounterBadges() {
    els.favCountBadge.textContent = state.favorites.length;
    els.customCountBadge.textContent = state.customProfiles.length;
    els.savedCustomCount.textContent = state.customProfiles.length;
  }

  /**
   * Synchronizes toggle switch controls with in-memory settings.
   */
  function syncSettingsUI() {
    els.toggleDeepEmulation.checked = Boolean(state.settings.deepEmulation);
    els.toggleAutoReload.checked = Boolean(state.settings.autoReload);
  }

  /**
   * Synchronizes active status pill and active profile banner.
   */
  function updateActiveUI() {
    if (state.activeProfile) {
      els.statusPill.classList.add('active');
      els.statusLabel.textContent = 'Spoofing Active';
      els.activeBar.style.display = 'flex';
      els.activeNameText.textContent = state.activeProfile.name || 'Custom Profile';
    } else {
      els.statusPill.classList.remove('active');
      els.statusLabel.textContent = 'Default';
      els.activeBar.style.display = 'none';
      els.activeNameText.textContent = '';
    }
  }

  /**
   * Switches the active navigation view tab.
   * @param {string} targetTab
   */
  function switchTab(targetTab) {
    state.currentTab = targetTab;

    els.tabBtns.forEach(btn => {
      btn.classList.toggle('active', btn.dataset.tab === targetTab);
    });

    els.viewPanels.forEach(panel => {
      const isTarget = panel.id.toLowerCase() === `view${targetTab.toLowerCase()}`;
      panel.classList.toggle('active', isTarget);
    });

    if (targetTab === 'favorites') {
      renderFavorites();
    } else if (targetTab === 'custom') {
      renderCustomList();
    } else if (targetTab === 'presets') {
      renderCategories();
      renderPresets();
    }
  }

  /**
   * Renders the category list in the Presets sidebar.
   */
  function renderCategories() {
    if (!window.USER_AGENTS_DB) return;
    const fragment = document.createDocumentFragment();
    const filter = state.searchFilter.toLowerCase().trim();

    window.USER_AGENTS_DB.categories.forEach((cat, index) => {
      const matchCat = !filter || cat.name.toLowerCase().includes(filter);
      const matchingItemsCount = filter
        ? cat.items.filter(i => i.name.toLowerCase().includes(filter) || i.ua.toLowerCase().includes(filter)).length
        : cat.items.length;

      if (filter && !matchCat && matchingItemsCount === 0) return;

      const item = document.createElement('div');
      item.className = 'cat-item';
      if (index === state.selectedCategoryIndex) {
        item.classList.add('selected');
      }

      const displayCount = filter ? (matchCat ? cat.items.length : matchingItemsCount) : cat.items.length;

      item.innerHTML = `
        <div class="cat-left">
          <span class="cat-icon">${getPlatformIcon(cat.icon)}</span>
          <span class="cat-name">${escapeHtml(cat.name)}</span>
        </div>
        <span class="cat-count">${displayCount}</span>
      `;

      item.addEventListener('click', () => {
        state.selectedCategoryIndex = index;
        renderCategories();
        renderPresets();
      });

      fragment.appendChild(item);
    });

    els.categoryList.innerHTML = '';
    if (fragment.children.length === 0) {
      els.categoryList.innerHTML = `
        <div class="empty-state">
          <span class="empty-subtitle">No matching category</span>
        </div>
      `;
    } else {
      els.categoryList.appendChild(fragment);
    }
  }

  /**
   * Renders presets for the currently selected category.
   */
  function renderPresets() {
    if (!window.USER_AGENTS_DB) return;
    const categories = window.USER_AGENTS_DB.categories;
    const cat = categories[state.selectedCategoryIndex];

    if (!cat) {
      els.presetsList.innerHTML = `
        <div class="empty-state">
          <span class="empty-title">Select a category</span>
        </div>
      `;
      return;
    }

    els.currentCatTitle.textContent = cat.name;
    const filter = state.searchFilter.toLowerCase().trim();
    const fragment = document.createDocumentFragment();
    let visibleCount = 0;

    cat.items.forEach((preset) => {
      const matchCat = filter && cat.name.toLowerCase().includes(filter);
      const matchName = preset.name.toLowerCase().includes(filter);
      const matchUa = preset.ua.toLowerCase().includes(filter);

      if (filter && !matchCat && !matchName && !matchUa) return;
      visibleCount++;

      const item = document.createElement('div');
      item.className = 'preset-item';
      const isActive = state.activeProfile && state.activeProfile.id === preset.id;
      const isFav = state.favorites.includes(preset.id);

      if (isActive) item.classList.add('active-preset');

      const tagText = preset.platform || cat.type;

      item.innerHTML = `
        <div class="preset-main">
          <div class="preset-name">${highlightText(preset.name, filter)}</div>
          <div class="preset-sub">
            ${isActive ? '<span class="tag-badge active-indicator">Active</span>' : ''}
            <span class="tag-badge">${escapeHtml(tagText)}</span>
            ${preset.mobile ? '<span class="tag-badge mobile">Mobile</span>' : ''}
          </div>
        </div>
        <div class="preset-actions">
          <button class="action-btn copy-btn" title="Copy User-Agent string" aria-label="Copy User-Agent">
            <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2">
              <rect x="9" y="9" width="13" height="13" rx="2" ry="2"/>
              <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/>
            </svg>
          </button>
          <button class="action-btn fav-btn ${isFav ? 'star-active' : ''}" title="${isFav ? 'Remove from Favorites' : 'Add to Favorites'}" aria-label="Toggle Favorite">
            <svg viewBox="0 0 24 24" width="13" height="13" fill="${isFav ? 'currentColor' : 'none'}" stroke="currentColor" stroke-width="2">
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
            </svg>
          </button>
        </div>
      `;

      item.addEventListener('click', (e) => {
        if (e.target.closest('.action-btn')) return;
        applyPreset(preset, cat.icon);
      });

      const copyBtn = item.querySelector('.copy-btn');
      copyBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        copyToClipboard(preset.ua, copyBtn);
      });

      item.querySelector('.fav-btn').addEventListener('click', (e) => {
        e.stopPropagation();
        toggleFavorite(preset.id);
      });

      item.addEventListener('mouseenter', (e) => showTooltip(preset.ua, e));
      item.addEventListener('mouseleave', hideTooltip);

      fragment.appendChild(item);
    });

    els.itemCountBadge.textContent = visibleCount;
    els.presetsList.innerHTML = '';
    if (visibleCount === 0) {
      els.presetsList.innerHTML = `
        <div class="empty-state">
          <span class="empty-title">No matching presets found</span>
          <span class="empty-subtitle">Try searching with a different browser or OS name</span>
        </div>
      `;
    } else {
      els.presetsList.appendChild(fragment);
    }
  }

  /**
   * Renders pinned favorites cards.
   */
  function renderFavorites() {
    els.favoritesList.innerHTML = '';

    if (state.favorites.length === 0) {
      els.favoritesList.innerHTML = `
        <div class="empty-state">
          <svg class="empty-icon" viewBox="0 0 24 24" width="36" height="36" fill="none" stroke="currentColor" stroke-width="1.5">
            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
          </svg>
          <span class="empty-title">No Pinned Profiles Yet</span>
          <span class="empty-subtitle">Click the star icon on any preset to pin it here for 1-click access.</span>
        </div>
      `;
      return;
    }

    const fragment = document.createDocumentFragment();

    state.favorites.forEach((favId) => {
      let profile = window.USER_AGENTS_DB ? window.USER_AGENTS_DB.findById(favId) : null;
      if (!profile) {
        profile = state.customProfiles.find(p => p.id === favId);
      }
      if (!profile) return;

      const card = document.createElement('div');
      card.className = 'fav-card';
      const isActive = state.activeProfile && state.activeProfile.id === profile.id;
      if (isActive) card.classList.add('active');

      card.innerHTML = `
        <div class="preset-main">
          <div class="preset-name">${escapeHtml(profile.name)}</div>
          <div class="preset-sub">
            ${isActive ? '<span class="tag-badge active-indicator">Active</span>' : ''}
            <span class="tag-badge">${escapeHtml(profile.platform || 'General')}</span>
            ${profile.mobile ? '<span class="tag-badge mobile">Mobile</span>' : ''}
          </div>
        </div>
        <div class="preset-actions">
          <button class="action-btn copy-btn" title="Copy UA" aria-label="Copy User-Agent">
            <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2">
              <rect x="9" y="9" width="13" height="13" rx="2" ry="2"/>
              <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/>
            </svg>
          </button>
          <button class="action-btn star-active" title="Unpin Favorite" aria-label="Unpin Favorite">
            <svg viewBox="0 0 24 24" width="13" height="13" fill="currentColor" stroke="currentColor" stroke-width="2">
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
            </svg>
          </button>
        </div>
      `;

      card.addEventListener('click', (e) => {
        if (e.target.closest('.action-btn')) return;
        applyPreset(profile, 'custom');
      });

      const copyBtn = card.querySelector('.copy-btn');
      copyBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        copyToClipboard(profile.ua, copyBtn);
      });

      card.querySelector('.star-active').addEventListener('click', (e) => {
        e.stopPropagation();
        toggleFavorite(profile.id);
        renderFavorites();
      });

      card.addEventListener('mouseenter', (e) => showTooltip(profile.ua, e));
      card.addEventListener('mouseleave', hideTooltip);

      fragment.appendChild(card);
    });

    els.favoritesList.appendChild(fragment);
  }

  /**
   * Renders the list of custom user-defined profiles.
   */
  function renderCustomList() {
    els.customItemsList.innerHTML = '';

    if (state.customProfiles.length === 0) {
      els.customItemsList.innerHTML = `
        <div class="empty-state">
          <span class="empty-title">No Custom Profiles</span>
          <span class="empty-subtitle">Fill in the form above to register your own custom User-Agent strings.</span>
        </div>
      `;
      return;
    }

    const fragment = document.createDocumentFragment();

    state.customProfiles.forEach((item, index) => {
      const card = document.createElement('div');
      card.className = 'custom-card-item';
      const isActive = state.activeProfile && state.activeProfile.id === item.id;
      if (isActive) card.classList.add('active');

      card.innerHTML = `
        <div class="preset-main">
          <div class="preset-name">${escapeHtml(item.name)}</div>
          <div class="preset-sub">
            ${isActive ? '<span class="tag-badge active-indicator">Active</span>' : ''}
            <span class="tag-badge">${escapeHtml(item.platform || 'Custom')}</span>
            ${item.mobile ? '<span class="tag-badge mobile">Mobile</span>' : ''}
          </div>
        </div>
        <div class="preset-actions">
          <button class="action-btn edit-btn" title="Edit Profile" aria-label="Edit Profile">
            <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M12 20h9"/>
              <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/>
            </svg>
          </button>
          <button class="action-btn delete-btn" title="Delete Profile" aria-label="Delete Profile">
            <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2">
              <polyline points="3 6 5 6 21 6"/>
              <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/>
            </svg>
          </button>
        </div>
      `;

      card.addEventListener('click', (e) => {
        if (e.target.closest('.action-btn')) return;
        applyPreset(item, 'custom');
      });

      card.querySelector('.edit-btn').addEventListener('click', (e) => {
        e.stopPropagation();
        startEditCustom(index);
      });

      card.querySelector('.delete-btn').addEventListener('click', (e) => {
        e.stopPropagation();
        deleteCustom(index);
      });

      card.addEventListener('mouseenter', (e) => showTooltip(item.ua, e));
      card.addEventListener('mouseleave', hideTooltip);

      fragment.appendChild(card);
    });

    els.customItemsList.appendChild(fragment);
  }

  /**
   * Pre-populates form fields for editing an existing custom profile.
   * @param {number} index
   */
  function startEditCustom(index) {
    const item = state.customProfiles[index];
    if (!item) return;

    state.editingIndex = index;
    els.customFormTitle.textContent = 'Edit Custom User-Agent';
    els.customName.value = item.name;
    els.customPlatform.value = item.platform || '';
    els.customUaString.value = item.ua;
    els.customIsMobile.checked = Boolean(item.mobile);
    els.btnCancelEdit.style.display = 'inline-block';
    els.customName.focus();
  }

  /**
   * Resets custom profile form back to creation mode.
   */
  function cancelEditCustom() {
    state.editingIndex = null;
    els.customFormTitle.textContent = 'Add Custom User-Agent';
    els.customName.value = '';
    els.customPlatform.value = '';
    els.customUaString.value = '';
    els.customIsMobile.checked = false;
    els.btnCancelEdit.style.display = 'none';
  }

  /**
   * Validates and saves a custom User-Agent profile.
   */
  function saveCustom() {
    const name = els.customName.value.trim();
    const ua = els.customUaString.value.trim();
    const platform = els.customPlatform.value.trim() || 'Win32';
    const isMobile = els.customIsMobile.checked;

    if (!name || !ua) {
      showToast('Please provide both a profile name and User-Agent string.', 'error');
      return;
    }

    const profileData = {
      id: state.editingIndex !== null ? state.customProfiles[state.editingIndex].id : `custom-${Date.now()}`,
      name,
      ua,
      platform,
      mobile: isMobile
    };

    if (state.editingIndex !== null) {
      state.customProfiles[state.editingIndex] = profileData;
    } else {
      state.customProfiles.unshift(profileData);
    }

    chrome.storage.local.set({ customProfiles: state.customProfiles }, () => {
      showToast(state.editingIndex !== null ? 'Profile updated successfully.' : 'Custom profile created.', 'success');
      cancelEditCustom();
      updateCounterBadges();
      renderCustomList();
    });
  }

  /**
   * Deletes a custom profile and removes associated favorites.
   * @param {number} index
   */
  function deleteCustom(index) {
    const item = state.customProfiles[index];
    if (!item) return;

    state.favorites = state.favorites.filter(id => id !== item.id);
    state.customProfiles.splice(index, 1);

    chrome.storage.local.set({
      customProfiles: state.customProfiles,
      favorites: state.favorites
    }, () => {
      showToast('Profile deleted.', 'info');
      updateCounterBadges();
      renderCustomList();
    });
  }

  /**
   * Applies the selected profile to declarativeNetRequest rules.
   * @param {Object} preset
   * @param {string} [icon]
   */
  function applyPreset(preset, icon) {
    const profile = Object.assign({}, preset, { icon: icon || 'custom' });
    chrome.runtime.sendMessage({ action: 'setUserAgent', userAgent: profile }, (res) => {
      if (!chrome.runtime.lastError && res && res.success) {
        state.activeProfile = profile;
        updateActiveUI();
        renderPresets();
        renderFavorites();
        renderCustomList();

        const reloadNote = state.settings.autoReload ? ' (Reloading tab...)' : '';
        showToast(`Switched to: ${preset.name}${reloadNote}`, 'success');
      }
    });
  }

  /**
   * Resets active rules back to native browser defaults.
   */
  function resetToDefault() {
    chrome.runtime.sendMessage({ action: 'clearUserAgent' }, (res) => {
      if (!chrome.runtime.lastError && res && res.success) {
        state.activeProfile = null;
        updateActiveUI();
        renderPresets();
        renderFavorites();
        renderCustomList();
        showToast('Restored default browser identity.', 'info');
      }
    });
  }

  /**
   * Toggles the pinned favorite status of a profile ID.
   * @param {string} id
   */
  function toggleFavorite(id) {
    const idx = state.favorites.indexOf(id);
    const added = idx < 0;

    if (added) {
      state.favorites.push(id);
    } else {
      state.favorites.splice(idx, 1);
    }

    chrome.storage.local.set({ favorites: state.favorites }, () => {
      showToast(added ? 'Added to favorites.' : 'Removed from favorites.', 'info');
      updateCounterBadges();
      renderPresets();
    });
  }

  /**
   * Exports custom profiles and favorites to a formatted JSON file.
   */
  function exportData() {
    const exportPayload = {
      version: '2.0.0',
      exportedAt: new Date().toISOString(),
      customProfiles: state.customProfiles,
      favorites: state.favorites,
      settings: state.settings
    };

    const blob = new Blob([JSON.stringify(exportPayload, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `mimicua-backup-${new Date().toISOString().slice(0, 10)}.json`;
    a.click();
    URL.revokeObjectURL(url);
    showToast('Backup file exported.', 'success');
  }

  /**
   * Imports custom profiles and settings from a user-supplied JSON file.
   * @param {Event} e
   */
  function importData(e) {
    const file = e.target.files && e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = function (event) {
      try {
        const parsed = JSON.parse(event.target.result);
        if (Array.isArray(parsed.customProfiles)) {
          state.customProfiles = parsed.customProfiles;
        }
        if (Array.isArray(parsed.favorites)) {
          state.favorites = parsed.favorites;
        }
        if (parsed.settings) {
          state.settings = Object.assign(state.settings, parsed.settings);
        }

        chrome.storage.local.set({
          customProfiles: state.customProfiles,
          favorites: state.favorites,
          settings: state.settings
        }, () => {
          syncSettingsUI();
          updateCounterBadges();
          renderCustomList();
          renderFavorites();
          showToast('Configuration imported successfully!', 'success');
        });
      } catch (err) {
        showToast('Invalid JSON file format.', 'error');
      }
    };
    reader.readAsText(file);
    e.target.value = '';
  }

  /**
   * Binds interactive DOM events across UI components.
   */
  function bindEvents() {
    els.tabBtns.forEach(btn => {
      btn.addEventListener('click', () => switchTab(btn.dataset.tab));
    });

    els.btnResetUa.addEventListener('click', resetToDefault);

    els.btnReloadTab.addEventListener('click', () => {
      chrome.runtime.sendMessage({ action: 'reloadTab' });
      showToast('Reloading active tab...', 'info');
    });

    if (els.btnCopyNativeUa) {
      els.btnCopyNativeUa.addEventListener('click', () => {
        copyToClipboard(navigator.userAgent, els.btnCopyNativeUa, 'Native User-Agent copied!');
      });
    }

    // Instant search filtering
    els.searchInput.addEventListener('input', () => {
      clearTimeout(state.searchDebounceTimer);
      state.searchDebounceTimer = setTimeout(() => {
        state.searchFilter = els.searchInput.value;
        els.btnClearSearch.classList.toggle('visible', Boolean(state.searchFilter));

        // Auto-switch to Presets view if typing in search while in another tab
        if (state.searchFilter && state.currentTab !== 'presets') {
          switchTab('presets');
        }

        if (state.searchFilter && window.USER_AGENTS_DB) {
          const filterLower = state.searchFilter.toLowerCase().trim();
          const currentCat = window.USER_AGENTS_DB.categories[state.selectedCategoryIndex];
          const currentHasMatch = currentCat && currentCat.items.some(i =>
            i.name.toLowerCase().includes(filterLower) || i.ua.toLowerCase().includes(filterLower)
          );

          // Auto-select first matching category if current category has 0 matches
          if (!currentHasMatch) {
            const firstMatchIdx = window.USER_AGENTS_DB.categories.findIndex(c =>
              c.name.toLowerCase().includes(filterLower) ||
              c.items.some(i => i.name.toLowerCase().includes(filterLower) || i.ua.toLowerCase().includes(filterLower))
            );
            if (firstMatchIdx !== -1) {
              state.selectedCategoryIndex = firstMatchIdx;
            }
          }
        }

        renderCategories();
        renderPresets();
      }, 70);
    });

    // Keyboard support: Escape clears search
    els.searchInput.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        els.searchInput.value = '';
        state.searchFilter = '';
        els.btnClearSearch.classList.remove('visible');
        renderCategories();
        renderPresets();
      }
    });

    els.btnClearSearch.addEventListener('click', () => {
      els.searchInput.value = '';
      state.searchFilter = '';
      els.btnClearSearch.classList.remove('visible');
      renderCategories();
      renderPresets();
      els.searchInput.focus();
    });

    els.btnSaveCustom.addEventListener('click', saveCustom);
    els.btnCancelEdit.addEventListener('click', cancelEditCustom);

    els.toggleDeepEmulation.addEventListener('change', () => {
      state.settings.deepEmulation = els.toggleDeepEmulation.checked;
      chrome.storage.local.set({ settings: state.settings });
      showToast('Deep Emulation setting updated.', 'info');
    });

    els.toggleAutoReload.addEventListener('change', () => {
      state.settings.autoReload = els.toggleAutoReload.checked;
      chrome.storage.local.set({ settings: state.settings });
      showToast('Auto-Reload setting updated.', 'info');
    });

    els.btnExportData.addEventListener('click', exportData);
    els.importFileInput.addEventListener('change', importData);
  }

  /**
   * Displays floating monospace tooltip with full User-Agent string.
   * @param {string} text
   * @param {MouseEvent} event
   */
  function showTooltip(text, event) {
    hideTooltip();
    activeTooltipEl = document.createElement('div');
    activeTooltipEl.className = 'app-tooltip';
    activeTooltipEl.textContent = text;
    document.body.appendChild(activeTooltipEl);

    const rect = event.currentTarget.getBoundingClientRect();
    const popupWidth = document.body.offsetWidth;
    const tooltipWidth = activeTooltipEl.offsetWidth;

    let left = rect.left;
    if (left + tooltipWidth > popupWidth - 12) {
      left = popupWidth - tooltipWidth - 12;
    }
    if (left < 6) left = 6;

    activeTooltipEl.style.left = `${left}px`;
    activeTooltipEl.style.top = `${rect.bottom + 6}px`;

    const popupHeight = document.body.offsetHeight;
    if (rect.bottom + activeTooltipEl.offsetHeight + 10 > popupHeight) {
      activeTooltipEl.style.top = `${rect.top - activeTooltipEl.offsetHeight - 6}px`;
    }
  }

  /**
   * Removes active floating tooltip.
   */
  function hideTooltip() {
    if (activeTooltipEl) {
      activeTooltipEl.remove();
      activeTooltipEl = null;
    }
  }

  /**
   * Copies string content to system clipboard with button feedback animation.
   * @param {string} text
   * @param {HTMLElement} [targetEl]
   * @param {string} [customMsg]
   */
  function copyToClipboard(text, targetEl, customMsg) {
    navigator.clipboard.writeText(text).then(() => {
      showToast(customMsg || 'User-Agent copied to clipboard!', 'success');
      if (targetEl) {
        targetEl.classList.add('copied');
        setTimeout(() => targetEl.classList.remove('copied'), 1200);
      }
    }).catch(() => {
      showToast('Copy failed. Please grant clipboard permissions.', 'error');
    });
  }

  /**
   * Escapes HTML entities for safe DOM rendering.
   * @param {string} str
   * @returns {string}
   */
  function escapeHtml(str) {
    if (!str) return '';
    const div = document.createElement('div');
    div.textContent = str;
    return div.innerHTML;
  }

  /**
   * Wraps search query match with highlight mark tag.
   * @param {string} text
   * @param {string} query
   * @returns {string} HTML string
   */
  function highlightText(text, query) {
    if (!query) return escapeHtml(text);
    const lower = text.toLowerCase();
    const idx = lower.indexOf(query.toLowerCase());
    if (idx === -1) return escapeHtml(text);
    return `${escapeHtml(text.substring(0, idx))}<mark class="search-highlight">${escapeHtml(text.substring(idx, idx + query.length))}</mark>${escapeHtml(text.substring(idx + query.length))}`;
  }

  init();
});

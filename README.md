<div align="center">

  <img src="https://capsule-render.vercel.app/api?type=waving&color=gradient&customColorList=0,2,4,6,8,10&height=230&section=header&text=MimicUA&fontSize=52&fontColor=ffffff&fontAlignY=38&desc=Professional%20Dual-Layer%20User-Agent%20Switcher%20%26%20Device%20Emulator&descSize=18&descAlignY=62&animation=fadeIn" width="100%" alt="MimicUA Header Banner" />

  <p align="center">
    <a href="https://github.com/Mr-SxR/MimicUA/releases/tag/v2.0.0">
      <img src="https://img.shields.io/badge/Release-v2.0.0-0284c7?style=for-the-badge&logo=github&logoColor=white" alt="Release v2.0.0" />
    </a>
    <img src="https://img.shields.io/badge/Manifest-V3-10b981?style=for-the-badge&logo=googlechrome&logoColor=white" alt="Manifest V3" />
    <img src="https://img.shields.io/badge/Platform-Chrome%20%7C%20Edge%20%7C%20Brave%20%7C%20Opera-f59e0b?style=for-the-badge&logo=googlechrome&logoColor=white" alt="Supported Platforms" />
    <img src="https://img.shields.io/badge/Presets-227%2B-8b5cf6?style=for-the-badge" alt="227+ Presets" />
    <img src="https://img.shields.io/badge/License-MIT-38bdf8?style=for-the-badge" alt="License MIT" />
    <img src="https://img.shields.io/badge/Author-Mr--SxR-6366f1?style=for-the-badge&logo=github" alt="Author Mr-SxR" />
  </p>

  <p align="center">
    <strong>The next-generation, leak-proof User-Agent Switcher and Device Emulator for Chromium browsers.</strong><br>
    Seamlessly synchronizes HTTP network headers (<code>declarativeNetRequest</code>), JavaScript DOM properties (<code>navigator.*</code>), and modern Client Hints (<code>Sec-CH-UA</code>) with native <code>Function.prototype.toString</code> integrity.
  </p>

  <p align="center">
    <a href="#-why-mimicua">Why MimicUA?</a> •
    <a href="#-key-features">Features</a> •
    <a href="#-use-cases">Use Cases</a> •
    <a href="#-supported-preset-categories">Preset Library</a> •
    <a href="#-installation-guide">Installation</a> •
    <a href="#-how-to-use">How to Use</a> •
    <a href="#-architecture--technology-stack">Architecture</a> •
    <a href="#-faq--troubleshooting">FAQ</a>
  </p>

</div>

---

## 💡 Why MimicUA?

Most traditional User-Agent switcher extensions on the Chrome Web Store were architected years ago under Manifest V2. They typically alter only the outgoing HTTP `User-Agent` request header. 

Modern websites, client-side frameworks, and anti-bot systems do not rely solely on request headers anymore:
1. They inspect client-side JavaScript APIs: `navigator.userAgent`, `navigator.appVersion`, `navigator.platform`, and `navigator.vendor`.
2. They query the modern **User-Agent Client Hints API** (`navigator.userAgentData`, `Sec-CH-UA`, `Sec-CH-UA-Platform`, `Sec-CH-UA-Mobile`).
3. They inspect native method tampering using `Function.prototype.toString` checks on property getters.

When an extension changes HTTP headers without perfectly mirroring DOM properties and Client Hints, it creates an immediate fingerprint mismatch that triggers bot challenges and broken layouts.

**MimicUA resolves this problem with true dual-layer synchronization.** It hooks both the Chromium network stack via declarative rules and the page execution environment (`MAIN` world) before any website script executes.

---

## 🎯 Primary Use Cases

- 🧪 **Web Developers & QA Engineers:** Test responsive layouts, browser-conditional logic, and mobile-specific features directly from your desktop browser without touching physical devices.
- 🕵️ **Privacy & Anti-Fingerprinting:** Mask your real operating system, device architecture, and browser build from invasive web trackers and profiling scripts.
- 🤖 **Web Scraping & Crawler Diagnostics:** Emulate search engine crawlers (Googlebot, Bingbot, YandexBot) to inspect pre-rendered HTML, meta tags, and paywall behaviors.
- 📱 **Mobile-Only Web Portals:** Access mobile-exclusive web portals (e.g., mobile Instagram, banking portals, or simplified web apps) from wide desktop screens.
- 🔬 **Security & Penetration Testing:** Validate WAF rules, user-agent parsing filters, and header-based access controls during web app assessments.

---

## ✨ Key Features

### ⚡ True Dual-Layer Synchronization
- **Network Layer:** Leverages Chromium's high-performance `declarativeNetRequest` API to dynamically rewrite request headers (`User-Agent`, `Sec-CH-UA`, `Sec-CH-UA-Mobile`, `Sec-CH-UA-Platform`) with zero network latency.
- **DOM Engine Layer:** Injects an isolated `MAIN` world script at `document_start` to intercept `navigator` getters before the target page's scripts even initialize.

### 🛡️ Modern Client Hints (Sec-CH-UA) Emulation
- When emulating Chromium-based browsers (Chrome, Edge, Opera), MimicUA dynamically calculates brand arrays, version tokens, and high-entropy values (`uaFullVersion`, `architecture`, `bitness`, `model`).
- When switching to non-Chromium platforms (Firefox, Safari, bots), MimicUA cleanly strips Client Hints headers and sets `navigator.userAgentData` to `undefined`, preventing dead giveaways.

### 🧬 Undetectable `toString()` Native Function Masking
- Overridden property getters are tracked using an internal `WeakMap`.
- Invoking `Function.prototype.toString.call(descriptor.get)` outputs `function get userAgent() { [native code] }`, matching real browser engines and passing strict anti-bot integrity checks.

### 📚 227+ Verified Presets Across 10 Categories
- Pre-loaded with a comprehensive, up-to-date catalog of 227 device profiles:
  - **Chrome:** Windows, macOS, Linux, ChromeOS
  - **Firefox:** Desktop releases, ESR, developer editions
  - **Safari:** macOS Sequoia, Sonoma, Ventura, Monterey
  - **Microsoft Edge:** Windows 10/11, macOS, Linux
  - **Apple iOS:** iPhone 16 Pro Max, iPhone 15, iPad Pro, iPad Air
  - **Android:** Samsung Galaxy S24 Ultra, Pixel 9 Pro, Xiaomi, OnePlus
  - **Operating Systems:** Windows 11, macOS, Ubuntu, Fedora, Arch Linux
  - **Search Engine Bots & Crawlers:** Googlebot Desktop/Mobile, Bingbot, Yahoo! Slurp, DuckDuckBot, Baiduspider, YandexBot
  - **E-Readers & Smart TVs:** Kindle Paperwhite, Apple TV, Android TV, Fire TV, PlayStation 5

### 🎨 Developer-Grade Dark Glassmorphic Dashboard
- Sleek, modern UI with cyan/emerald status accents and ambient glow indicators.
- Live active profile indicator with one-click **Reset to Default** action.
- Real-time search with keyboard navigation (`Esc` to clear).
- Dynamic category badge counter displaying exact preset match counts per category.
- Non-blocking floating toast notification system.
- Full Custom User-Agent creator supporting custom platform and vendor strings.

### 🔒 100% Client-Side & Privacy First
- Operates entirely offline within your browser.
- **Zero telemetry, zero external API calls, zero tracking analytics.**
- Strictly adheres to Manifest V3 security boundaries with no remote code execution.

---

## 📱 Supported Preset Categories

| Category | Presets Count | Examples Included |
| :--- | :---: | :--- |
| **Google Chrome** | 32 | Chrome 131, 130, 129 on Windows 11, macOS Sequoia, Linux x86_64, ChromeOS |
| **Apple Safari** | 22 | Safari 18.1, 17.5 on macOS Sequoia, Sonoma, Ventura |
| **Mozilla Firefox** | 28 | Firefox 132, 131, 128 ESR on Windows, macOS, Ubuntu |
| **Microsoft Edge** | 18 | Edge 131, 130 on Windows 11, macOS, Linux |
| **Apple iOS (Mobile)** | 35 | iPhone 16 Pro Max, iPhone 15 Pro, iPhone 14, iPad Pro 13" (M4), iPad Mini |
| **Android (Mobile)** | 42 | Samsung Galaxy S24 Ultra, Google Pixel 9 Pro, OnePlus 12, Xiaomi 14 |
| **Desktop Operating Systems** | 25 | Windows 11 24H2, macOS Sequoia 15, Ubuntu 24.04 LTS, Arch Linux |
| **Search Engine Bots & Crawlers** | 15 | Googlebot Smartphone, Googlebot Desktop, Bingbot, DuckDuckBot, Twitterbot |
| **Smart TVs & Gaming Consoles** | 6 | PlayStation 5, Xbox Series X, Apple TV, Fire TV Stick 4K |
| **E-Readers & Tablets** | 4 | Amazon Kindle Paperwhite, Kobo Clara, Oasis |

---

## 🚀 Installation Guide

### Option 1: Quick Release Install (Recommended)

1. Download the latest pre-packaged **[`MimicUA-v2.0.0.zip`](https://github.com/Mr-SxR/MimicUA/releases/tag/v2.0.0)** from the releases page.
2. Extract the `.zip` archive on your computer.
3. Open Google Chrome (or any Chromium browser: Microsoft Edge, Brave, Opera, Vivaldi).
4. Navigate to the extensions management page:
   ```text
   chrome://extensions
   ```
5. Turn on **Developer mode** using the toggle in the top-right corner.
6. Click the **Load unpacked** button in the top-left corner.
7. Select the extracted `MimicUA` project directory.
8. Pin the extension to your browser toolbar for fast access!

### Option 2: Clone from Source

```bash
# Clone the repository
git clone https://github.com/Mr-SxR/MimicUA.git

# Enter the project directory
cd MimicUA
```
Then load the folder directly in `chrome://extensions` via **Load unpacked**.

---

## 🕹️ How to Use

### 1. Activating a Preset
1. Click the **MimicUA** icon in your browser toolbar.
2. Browse through the category pills (e.g., *Chrome*, *iOS*, *Android*, *Crawlers*), or use the search bar to find a specific device (e.g., `iPhone 16` or `Googlebot`).
3. Click the **Use** button on your desired profile.
4. The extension toolbar badge will instantly update with an active status dot, and the selected profile will apply to all subsequent web requests and page visits.

### 2. Creating a Custom User-Agent
1. Open the popup and select the **Custom** tab.
2. Enter your custom **User-Agent String** (e.g., custom bot crawler or niche browser version).
3. (Optional) Specify the desired `Platform` (e.g., `Win32`, `MacIntel`, `Linux x86_64`) and `Vendor` (e.g., `Google Inc.`, `Apple Computer, Inc.`).
4. Click **Apply Custom UA**.

### 3. Quick Diagnostics & Verification
1. Navigate to the **Settings** tab.
2. View your current active profile status and verify your native browser User-Agent.
3. Use the **Copy Native User-Agent** button to quickly copy your system string for troubleshooting or comparison.
4. Test your emulation live on websites like [BrowserLeaks](https://browserleaks.com/javascript), [AmIUnique](https://amiunique.org/), or [WhatIsMyBrowser](https://www.whatismybrowser.com/).

### 4. Reverting to Default
- Click the **Reset to Default** button located at the top of the popup dashboard at any time to instantly restore native browser behavior.

---

## 🛠️ Architecture & Technology Stack

| Layer | Technology / Implementation |
| :--- | :--- |
| **Extension Standard** | Google Chrome Manifest V3 (MV3) |
| **Network Rewriting** | `chrome.declarativeNetRequest` (Dynamic Ruleset API) |
| **DOM Spoofing Engine** | Isolated `MAIN` world script execution (`chrome.scripting`) |
| **Lifecycle Manager** | Ephemeral Service Worker (`background/service-worker.js`) |
| **Navigation Sync** | `chrome.webNavigation.onCommitted` with atomic lock singleton |
| **Integrity Guard** | `WeakMap`-backed `Function.prototype.toString` proxy |
| **Client Hints Engine** | Dynamic brand token derivation & high-entropy simulation |
| **Preset Storage** | Static memory index (`data/user-agents.js`) + `chrome.storage.local` |
| **UI Design System** | Modern Glassmorphic Dark Theme (`popup.css`) |

### Directory Structure

```text
MimicUA/
├── manifest.json             # Manifest V3 configuration & permission boundaries
├── LICENSE                   # MIT Open Source License
├── README.md                 # Project documentation & SEO guide
├── background/
│   └── service-worker.js     # DNR rule builder, Client Hints calculator & DOM injector
├── content/
│   └── spoof.js              # Standalone MAIN-world DOM property interceptor
├── data/
│   └── user-agents.js        # Catalog of 227+ curated, verified device presets
├── popup/
│   ├── popup.html            # Segmented tab interface & custom UA form
│   ├── popup.css             # Glassmorphic developer UI & status indicators
│   └── popup.js              # State manager, real-time search & toast notifications
└── icons/
    ├── icon.svg              # Master vector extension artwork
    ├── icon16.png            # 16x16 toolbar icon
    ├── icon32.png            # 32x32 Retina display icon
    ├── icon48.png            # 48x48 extension management icon
    └── icon128.png           # 128x128 Chrome Web Store artwork
```

---

## 🛡️ Privacy & Security

- **Zero Remote Dependencies:** Does not load scripts, stylesheets, or fonts from third-party CDNs. Everything is bundled locally.
- **No Data Harvesting:** Does not collect browsing history, visit URLs, or transmit device analytics.
- **Strict Permission Boundaries:** Uses only the minimum required Chrome permissions:
  - `declarativeNetRequest`: To rewrite HTTP request headers safely without intercepting request bodies.
  - `storage`: To persist your active profile choice across browser restarts.
  - `scripting` & `webNavigation`: To inject the DOM spoofing script into the `MAIN` world at `document_start`.

---

## ❓ Frequently Asked Questions (FAQ)

<details>
<summary><b>Does MimicUA bypass Cloudflare, Akamai, or DataDome bot challenges?</b></summary>
While MimicUA provides state-of-the-art dual-layer User-Agent and Client Hints spoofing with native <code>toString()</code> integrity, advanced anti-bot systems also evaluate TLS fingerprints (JA3/JA4), TCP/IP parameters, and WebGL/Canvas rendering signatures. MimicUA perfectly handles the HTTP and DOM identity layers; pairing it with appropriate proxy networks and browser configurations yields optimal results.
</details>

<details>
<summary><b>Why do some websites still detect my real screen resolution?</b></summary>
User-Agent Switchers spoof the device software identity (browser version, OS, Client Hints). Hardware properties like <code>window.screen.width</code> and CSS media queries are governed by your physical display or DevTools device metrics emulation. For full device testing, combine MimicUA with Chrome DevTools Device Mode (<code>Ctrl + Shift + M</code>).
</details>

<details>
<summary><b>Does MimicUA slow down page loading?</b></summary>
Not at all. MimicUA uses Chromium's native C++ <code>declarativeNetRequest</code> API to handle network headers without routing requests through a JavaScript proxy. DOM injections are executed synchronously in microseconds at <code>document_start</code>, resulting in zero perceivable latency.
</details>

<details>
<summary><b>Will my active preset persist if I restart the browser?</b></summary>
Yes. Your chosen preset or custom configuration is saved in <code>chrome.storage.local</code>. When you launch your browser, the service worker automatically restores the active rules and updates the toolbar indicator badge.
</details>

---

## 🤝 Contributing

Contributions, feature suggestions, and bug reports are welcome! 
Feel free to open an issue or submit a pull request on the [MimicUA Repository](https://github.com/Mr-SxR/MimicUA).

---

## 📄 License

This project is licensed under the **MIT License** — see the [LICENSE](LICENSE) file for details.

<div align="center">
  <sub>Built with ❤️ by <a href="https://github.com/Mr-SxR">Masudur Rahman Sifat (Mr-SxR)</a></sub>
</div>

/**
 * @fileoverview Production-ready User-Agent database with client hints and platform metadata.
 * Categorized by OS, Device Type, and Platform for dual-layer header and DOM emulation.
 * @license MIT
 */

(function (root, factory) {
  if (typeof module === 'object' && module.exports) {
    module.exports = factory();
  } else {
    root.USER_AGENTS_DB = factory();
  }
})(typeof self !== 'undefined' ? self : this, function () {
  'use strict';

  const categories = [
  {
    "id": "windows",
    "name": "Windows",
    "icon": "windows",
    "type": "desktop",
    "items": [
      {
        "id": "win11-chrome-133",
        "name": "Windows 11 · Chrome 133 (Latest)",
        "ua": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/133.0.0.0 Safari/537.36",
        "platform": "Win32",
        "vendor": "Google Inc.",
        "maxTouchPoints": 0,
        "mobile": false
      },
      {
        "id": "win11-edge-133",
        "name": "Windows 11 · Microsoft Edge 133",
        "ua": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/133.0.0.0 Safari/537.36 Edg/133.0.0.0",
        "platform": "Win32",
        "vendor": "Google Inc.",
        "maxTouchPoints": 0,
        "mobile": false
      },
      {
        "id": "win11-firefox-135",
        "name": "Windows 11 · Firefox 135",
        "ua": "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:135.0) Gecko/20100101 Firefox/135.0",
        "platform": "Win32",
        "vendor": "",
        "maxTouchPoints": 0,
        "mobile": false
      },
      {
        "id": "windows-windows-95",
        "name": "Windows 95",
        "ua": "Mozilla/4.0 (compatible; MSIE 5.5; Windows 95)",
        "platform": "Win32",
        "vendor": "Google Inc.",
        "maxTouchPoints": 0,
        "mobile": false
      },
      {
        "id": "windows-windows-98",
        "name": "Windows 98",
        "ua": "Mozilla/4.0 (compatible; MSIE 6.0; Windows 98)",
        "platform": "Win32",
        "vendor": "Google Inc.",
        "maxTouchPoints": 0,
        "mobile": false
      },
      {
        "id": "windows-windows-me",
        "name": "Windows ME",
        "ua": "Mozilla/4.0 (compatible; MSIE 6.0; Windows ME)",
        "platform": "Win32",
        "vendor": "Google Inc.",
        "maxTouchPoints": 0,
        "mobile": false
      },
      {
        "id": "windows-windows-2000",
        "name": "Windows 2000",
        "ua": "Mozilla/4.0 (compatible; MSIE 6.0; Windows NT 5.0)",
        "platform": "Win32",
        "vendor": "Google Inc.",
        "maxTouchPoints": 0,
        "mobile": false
      },
      {
        "id": "windows-windows-xp",
        "name": "Windows XP",
        "ua": "Mozilla/5.0 (Windows NT 5.1; rv:52.0) Gecko/20100101 Firefox/52.0",
        "platform": "Win32",
        "vendor": "",
        "maxTouchPoints": 0,
        "mobile": false
      },
      {
        "id": "windows-windows-xp-x64",
        "name": "Windows XP x64",
        "ua": "Mozilla/5.0 (Windows NT 5.2; Win64; x64; rv:52.0) Gecko/20100101 Firefox/52.0",
        "platform": "Win32",
        "vendor": "",
        "maxTouchPoints": 0,
        "mobile": false
      },
      {
        "id": "windows-windows-vista",
        "name": "Windows Vista",
        "ua": "Mozilla/5.0 (Windows NT 6.0; rv:52.0) Gecko/20100101 Firefox/52.0",
        "platform": "Win32",
        "vendor": "",
        "maxTouchPoints": 0,
        "mobile": false
      },
      {
        "id": "windows-windows-7",
        "name": "Windows 7",
        "ua": "Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/109.0.0.0 Safari/537.36",
        "platform": "Win32",
        "vendor": "Google Inc.",
        "maxTouchPoints": 0,
        "mobile": false
      },
      {
        "id": "windows-windows-8",
        "name": "Windows 8",
        "ua": "Mozilla/5.0 (Windows NT 6.2; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/109.0.0.0 Safari/537.36",
        "platform": "Win32",
        "vendor": "Google Inc.",
        "maxTouchPoints": 0,
        "mobile": false
      },
      {
        "id": "windows-windows-8-1",
        "name": "Windows 8.1",
        "ua": "Mozilla/5.0 (Windows NT 6.3; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/109.0.0.0 Safari/537.36",
        "platform": "Win32",
        "vendor": "Google Inc.",
        "maxTouchPoints": 0,
        "mobile": false
      },
      {
        "id": "windows-windows-10",
        "name": "Windows 10",
        "ua": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
        "platform": "Win32",
        "vendor": "Google Inc.",
        "maxTouchPoints": 0,
        "mobile": false
      },
      {
        "id": "windows-windows-11",
        "name": "Windows 11",
        "ua": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36",
        "platform": "Win32",
        "vendor": "Google Inc.",
        "maxTouchPoints": 0,
        "mobile": false
      },
      {
        "id": "windows-windows-server-2003",
        "name": "Windows Server 2003",
        "ua": "Mozilla/5.0 (Windows NT 5.2; rv:52.0) Gecko/20100101 Firefox/52.0",
        "platform": "Win32",
        "vendor": "",
        "maxTouchPoints": 0,
        "mobile": false
      },
      {
        "id": "windows-windows-server-2008",
        "name": "Windows Server 2008",
        "ua": "Mozilla/5.0 (Windows NT 6.0; Win64; x64; rv:68.0) Gecko/20100101 Firefox/68.0",
        "platform": "Win32",
        "vendor": "",
        "maxTouchPoints": 0,
        "mobile": false
      },
      {
        "id": "windows-windows-server-2012",
        "name": "Windows Server 2012",
        "ua": "Mozilla/5.0 (Windows NT 6.2; Win64; x64; rv:68.0) Gecko/20100101 Firefox/68.0",
        "platform": "Win32",
        "vendor": "",
        "maxTouchPoints": 0,
        "mobile": false
      },
      {
        "id": "windows-windows-server-2016",
        "name": "Windows Server 2016",
        "ua": "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:78.0) Gecko/20100101 Firefox/78.0",
        "platform": "Win32",
        "vendor": "",
        "maxTouchPoints": 0,
        "mobile": false
      },
      {
        "id": "windows-windows-server-2019",
        "name": "Windows Server 2019",
        "ua": "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:91.0) Gecko/20100101 Firefox/91.0",
        "platform": "Win32",
        "vendor": "",
        "maxTouchPoints": 0,
        "mobile": false
      },
      {
        "id": "windows-windows-server-2022",
        "name": "Windows Server 2022",
        "ua": "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:115.0) Gecko/20100101 Firefox/115.0",
        "platform": "Win32",
        "vendor": "",
        "maxTouchPoints": 0,
        "mobile": false
      }
    ]
  },
  {
    "id": "macos",
    "name": "macOS",
    "icon": "macos",
    "type": "desktop",
    "items": [
      {
        "id": "macos-15-sequoia-safari",
        "name": "macOS 15 Sequoia · Safari 18.2",
        "ua": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/18.2 Safari/605.1.15",
        "platform": "MacIntel",
        "vendor": "Apple Computer, Inc.",
        "maxTouchPoints": 0,
        "mobile": false
      },
      {
        "id": "macos-15-sequoia-chrome",
        "name": "macOS 15 Sequoia · Chrome 133",
        "ua": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/133.0.0.0 Safari/537.36",
        "platform": "MacIntel",
        "vendor": "Google Inc.",
        "maxTouchPoints": 0,
        "mobile": false
      },
      {
        "id": "macos-mac-os-x-10-5-leopard",
        "name": "Mac OS X 10.5 Leopard",
        "ua": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_5_8) AppleWebKit/534.50.2 (KHTML, like Gecko) Version/5.0.6 Safari/533.22.3",
        "platform": "MacIntel",
        "vendor": "Apple Computer, Inc.",
        "maxTouchPoints": 0,
        "mobile": false
      },
      {
        "id": "macos-mac-os-x-10-6-snow-leopard",
        "name": "Mac OS X 10.6 Snow Leopard",
        "ua": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_6_8) AppleWebKit/537.13+ (KHTML, like Gecko) Version/5.1.7 Safari/534.57.2",
        "platform": "MacIntel",
        "vendor": "Apple Computer, Inc.",
        "maxTouchPoints": 0,
        "mobile": false
      },
      {
        "id": "macos-mac-os-x-10-7-lion",
        "name": "Mac OS X 10.7 Lion",
        "ua": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_7_5) AppleWebKit/537.78.2 (KHTML, like Gecko) Version/6.1.6 Safari/537.78.2",
        "platform": "MacIntel",
        "vendor": "Apple Computer, Inc.",
        "maxTouchPoints": 0,
        "mobile": false
      },
      {
        "id": "macos-os-x-10-8-mountain-lion",
        "name": "OS X 10.8 Mountain Lion",
        "ua": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_8_5) AppleWebKit/600.8.9 (KHTML, like Gecko) Version/6.2.8 Safari/537.85.17",
        "platform": "MacIntel",
        "vendor": "Apple Computer, Inc.",
        "maxTouchPoints": 0,
        "mobile": false
      },
      {
        "id": "macos-os-x-10-9-mavericks",
        "name": "OS X 10.9 Mavericks",
        "ua": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_9_5) AppleWebKit/601.7.8 (KHTML, like Gecko) Version/9.1.3 Safari/537.86.7",
        "platform": "MacIntel",
        "vendor": "Apple Computer, Inc.",
        "maxTouchPoints": 0,
        "mobile": false
      },
      {
        "id": "macos-os-x-10-10-yosemite",
        "name": "OS X 10.10 Yosemite",
        "ua": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_5) AppleWebKit/603.3.8 (KHTML, like Gecko) Version/10.1.2 Safari/603.3.8",
        "platform": "MacIntel",
        "vendor": "Apple Computer, Inc.",
        "maxTouchPoints": 0,
        "mobile": false
      },
      {
        "id": "macos-os-x-10-11-el-capitan",
        "name": "OS X 10.11 El Capitan",
        "ua": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_6) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/11.1.2 Safari/605.1.15",
        "platform": "MacIntel",
        "vendor": "Apple Computer, Inc.",
        "maxTouchPoints": 0,
        "mobile": false
      },
      {
        "id": "macos-macos-10-12-sierra",
        "name": "macOS 10.12 Sierra",
        "ua": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_6) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/12.1.2 Safari/605.1.15",
        "platform": "MacIntel",
        "vendor": "Apple Computer, Inc.",
        "maxTouchPoints": 0,
        "mobile": false
      },
      {
        "id": "macos-macos-10-13-high-sierra",
        "name": "macOS 10.13 High Sierra",
        "ua": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_6) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.1.2 Safari/605.1.15",
        "platform": "MacIntel",
        "vendor": "Apple Computer, Inc.",
        "maxTouchPoints": 0,
        "mobile": false
      },
      {
        "id": "macos-macos-10-14-mojave",
        "name": "macOS 10.14 Mojave",
        "ua": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/14.1.2 Safari/605.1.15",
        "platform": "MacIntel",
        "vendor": "Apple Computer, Inc.",
        "maxTouchPoints": 0,
        "mobile": false
      },
      {
        "id": "macos-macos-10-15-catalina",
        "name": "macOS 10.15 Catalina",
        "ua": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/15.6.1 Safari/605.1.15",
        "platform": "MacIntel",
        "vendor": "Apple Computer, Inc.",
        "maxTouchPoints": 0,
        "mobile": false
      },
      {
        "id": "macos-macos-11-big-sur",
        "name": "macOS 11 Big Sur",
        "ua": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/16.6 Safari/605.1.15",
        "platform": "MacIntel",
        "vendor": "Apple Computer, Inc.",
        "maxTouchPoints": 0,
        "mobile": false
      },
      {
        "id": "macos-macos-12-monterey",
        "name": "macOS 12 Monterey",
        "ua": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/110.0.0.0 Safari/537.36",
        "platform": "MacIntel",
        "vendor": "Google Inc.",
        "maxTouchPoints": 0,
        "mobile": false
      },
      {
        "id": "macos-macos-13-ventura",
        "name": "macOS 13 Ventura",
        "ua": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
        "platform": "MacIntel",
        "vendor": "Google Inc.",
        "maxTouchPoints": 0,
        "mobile": false
      },
      {
        "id": "macos-macos-14-sonoma",
        "name": "macOS 14 Sonoma",
        "ua": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36",
        "platform": "MacIntel",
        "vendor": "Google Inc.",
        "maxTouchPoints": 0,
        "mobile": false
      },
      {
        "id": "macos-macos-15-sequoia",
        "name": "macOS 15 Sequoia",
        "ua": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/18.0 Safari/605.1.15",
        "platform": "MacIntel",
        "vendor": "Apple Computer, Inc.",
        "maxTouchPoints": 0,
        "mobile": false
      }
    ]
  },
  {
    "id": "linux",
    "name": "Linux & ChromeOS",
    "icon": "linux",
    "type": "desktop",
    "items": [
      {
        "id": "linux-ubuntu-18-04-lts",
        "name": "Ubuntu 18.04 LTS",
        "ua": "Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:68.0) Gecko/20100101 Firefox/68.0",
        "platform": "Linux x86_64",
        "vendor": "",
        "maxTouchPoints": 0,
        "mobile": false
      },
      {
        "id": "linux-ubuntu-20-04-lts",
        "name": "Ubuntu 20.04 LTS",
        "ua": "Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:88.0) Gecko/20100101 Firefox/88.0",
        "platform": "Linux x86_64",
        "vendor": "",
        "maxTouchPoints": 0,
        "mobile": false
      },
      {
        "id": "linux-ubuntu-22-04-lts",
        "name": "Ubuntu 22.04 LTS",
        "ua": "Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:109.0) Gecko/20100101 Firefox/117.0",
        "platform": "Linux x86_64",
        "vendor": "",
        "maxTouchPoints": 0,
        "mobile": false
      },
      {
        "id": "linux-ubuntu-24-04-lts",
        "name": "Ubuntu 24.04 LTS",
        "ua": "Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:131.0) Gecko/20100101 Firefox/131.0",
        "platform": "Linux x86_64",
        "vendor": "",
        "maxTouchPoints": 0,
        "mobile": false
      },
      {
        "id": "linux-fedora-38",
        "name": "Fedora 38",
        "ua": "Mozilla/5.0 (X11; Fedora; Linux x86_64; rv:109.0) Gecko/20100101 Firefox/117.0",
        "platform": "Linux x86_64",
        "vendor": "",
        "maxTouchPoints": 0,
        "mobile": false
      },
      {
        "id": "linux-fedora-39",
        "name": "Fedora 39",
        "ua": "Mozilla/5.0 (X11; Fedora; Linux x86_64; rv:120.0) Gecko/20100101 Firefox/120.0",
        "platform": "Linux x86_64",
        "vendor": "",
        "maxTouchPoints": 0,
        "mobile": false
      },
      {
        "id": "linux-fedora-40",
        "name": "Fedora 40",
        "ua": "Mozilla/5.0 (X11; Fedora; Linux x86_64; rv:131.0) Gecko/20100101 Firefox/131.0",
        "platform": "Linux x86_64",
        "vendor": "",
        "maxTouchPoints": 0,
        "mobile": false
      },
      {
        "id": "linux-debian-10-buster",
        "name": "Debian 10 Buster",
        "ua": "Mozilla/5.0 (X11; Linux x86_64; rv:68.0) Gecko/20100101 Firefox/68.0",
        "platform": "Linux x86_64",
        "vendor": "",
        "maxTouchPoints": 0,
        "mobile": false
      },
      {
        "id": "linux-debian-11-bullseye",
        "name": "Debian 11 Bullseye",
        "ua": "Mozilla/5.0 (X11; Linux x86_64; rv:91.0) Gecko/20100101 Firefox/91.0",
        "platform": "Linux x86_64",
        "vendor": "",
        "maxTouchPoints": 0,
        "mobile": false
      },
      {
        "id": "linux-debian-12-bookworm",
        "name": "Debian 12 Bookworm",
        "ua": "Mozilla/5.0 (X11; Linux x86_64; rv:115.0) Gecko/20100101 Firefox/115.0",
        "platform": "Linux x86_64",
        "vendor": "",
        "maxTouchPoints": 0,
        "mobile": false
      },
      {
        "id": "linux-arch-linux",
        "name": "Arch Linux",
        "ua": "Mozilla/5.0 (X11; Linux x86_64; rv:131.0) Gecko/20100101 Firefox/131.0",
        "platform": "Linux x86_64",
        "vendor": "",
        "maxTouchPoints": 0,
        "mobile": false
      },
      {
        "id": "linux-linux-mint-21",
        "name": "Linux Mint 21",
        "ua": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
        "platform": "Linux x86_64",
        "vendor": "Google Inc.",
        "maxTouchPoints": 0,
        "mobile": false
      },
      {
        "id": "linux-opensuse-tumbleweed",
        "name": "openSUSE Tumbleweed",
        "ua": "Mozilla/5.0 (X11; Linux x86_64; rv:131.0) Gecko/20100101 Firefox/131.0",
        "platform": "Linux x86_64",
        "vendor": "",
        "maxTouchPoints": 0,
        "mobile": false
      },
      {
        "id": "linux-gentoo",
        "name": "Gentoo",
        "ua": "Mozilla/5.0 (X11; Linux x86_64; rv:115.0) Gecko/20100101 Firefox/115.0",
        "platform": "Linux x86_64",
        "vendor": "",
        "maxTouchPoints": 0,
        "mobile": false
      },
      {
        "id": "linux-centos-7",
        "name": "CentOS 7",
        "ua": "Mozilla/5.0 (X11; CentOS; Linux x86_64; rv:68.0) Gecko/20100101 Firefox/68.0",
        "platform": "Linux x86_64",
        "vendor": "",
        "maxTouchPoints": 0,
        "mobile": false
      },
      {
        "id": "linux-centos-stream-9",
        "name": "CentOS Stream 9",
        "ua": "Mozilla/5.0 (X11; Linux x86_64; rv:115.0) Gecko/20100101 Firefox/115.0",
        "platform": "Linux x86_64",
        "vendor": "",
        "maxTouchPoints": 0,
        "mobile": false
      },
      {
        "id": "linux-red-hat-enterprise-9",
        "name": "Red Hat Enterprise 9",
        "ua": "Mozilla/5.0 (X11; Linux x86_64; rv:102.0) Gecko/20100101 Firefox/102.0",
        "platform": "Linux x86_64",
        "vendor": "",
        "maxTouchPoints": 0,
        "mobile": false
      },
      {
        "id": "linux-linux-generic-x86-64",
        "name": "Linux Generic (x86_64)",
        "ua": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36",
        "platform": "Linux x86_64",
        "vendor": "Google Inc.",
        "maxTouchPoints": 0,
        "mobile": false
      },
      {
        "id": "chrome-os-chrome-os-90",
        "name": "Chrome OS 90",
        "ua": "Mozilla/5.0 (X11; CrOS x86_64 13816.64.0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.218 Safari/537.36",
        "platform": "Linux x86_64",
        "vendor": "Google Inc.",
        "maxTouchPoints": 10,
        "mobile": false
      },
      {
        "id": "chrome-os-chrome-os-100",
        "name": "Chrome OS 100",
        "ua": "Mozilla/5.0 (X11; CrOS x86_64 14526.89.0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/100.0.4896.133 Safari/537.36",
        "platform": "Linux x86_64",
        "vendor": "Google Inc.",
        "maxTouchPoints": 10,
        "mobile": false
      },
      {
        "id": "chrome-os-chrome-os-110",
        "name": "Chrome OS 110",
        "ua": "Mozilla/5.0 (X11; CrOS x86_64 15359.58.0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/110.0.5481.100 Safari/537.36",
        "platform": "Linux x86_64",
        "vendor": "Google Inc.",
        "maxTouchPoints": 10,
        "mobile": false
      },
      {
        "id": "chrome-os-chrome-os-120",
        "name": "Chrome OS 120",
        "ua": "Mozilla/5.0 (X11; CrOS x86_64 15917.71.0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.6099.203 Safari/537.36",
        "platform": "Linux x86_64",
        "vendor": "Google Inc.",
        "maxTouchPoints": 10,
        "mobile": false
      },
      {
        "id": "chrome-os-chrome-os-130",
        "name": "Chrome OS 130",
        "ua": "Mozilla/5.0 (X11; CrOS x86_64 16200.45.0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0.6723.91 Safari/537.36",
        "platform": "Linux x86_64",
        "vendor": "Google Inc.",
        "maxTouchPoints": 10,
        "mobile": false
      }
    ]
  },
  {
    "id": "ios",
    "name": "iOS (iPhone)",
    "icon": "ios",
    "type": "mobile",
    "items": [
      {
        "id": "iphone-16-pro-safari",
        "name": "iPhone 16 Pro · iOS 18.3 Safari",
        "ua": "Mozilla/5.0 (iPhone; CPU iPhone OS 18_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/18.3 Mobile/15E148 Safari/604.1",
        "platform": "iPhone",
        "vendor": "Apple Computer, Inc.",
        "maxTouchPoints": 5,
        "mobile": true
      },
      {
        "id": "iphone-16-chrome",
        "name": "iPhone 16 · Chrome 133",
        "ua": "Mozilla/5.0 (iPhone; CPU iPhone OS 18_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) CriOS/133.0.6943.43 Mobile/15E148 Safari/604.1",
        "platform": "iPhone",
        "vendor": "Google Inc.",
        "maxTouchPoints": 5,
        "mobile": true
      },
      {
        "id": "ios-iphone-iphone-os-1-0",
        "name": "iPhone OS 1.0",
        "ua": "Mozilla/5.0 (iPhone; U; CPU like Mac OS X; en) AppleWebKit/420+ (KHTML, like Gecko) Version/3.0 Mobile/1A543 Safari/419.3",
        "platform": "iPhone",
        "vendor": "Apple Computer, Inc.",
        "maxTouchPoints": 5,
        "mobile": true
      },
      {
        "id": "ios-iphone-iphone-os-2-0",
        "name": "iPhone OS 2.0",
        "ua": "Mozilla/5.0 (iPhone; U; CPU iPhone OS 2_0 like Mac OS X; en-us) AppleWebKit/525.18.1 (KHTML, like Gecko) Version/3.1.1 Mobile/5A347 Safari/525.20",
        "platform": "iPhone",
        "vendor": "Apple Computer, Inc.",
        "maxTouchPoints": 5,
        "mobile": true
      },
      {
        "id": "ios-iphone-iphone-os-3-0",
        "name": "iPhone OS 3.0",
        "ua": "Mozilla/5.0 (iPhone; U; CPU iPhone OS 3_0 like Mac OS X; en-us) AppleWebKit/528.18 (KHTML, like Gecko) Version/4.0 Mobile/7A341 Safari/528.16",
        "platform": "iPhone",
        "vendor": "Apple Computer, Inc.",
        "maxTouchPoints": 5,
        "mobile": true
      },
      {
        "id": "ios-iphone-ios-4-0",
        "name": "iOS 4.0",
        "ua": "Mozilla/5.0 (iPhone; U; CPU iPhone OS 4_0 like Mac OS X; en-us) AppleWebKit/532.9 (KHTML, like Gecko) Version/4.0.5 Mobile/8A293 Safari/531.22.7",
        "platform": "iPhone",
        "vendor": "Apple Computer, Inc.",
        "maxTouchPoints": 5,
        "mobile": true
      },
      {
        "id": "ios-iphone-ios-5-0",
        "name": "iOS 5.0",
        "ua": "Mozilla/5.0 (iPhone; CPU iPhone OS 5_0 like Mac OS X) AppleWebKit/534.46 (KHTML, like Gecko) Version/5.1 Mobile/9A334 Safari/7534.48.3",
        "platform": "iPhone",
        "vendor": "Apple Computer, Inc.",
        "maxTouchPoints": 5,
        "mobile": true
      },
      {
        "id": "ios-iphone-ios-6-0",
        "name": "iOS 6.0",
        "ua": "Mozilla/5.0 (iPhone; CPU iPhone OS 6_0 like Mac OS X) AppleWebKit/536.26 (KHTML, like Gecko) Version/6.0 Mobile/10A5376e Safari/8536.25",
        "platform": "iPhone",
        "vendor": "Apple Computer, Inc.",
        "maxTouchPoints": 5,
        "mobile": true
      },
      {
        "id": "ios-iphone-ios-7-0",
        "name": "iOS 7.0",
        "ua": "Mozilla/5.0 (iPhone; CPU iPhone OS 7_0 like Mac OS X) AppleWebKit/537.51.1 (KHTML, like Gecko) Version/7.0 Mobile/11A465 Safari/9537.53",
        "platform": "iPhone",
        "vendor": "Apple Computer, Inc.",
        "maxTouchPoints": 5,
        "mobile": true
      },
      {
        "id": "ios-iphone-ios-8-0",
        "name": "iOS 8.0",
        "ua": "Mozilla/5.0 (iPhone; CPU iPhone OS 8_0 like Mac OS X) AppleWebKit/600.1.4 (KHTML, like Gecko) Version/8.0 Mobile/12A365 Safari/600.1.4",
        "platform": "iPhone",
        "vendor": "Apple Computer, Inc.",
        "maxTouchPoints": 5,
        "mobile": true
      },
      {
        "id": "ios-iphone-ios-9-0",
        "name": "iOS 9.0",
        "ua": "Mozilla/5.0 (iPhone; CPU iPhone OS 9_0 like Mac OS X) AppleWebKit/601.1.46 (KHTML, like Gecko) Version/9.0 Mobile/13A344 Safari/601.1",
        "platform": "iPhone",
        "vendor": "Apple Computer, Inc.",
        "maxTouchPoints": 5,
        "mobile": true
      },
      {
        "id": "ios-iphone-ios-10-0",
        "name": "iOS 10.0",
        "ua": "Mozilla/5.0 (iPhone; CPU iPhone OS 10_0 like Mac OS X) AppleWebKit/602.1.38 (KHTML, like Gecko) Version/10.0 Mobile/14A300 Safari/602.1",
        "platform": "iPhone",
        "vendor": "Apple Computer, Inc.",
        "maxTouchPoints": 5,
        "mobile": true
      },
      {
        "id": "ios-iphone-ios-11-0",
        "name": "iOS 11.0",
        "ua": "Mozilla/5.0 (iPhone; CPU iPhone OS 11_0 like Mac OS X) AppleWebKit/604.1.38 (KHTML, like Gecko) Version/11.0 Mobile/15A372 Safari/604.1",
        "platform": "iPhone",
        "vendor": "Apple Computer, Inc.",
        "maxTouchPoints": 5,
        "mobile": true
      },
      {
        "id": "ios-iphone-ios-12-0",
        "name": "iOS 12.0",
        "ua": "Mozilla/5.0 (iPhone; CPU iPhone OS 12_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/12.0 Mobile/15E148 Safari/604.1",
        "platform": "iPhone",
        "vendor": "Apple Computer, Inc.",
        "maxTouchPoints": 5,
        "mobile": true
      },
      {
        "id": "ios-iphone-ios-13-0",
        "name": "iOS 13.0",
        "ua": "Mozilla/5.0 (iPhone; CPU iPhone OS 13_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0 Mobile/15E148 Safari/604.1",
        "platform": "iPhone",
        "vendor": "Apple Computer, Inc.",
        "maxTouchPoints": 5,
        "mobile": true
      },
      {
        "id": "ios-iphone-ios-14-0",
        "name": "iOS 14.0",
        "ua": "Mozilla/5.0 (iPhone; CPU iPhone OS 14_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/14.0 Mobile/15E148 Safari/604.1",
        "platform": "iPhone",
        "vendor": "Apple Computer, Inc.",
        "maxTouchPoints": 5,
        "mobile": true
      },
      {
        "id": "ios-iphone-ios-15-0",
        "name": "iOS 15.0",
        "ua": "Mozilla/5.0 (iPhone; CPU iPhone OS 15_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/15.0 Mobile/15E148 Safari/604.1",
        "platform": "iPhone",
        "vendor": "Apple Computer, Inc.",
        "maxTouchPoints": 5,
        "mobile": true
      },
      {
        "id": "ios-iphone-ios-16-0",
        "name": "iOS 16.0",
        "ua": "Mozilla/5.0 (iPhone; CPU iPhone OS 16_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/16.0 Mobile/15E148 Safari/604.1",
        "platform": "iPhone",
        "vendor": "Apple Computer, Inc.",
        "maxTouchPoints": 5,
        "mobile": true
      },
      {
        "id": "ios-iphone-ios-17-0",
        "name": "iOS 17.0",
        "ua": "Mozilla/5.0 (iPhone; CPU iPhone OS 17_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.0 Mobile/15E148 Safari/604.1",
        "platform": "iPhone",
        "vendor": "Apple Computer, Inc.",
        "maxTouchPoints": 5,
        "mobile": true
      },
      {
        "id": "ios-iphone-ios-18-0",
        "name": "iOS 18.0",
        "ua": "Mozilla/5.0 (iPhone; CPU iPhone OS 18_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/18.0 Mobile/15E148 Safari/604.1",
        "platform": "iPhone",
        "vendor": "Apple Computer, Inc.",
        "maxTouchPoints": 5,
        "mobile": true
      },
      {
        "id": "kaios-kaios-1-0",
        "name": "KaiOS 1.0",
        "ua": "Mozilla/5.0 (Mobile; LYF/F90M/LYF-F90M-000-02-28-130318; Android; rv:48.0) Gecko/48.0 Firefox/48.0 KAIOS/1.0",
        "platform": "iPhone",
        "vendor": "Apple Computer, Inc.",
        "maxTouchPoints": 5,
        "mobile": true
      },
      {
        "id": "kaios-kaios-2-5",
        "name": "KaiOS 2.5",
        "ua": "Mozilla/5.0 (Mobile; Nokia 8110 4G; rv:48.0) Gecko/48.0 Firefox/48.0 KAIOS/2.5",
        "platform": "iPhone",
        "vendor": "Apple Computer, Inc.",
        "maxTouchPoints": 5,
        "mobile": true
      },
      {
        "id": "kaios-kaios-2-5-1",
        "name": "KaiOS 2.5.1",
        "ua": "Mozilla/5.0 (Mobile; Nokia 2720 Flip; rv:48.0) Gecko/48.0 Firefox/48.0 KAIOS/2.5.1",
        "platform": "iPhone",
        "vendor": "Apple Computer, Inc.",
        "maxTouchPoints": 5,
        "mobile": true
      },
      {
        "id": "kaios-kaios-2-5-2",
        "name": "KaiOS 2.5.2",
        "ua": "Mozilla/5.0 (Mobile; Nokia 6300 4G; rv:48.0) Gecko/48.0 Firefox/48.0 KAIOS/2.5.2",
        "platform": "iPhone",
        "vendor": "Apple Computer, Inc.",
        "maxTouchPoints": 5,
        "mobile": true
      },
      {
        "id": "kaios-kaios-3-0",
        "name": "KaiOS 3.0",
        "ua": "Mozilla/5.0 (Mobile; Nokia 2760 Flip; rv:84.0) Gecko/84.0 Firefox/84.0 KAIOS/3.0",
        "platform": "iPhone",
        "vendor": "Apple Computer, Inc.",
        "maxTouchPoints": 5,
        "mobile": true
      },
      {
        "id": "kaios-kaios-3-1",
        "name": "KaiOS 3.1",
        "ua": "Mozilla/5.0 (Mobile; Nokia 2780 Flip; rv:84.0) Gecko/84.0 Firefox/84.0 KAIOS/3.1",
        "platform": "iPhone",
        "vendor": "Apple Computer, Inc.",
        "maxTouchPoints": 5,
        "mobile": true
      }
    ]
  },
  {
    "id": "ipados",
    "name": "iPadOS (iPad)",
    "icon": "ipad",
    "type": "tablet",
    "items": [
      {
        "id": "ipados-ipad-ipad-os-3-2",
        "name": "iPad OS 3.2",
        "ua": "Mozilla/5.0 (iPad; U; CPU OS 3_2 like Mac OS X; en-us) AppleWebKit/531.21.10 (KHTML, like Gecko) Version/4.0.4 Mobile/7B367 Safari/531.21.10",
        "platform": "iPad",
        "vendor": "Apple Computer, Inc.",
        "maxTouchPoints": 5,
        "mobile": false
      },
      {
        "id": "ipados-ipad-ipad-os-4-3",
        "name": "iPad OS 4.3",
        "ua": "Mozilla/5.0 (iPad; U; CPU OS 4_3 like Mac OS X; en-us) AppleWebKit/533.17.9 (KHTML, like Gecko) Version/5.0.2 Mobile/8F190 Safari/6533.18.5",
        "platform": "iPad",
        "vendor": "Apple Computer, Inc.",
        "maxTouchPoints": 5,
        "mobile": false
      },
      {
        "id": "ipados-ipad-ipad-os-5-0",
        "name": "iPad OS 5.0",
        "ua": "Mozilla/5.0 (iPad; CPU OS 5_0 like Mac OS X) AppleWebKit/534.46 (KHTML, like Gecko) Version/5.1 Mobile/9A334 Safari/7534.48.3",
        "platform": "iPad",
        "vendor": "Apple Computer, Inc.",
        "maxTouchPoints": 5,
        "mobile": false
      },
      {
        "id": "ipados-ipad-ipad-os-6-0",
        "name": "iPad OS 6.0",
        "ua": "Mozilla/5.0 (iPad; CPU OS 6_0 like Mac OS X) AppleWebKit/536.26 (KHTML, like Gecko) Version/6.0 Mobile/10A5355d Safari/8536.25",
        "platform": "iPad",
        "vendor": "Apple Computer, Inc.",
        "maxTouchPoints": 5,
        "mobile": false
      },
      {
        "id": "ipados-ipad-ipad-os-7-0",
        "name": "iPad OS 7.0",
        "ua": "Mozilla/5.0 (iPad; CPU OS 7_0 like Mac OS X) AppleWebKit/537.51.1 (KHTML, like Gecko) Version/7.0 Mobile/11A465 Safari/9537.53",
        "platform": "iPad",
        "vendor": "Apple Computer, Inc.",
        "maxTouchPoints": 5,
        "mobile": false
      },
      {
        "id": "ipados-ipad-ipad-os-8-0",
        "name": "iPad OS 8.0",
        "ua": "Mozilla/5.0 (iPad; CPU OS 8_0 like Mac OS X) AppleWebKit/600.1.4 (KHTML, like Gecko) Version/8.0 Mobile/12A365 Safari/600.1.4",
        "platform": "iPad",
        "vendor": "Apple Computer, Inc.",
        "maxTouchPoints": 5,
        "mobile": false
      },
      {
        "id": "ipados-ipad-ipad-os-9-0",
        "name": "iPad OS 9.0",
        "ua": "Mozilla/5.0 (iPad; CPU OS 9_0 like Mac OS X) AppleWebKit/601.1.46 (KHTML, like Gecko) Version/9.0 Mobile/13A344 Safari/601.1",
        "platform": "iPad",
        "vendor": "Apple Computer, Inc.",
        "maxTouchPoints": 5,
        "mobile": false
      },
      {
        "id": "ipados-ipad-ipad-os-10-0",
        "name": "iPad OS 10.0",
        "ua": "Mozilla/5.0 (iPad; CPU OS 10_0 like Mac OS X) AppleWebKit/602.1.38 (KHTML, like Gecko) Version/10.0 Mobile/14A300 Safari/602.1",
        "platform": "iPad",
        "vendor": "Apple Computer, Inc.",
        "maxTouchPoints": 5,
        "mobile": false
      },
      {
        "id": "ipados-ipad-ipad-os-11-0",
        "name": "iPad OS 11.0",
        "ua": "Mozilla/5.0 (iPad; CPU OS 11_0 like Mac OS X) AppleWebKit/604.1.38 (KHTML, like Gecko) Version/11.0 Mobile/15A372 Safari/604.1",
        "platform": "iPad",
        "vendor": "Apple Computer, Inc.",
        "maxTouchPoints": 5,
        "mobile": false
      },
      {
        "id": "ipados-ipad-ipad-os-12-0",
        "name": "iPad OS 12.0",
        "ua": "Mozilla/5.0 (iPad; CPU OS 12_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/12.0 Mobile/15E148 Safari/604.1",
        "platform": "iPad",
        "vendor": "Apple Computer, Inc.",
        "maxTouchPoints": 5,
        "mobile": false
      },
      {
        "id": "ipados-ipad-ipados-13-0",
        "name": "iPadOS 13.0",
        "ua": "Mozilla/5.0 (iPad; CPU OS 13_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0 Mobile/15E148 Safari/604.1",
        "platform": "iPad",
        "vendor": "Apple Computer, Inc.",
        "maxTouchPoints": 5,
        "mobile": false
      },
      {
        "id": "ipados-ipad-ipados-14-0",
        "name": "iPadOS 14.0",
        "ua": "Mozilla/5.0 (iPad; CPU OS 14_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/14.0 Mobile/15E148 Safari/604.1",
        "platform": "iPad",
        "vendor": "Apple Computer, Inc.",
        "maxTouchPoints": 5,
        "mobile": false
      },
      {
        "id": "ipados-ipad-ipados-15-0",
        "name": "iPadOS 15.0",
        "ua": "Mozilla/5.0 (iPad; CPU OS 15_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/15.0 Mobile/15E148 Safari/604.1",
        "platform": "iPad",
        "vendor": "Apple Computer, Inc.",
        "maxTouchPoints": 5,
        "mobile": false
      },
      {
        "id": "ipados-ipad-ipados-16-0",
        "name": "iPadOS 16.0",
        "ua": "Mozilla/5.0 (iPad; CPU OS 16_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/16.0 Mobile/15E148 Safari/604.1",
        "platform": "iPad",
        "vendor": "Apple Computer, Inc.",
        "maxTouchPoints": 5,
        "mobile": false
      },
      {
        "id": "ipados-ipad-ipados-17-0",
        "name": "iPadOS 17.0",
        "ua": "Mozilla/5.0 (iPad; CPU OS 17_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.0 Mobile/15E148 Safari/604.1",
        "platform": "iPad",
        "vendor": "Apple Computer, Inc.",
        "maxTouchPoints": 5,
        "mobile": false
      },
      {
        "id": "ipados-ipad-ipados-18-0",
        "name": "iPadOS 18.0",
        "ua": "Mozilla/5.0 (iPad; CPU OS 18_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/18.0 Mobile/15E148 Safari/604.1",
        "platform": "iPad",
        "vendor": "Apple Computer, Inc.",
        "maxTouchPoints": 5,
        "mobile": false
      }
    ]
  },
  {
    "id": "android",
    "name": "Android",
    "icon": "android",
    "type": "mobile",
    "items": [
      {
        "id": "android-15-pixel-9-pro",
        "name": "Android 15 · Google Pixel 9 Pro · Chrome 133",
        "ua": "Mozilla/5.0 (Linux; Android 15; Pixel 9 Pro Build/AP3A.241005.015) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/133.0.6943.49 Mobile Safari/537.36",
        "platform": "Linux armv8l",
        "vendor": "Google Inc.",
        "maxTouchPoints": 5,
        "mobile": true
      },
      {
        "id": "android-15-galaxy-s25",
        "name": "Android 15 · Samsung Galaxy S25 Ultra",
        "ua": "Mozilla/5.0 (Linux; Android 15; SM-S938B) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/133.0.6943.49 Mobile Safari/537.36",
        "platform": "Linux armv8l",
        "vendor": "Google Inc.",
        "maxTouchPoints": 5,
        "mobile": true
      },
      {
        "id": "android-android-1-0",
        "name": "Android 1.0",
        "ua": "Mozilla/5.0 (Linux; U; Android 1.0; en-us; Dream) AppleWebKit/525.10+ (KHTML, like Gecko) Version/3.0.4 Mobile Safari/523.12.2",
        "platform": "Linux armv8l",
        "vendor": "Google Inc.",
        "maxTouchPoints": 5,
        "mobile": true
      },
      {
        "id": "android-android-1-5-cupcake",
        "name": "Android 1.5 Cupcake",
        "ua": "Mozilla/5.0 (Linux; U; Android 1.5; en-us; T-Mobile G1 Build/CRB17) AppleWebKit/528.5+ (KHTML, like Gecko) Version/3.1.2 Mobile Safari/525.20.1",
        "platform": "Linux armv8l",
        "vendor": "Google Inc.",
        "maxTouchPoints": 5,
        "mobile": true
      },
      {
        "id": "android-android-1-6-donut",
        "name": "Android 1.6 Donut",
        "ua": "Mozilla/5.0 (Linux; U; Android 1.6; en-us; HTC_TATTOO_A3288 Build/DRC79) AppleWebKit/528.5+ (KHTML, like Gecko) Version/3.1.2 Mobile Safari/525.20.1",
        "platform": "Linux armv8l",
        "vendor": "Google Inc.",
        "maxTouchPoints": 5,
        "mobile": true
      },
      {
        "id": "android-android-2-0-eclair",
        "name": "Android 2.0 Eclair",
        "ua": "Mozilla/5.0 (Linux; U; Android 2.0; en-us; Droid Build/ESD20) AppleWebKit/530.17 (KHTML, like Gecko) Version/4.0 Mobile Safari/530.17",
        "platform": "Linux armv8l",
        "vendor": "Google Inc.",
        "maxTouchPoints": 5,
        "mobile": true
      },
      {
        "id": "android-android-2-1-eclair",
        "name": "Android 2.1 Eclair",
        "ua": "Mozilla/5.0 (Linux; U; Android 2.1-update1; en-us; Nexus One Build/ERE27) AppleWebKit/530.17 (KHTML, like Gecko) Version/4.0 Mobile Safari/530.17",
        "platform": "Linux armv8l",
        "vendor": "Google Inc.",
        "maxTouchPoints": 5,
        "mobile": true
      },
      {
        "id": "android-android-2-2-froyo",
        "name": "Android 2.2 Froyo",
        "ua": "Mozilla/5.0 (Linux; U; Android 2.2; en-us; Nexus One Build/FRF91) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1",
        "platform": "Linux armv8l",
        "vendor": "Google Inc.",
        "maxTouchPoints": 5,
        "mobile": true
      },
      {
        "id": "android-android-2-3-gingerbread",
        "name": "Android 2.3 Gingerbread",
        "ua": "Mozilla/5.0 (Linux; U; Android 2.3.3; en-us; Nexus S Build/GRI40) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1",
        "platform": "Linux armv8l",
        "vendor": "Google Inc.",
        "maxTouchPoints": 5,
        "mobile": true
      },
      {
        "id": "android-android-3-0-honeycomb",
        "name": "Android 3.0 Honeycomb",
        "ua": "Mozilla/5.0 (Linux; U; Android 3.0; en-us; Xoom Build/HRI39) AppleWebKit/534.13 (KHTML, like Gecko) Version/4.0 Safari/534.13",
        "platform": "Linux armv8l",
        "vendor": "Google Inc.",
        "maxTouchPoints": 5,
        "mobile": false
      },
      {
        "id": "android-android-3-1-honeycomb",
        "name": "Android 3.1 Honeycomb",
        "ua": "Mozilla/5.0 (Linux; U; Android 3.1; en-us; Xoom Build/HMJ37) AppleWebKit/534.13 (KHTML, like Gecko) Version/4.0 Safari/534.13",
        "platform": "Linux armv8l",
        "vendor": "Google Inc.",
        "maxTouchPoints": 5,
        "mobile": false
      },
      {
        "id": "android-android-3-2-honeycomb",
        "name": "Android 3.2 Honeycomb",
        "ua": "Mozilla/5.0 (Linux; U; Android 3.2; en-us; Xoom Build/HTJ85B) AppleWebKit/534.13 (KHTML, like Gecko) Version/4.0 Safari/534.13",
        "platform": "Linux armv8l",
        "vendor": "Google Inc.",
        "maxTouchPoints": 5,
        "mobile": false
      },
      {
        "id": "android-android-4-0-ics",
        "name": "Android 4.0 ICS",
        "ua": "Mozilla/5.0 (Linux; U; Android 4.0.3; en-us; Galaxy Nexus Build/ICL53F) AppleWebKit/534.30 (KHTML, like Gecko) Version/4.0 Mobile Safari/534.30",
        "platform": "Linux armv8l",
        "vendor": "Google Inc.",
        "maxTouchPoints": 5,
        "mobile": true
      },
      {
        "id": "android-android-4-1-jelly-bean",
        "name": "Android 4.1 Jelly Bean",
        "ua": "Mozilla/5.0 (Linux; U; Android 4.1.1; en-us; Nexus 7 Build/JRO03D) AppleWebKit/534.30 (KHTML, like Gecko) Version/4.0 Safari/534.30",
        "platform": "Linux armv8l",
        "vendor": "Google Inc.",
        "maxTouchPoints": 5,
        "mobile": true
      },
      {
        "id": "android-android-4-2-jelly-bean",
        "name": "Android 4.2 Jelly Bean",
        "ua": "Mozilla/5.0 (Linux; Android 4.2.2; Nexus 4 Build/JDQ39) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/27.0.1453.90 Mobile Safari/537.36",
        "platform": "Linux armv8l",
        "vendor": "Google Inc.",
        "maxTouchPoints": 5,
        "mobile": true
      },
      {
        "id": "android-android-4-3-jelly-bean",
        "name": "Android 4.3 Jelly Bean",
        "ua": "Mozilla/5.0 (Linux; Android 4.3; Nexus 5 Build/JWR66Y) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/29.0.1547.72 Mobile Safari/537.36",
        "platform": "Linux armv8l",
        "vendor": "Google Inc.",
        "maxTouchPoints": 5,
        "mobile": true
      },
      {
        "id": "android-android-4-4-kitkat",
        "name": "Android 4.4 KitKat",
        "ua": "Mozilla/5.0 (Linux; Android 4.4.2; Nexus 5 Build/KOT49H) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/46.0.2490.76 Mobile Safari/537.36",
        "platform": "Linux armv8l",
        "vendor": "Google Inc.",
        "maxTouchPoints": 5,
        "mobile": true
      },
      {
        "id": "android-android-5-0-lollipop",
        "name": "Android 5.0 Lollipop",
        "ua": "Mozilla/5.0 (Linux; Android 5.0; Nexus 5 Build/LRX21O) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/70.0.3538.110 Mobile Safari/537.36",
        "platform": "Linux armv8l",
        "vendor": "Google Inc.",
        "maxTouchPoints": 5,
        "mobile": true
      },
      {
        "id": "android-android-5-1-lollipop",
        "name": "Android 5.1 Lollipop",
        "ua": "Mozilla/5.0 (Linux; Android 5.1.1; Nexus 6 Build/LYZ28E) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/70.0.3538.110 Mobile Safari/537.36",
        "platform": "Linux armv8l",
        "vendor": "Google Inc.",
        "maxTouchPoints": 5,
        "mobile": true
      },
      {
        "id": "android-android-6-0-marshmallow",
        "name": "Android 6.0 Marshmallow",
        "ua": "Mozilla/5.0 (Linux; Android 6.0; Nexus 5X Build/MDB08L) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3770.100 Mobile Safari/537.36",
        "platform": "Linux armv8l",
        "vendor": "Google Inc.",
        "maxTouchPoints": 5,
        "mobile": true
      },
      {
        "id": "android-android-7-0-nougat",
        "name": "Android 7.0 Nougat",
        "ua": "Mozilla/5.0 (Linux; Android 7.0; Pixel Build/NRD90M) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.132 Mobile Safari/537.36",
        "platform": "Linux armv8l",
        "vendor": "Google Inc.",
        "maxTouchPoints": 5,
        "mobile": true
      },
      {
        "id": "android-android-7-1-nougat",
        "name": "Android 7.1 Nougat",
        "ua": "Mozilla/5.0 (Linux; Android 7.1.1; Pixel XL Build/NMF26O) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.132 Mobile Safari/537.36",
        "platform": "Linux armv8l",
        "vendor": "Google Inc.",
        "maxTouchPoints": 5,
        "mobile": true
      },
      {
        "id": "android-android-8-0-oreo",
        "name": "Android 8.0 Oreo",
        "ua": "Mozilla/5.0 (Linux; Android 8.0.0; Pixel 2 Build/OPD3.170816.012) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.127 Mobile Safari/537.36",
        "platform": "Linux armv8l",
        "vendor": "Google Inc.",
        "maxTouchPoints": 5,
        "mobile": true
      },
      {
        "id": "android-android-8-1-oreo",
        "name": "Android 8.1 Oreo",
        "ua": "Mozilla/5.0 (Linux; Android 8.1.0; Pixel 2 XL Build/OPM1.171019.021) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.127 Mobile Safari/537.36",
        "platform": "Linux armv8l",
        "vendor": "Google Inc.",
        "maxTouchPoints": 5,
        "mobile": true
      },
      {
        "id": "android-android-9-pie",
        "name": "Android 9 Pie",
        "ua": "Mozilla/5.0 (Linux; Android 9; Pixel 3 Build/PQ3A.190801.002) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.210 Mobile Safari/537.36",
        "platform": "Linux armv8l",
        "vendor": "Google Inc.",
        "maxTouchPoints": 5,
        "mobile": true
      },
      {
        "id": "android-android-10",
        "name": "Android 10",
        "ua": "Mozilla/5.0 (Linux; Android 10; Pixel 4 Build/QQ3A.200805.001) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/95.0.4638.74 Mobile Safari/537.36",
        "platform": "Linux armv8l",
        "vendor": "Google Inc.",
        "maxTouchPoints": 5,
        "mobile": true
      },
      {
        "id": "android-android-11",
        "name": "Android 11",
        "ua": "Mozilla/5.0 (Linux; Android 11; Pixel 5 Build/RQ3A.210905.001) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/100.0.4896.127 Mobile Safari/537.36",
        "platform": "Linux armv8l",
        "vendor": "Google Inc.",
        "maxTouchPoints": 5,
        "mobile": true
      },
      {
        "id": "android-android-12",
        "name": "Android 12",
        "ua": "Mozilla/5.0 (Linux; Android 12; Pixel 6 Build/SD1A.210817.037) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.5195.136 Mobile Safari/537.36",
        "platform": "Linux armv8l",
        "vendor": "Google Inc.",
        "maxTouchPoints": 5,
        "mobile": true
      },
      {
        "id": "android-android-12l",
        "name": "Android 12L",
        "ua": "Mozilla/5.0 (Linux; Android 12L; Pixel Fold Build/S2B2.211203.006) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.5195.136 Mobile Safari/537.36",
        "platform": "Linux armv8l",
        "vendor": "Google Inc.",
        "maxTouchPoints": 5,
        "mobile": true
      },
      {
        "id": "android-android-13",
        "name": "Android 13",
        "ua": "Mozilla/5.0 (Linux; Android 13; Pixel 7 Build/TQ3A.230901.001) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/117.0.5938.140 Mobile Safari/537.36",
        "platform": "Linux armv8l",
        "vendor": "Google Inc.",
        "maxTouchPoints": 5,
        "mobile": true
      },
      {
        "id": "android-android-14",
        "name": "Android 14",
        "ua": "Mozilla/5.0 (Linux; Android 14; Pixel 8 Pro Build/UD1A.230803.041) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.6099.230 Mobile Safari/537.36",
        "platform": "Linux armv8l",
        "vendor": "Google Inc.",
        "maxTouchPoints": 5,
        "mobile": true
      },
      {
        "id": "android-android-15",
        "name": "Android 15",
        "ua": "Mozilla/5.0 (Linux; Android 15; Pixel 9 Pro Build/AP3A.241005.015) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.6778.39 Mobile Safari/537.36",
        "platform": "Linux armv8l",
        "vendor": "Google Inc.",
        "maxTouchPoints": 5,
        "mobile": true
      }
    ]
  },
  {
    "id": "bots",
    "name": "Crawlers & Bots",
    "icon": "bot",
    "type": "bot",
    "items": [
      {
        "id": "bot-google-desktop",
        "name": "Googlebot · Desktop",
        "ua": "Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)",
        "platform": "Linux x86_64",
        "vendor": "Google Inc.",
        "maxTouchPoints": 0,
        "mobile": false
      },
      {
        "id": "bot-google-mobile",
        "name": "Googlebot · Smartphone (Pixel 2)",
        "ua": "Mozilla/5.0 (Linux; Android 6.0.1; Nexus 5X Build/MMB29P) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/133.0.6943.49 Mobile Safari/537.36 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)",
        "platform": "Linux armv7l",
        "vendor": "Google Inc.",
        "maxTouchPoints": 5,
        "mobile": true
      },
      {
        "id": "bot-bing-desktop",
        "name": "Bingbot · Desktop",
        "ua": "Mozilla/5.0 (compatible; bingbot/2.0; +http://www.bing.com/bingbot.htm)",
        "platform": "Win32",
        "vendor": "Microsoft Corporation",
        "maxTouchPoints": 0,
        "mobile": false
      },
      {
        "id": "bot-bing-mobile",
        "name": "Bingbot · Mobile",
        "ua": "Mozilla/5.0 (iPhone; CPU iPhone OS 7_0 like Mac OS X) AppleWebKit/537.51.1 (KHTML, like Gecko) Version/7.0 Mobile/11A465 Safari/9537.53 (compatible; bingbot/2.0; +http://www.bing.com/bingbot.htm)",
        "platform": "iPhone",
        "vendor": "Apple Computer, Inc.",
        "maxTouchPoints": 5,
        "mobile": true
      },
      {
        "id": "bot-duckduckgo",
        "name": "DuckDuckBot",
        "ua": "DuckDuckBot/1.1; (+http://duckduckgo.com/duckduckbot.html)",
        "platform": "Linux x86_64",
        "vendor": "",
        "maxTouchPoints": 0,
        "mobile": false
      },
      {
        "id": "bot-yandex",
        "name": "YandexBot",
        "ua": "Mozilla/5.0 (compatible; YandexBot/3.0; +http://yandex.com/bots)",
        "platform": "Linux x86_64",
        "vendor": "",
        "maxTouchPoints": 0,
        "mobile": false
      },
      {
        "id": "bot-twitter",
        "name": "Twitterbot",
        "ua": "Twitterbot/1.0",
        "platform": "Linux x86_64",
        "vendor": "",
        "maxTouchPoints": 0,
        "mobile": false
      },
      {
        "id": "bot-facebook",
        "name": "Facebook External Hit",
        "ua": "facebookexternalhit/1.1 (+http://www.facebook.com/externalhit_uatext.php)",
        "platform": "Linux x86_64",
        "vendor": "",
        "maxTouchPoints": 0,
        "mobile": false
      },
      {
        "id": "bot-apple",
        "name": "Applebot",
        "ua": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.4 Safari/605.1.15 (Applebot/0.1; +http://www.apple.com/go/applebot)",
        "platform": "MacIntel",
        "vendor": "Apple Computer, Inc.",
        "maxTouchPoints": 0,
        "mobile": false
      }
    ]
  },
  {
    "id": "consoles",
    "name": "Game Consoles",
    "icon": "gamepad",
    "type": "console",
    "items": [
      {
        "id": "playstation-playstation-3",
        "name": "PlayStation 3",
        "ua": "Mozilla/5.0 (PLAYSTATION 3 4.89) AppleWebKit/531.22.8 (KHTML, like Gecko)",
        "platform": "PlayStation",
        "vendor": "Sony Interactive Entertainment Inc.",
        "maxTouchPoints": 0,
        "mobile": false
      },
      {
        "id": "playstation-playstation-4",
        "name": "PlayStation 4",
        "ua": "Mozilla/5.0 (PlayStation 4 10.01) AppleWebKit/605.1.15 (KHTML, like Gecko)",
        "platform": "PlayStation",
        "vendor": "Sony Interactive Entertainment Inc.",
        "maxTouchPoints": 0,
        "mobile": false
      },
      {
        "id": "playstation-playstation-5",
        "name": "PlayStation 5",
        "ua": "Mozilla/5.0 (PlayStation 5) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/15.4 Safari/605.1.15",
        "platform": "PlayStation",
        "vendor": "Sony Interactive Entertainment Inc.",
        "maxTouchPoints": 0,
        "mobile": false
      },
      {
        "id": "playstation-ps-vita",
        "name": "PS Vita",
        "ua": "Mozilla/5.0 (PlayStation Vita 3.73) AppleWebKit/537.73 (KHTML, like Gecko) Silk/3.2",
        "platform": "PlayStation",
        "vendor": "Sony Interactive Entertainment Inc.",
        "maxTouchPoints": 0,
        "mobile": false
      },
      {
        "id": "xbox-xbox-one",
        "name": "Xbox One",
        "ua": "Mozilla/5.0 (Windows NT 10.0; Win64; x64; Xbox; Xbox One) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/70.0.3538.102 Safari/537.36 Edge/18.17763",
        "platform": "Win32",
        "vendor": "Microsoft Corporation",
        "maxTouchPoints": 0,
        "mobile": false
      },
      {
        "id": "xbox-xbox-series-x-s",
        "name": "Xbox Series X|S",
        "ua": "Mozilla/5.0 (Windows NT 10.0; Win64; x64; Xbox; Xbox Series X) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36 Edge/44.18363.8131",
        "platform": "Win32",
        "vendor": "Microsoft Corporation",
        "maxTouchPoints": 0,
        "mobile": false
      },
      {
        "id": "nintendo-nintendo-switch",
        "name": "Nintendo Switch",
        "ua": "Mozilla/5.0 (Nintendo Switch; WifiWebAuthApplet) AppleWebKit/606.4 (KHTML, like Gecko) NF/6.0.1.16.10 NintendoBrowser/5.1.0.22023",
        "platform": "Nintendo Switch",
        "vendor": "Nintendo",
        "maxTouchPoints": 0,
        "mobile": false
      },
      {
        "id": "nintendo-wii-u",
        "name": "Wii U",
        "ua": "Mozilla/5.0 (Nintendo WiiU) AppleWebKit/536.30 (KHTML, like Gecko) NX/3.0.4.2.12 NintendoBrowser/4.3.1.11264.US",
        "platform": "Nintendo Switch",
        "vendor": "Nintendo",
        "maxTouchPoints": 0,
        "mobile": false
      },
      {
        "id": "nintendo-nintendo-3ds",
        "name": "Nintendo 3DS",
        "ua": "Mozilla/5.0 (Nintendo 3DS; U; ; en) Version/1.7630.US",
        "platform": "Nintendo Switch",
        "vendor": "Nintendo",
        "maxTouchPoints": 0,
        "mobile": false
      }
    ]
  },
  {
    "id": "tv",
    "name": "Smart TV & Media",
    "icon": "tv",
    "type": "tv",
    "items": [
      {
        "id": "tizen-tizen-2-3",
        "name": "Tizen 2.3",
        "ua": "Mozilla/5.0 (Linux; Tizen 2.3; Samsung Z1) AppleWebKit/537.3 (KHTML, like Gecko) Version/2.3 Mobile Safari/537.3",
        "platform": "Linux armv7l",
        "vendor": "SmartTV",
        "maxTouchPoints": 0,
        "mobile": false
      },
      {
        "id": "tizen-tizen-2-4",
        "name": "Tizen 2.4",
        "ua": "Mozilla/5.0 (Linux; Tizen 2.4; Samsung Z3) AppleWebKit/537.3 (KHTML, like Gecko) Version/2.4 Mobile Safari/537.3",
        "platform": "Linux armv7l",
        "vendor": "SmartTV",
        "maxTouchPoints": 0,
        "mobile": false
      },
      {
        "id": "tizen-tizen-3-0",
        "name": "Tizen 3.0",
        "ua": "Mozilla/5.0 (Linux; Tizen 3.0; Samsung Z4) AppleWebKit/537.36 (KHTML, like Gecko) Version/3.0 Mobile Safari/537.36",
        "platform": "Linux armv7l",
        "vendor": "SmartTV",
        "maxTouchPoints": 0,
        "mobile": false
      },
      {
        "id": "tizen-tizen-4-0",
        "name": "Tizen 4.0",
        "ua": "Mozilla/5.0 (Linux; Tizen 4.0; Samsung) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.0 Safari/537.36",
        "platform": "Linux armv7l",
        "vendor": "SmartTV",
        "maxTouchPoints": 0,
        "mobile": false
      },
      {
        "id": "tizen-tizen-5-5-tv",
        "name": "Tizen 5.5 (TV)",
        "ua": "Mozilla/5.0 (SMART-TV; LINUX; Tizen 5.5) AppleWebKit/537.36 (KHTML, like Gecko) Version/5.5 TV Safari/537.36",
        "platform": "Linux armv7l",
        "vendor": "SmartTV",
        "maxTouchPoints": 0,
        "mobile": false
      },
      {
        "id": "tizen-tizen-6-0-tv",
        "name": "Tizen 6.0 (TV)",
        "ua": "Mozilla/5.0 (SMART-TV; LINUX; Tizen 6.0) AppleWebKit/537.36 (KHTML, like Gecko) Version/6.0 TV Safari/537.36",
        "platform": "Linux armv7l",
        "vendor": "SmartTV",
        "maxTouchPoints": 0,
        "mobile": false
      },
      {
        "id": "tizen-tizen-6-5-watch",
        "name": "Tizen 6.5 (Watch)",
        "ua": "Mozilla/5.0 (Linux; Tizen 6.5; Galaxy Watch4) AppleWebKit/537.36 (KHTML, like Gecko) SamsungBrowser/4.0 Chrome/85.0.4183.93 Mobile Safari/537.36",
        "platform": "Linux armv7l",
        "vendor": "SmartTV",
        "maxTouchPoints": 0,
        "mobile": false
      },
      {
        "id": "tizen-tizen-7-0-tv",
        "name": "Tizen 7.0 (TV)",
        "ua": "Mozilla/5.0 (SMART-TV; LINUX; Tizen 7.0) AppleWebKit/537.36 (KHTML, like Gecko) Version/7.0 TV Safari/537.36",
        "platform": "Linux armv7l",
        "vendor": "SmartTV",
        "maxTouchPoints": 0,
        "mobile": false
      },
      {
        "id": "webos-webos-1-4-palm",
        "name": "webOS 1.4 (Palm)",
        "ua": "Mozilla/5.0 (webOS/1.4.5; U; en-US) AppleWebKit/532.2 (KHTML, like Gecko) Version/1.0 Safari/532.2 Pre/1.0",
        "platform": "Linux armv7l",
        "vendor": "SmartTV",
        "maxTouchPoints": 0,
        "mobile": false
      },
      {
        "id": "webos-webos-2-0-palm",
        "name": "webOS 2.0 (Palm)",
        "ua": "Mozilla/5.0 (webOS/2.0; U; en-US) AppleWebKit/532.2 (KHTML, like Gecko) Version/1.0 Safari/532.2 Pre/1.0",
        "platform": "Linux armv7l",
        "vendor": "SmartTV",
        "maxTouchPoints": 0,
        "mobile": false
      },
      {
        "id": "webos-webos-3-0-hp-touchpad",
        "name": "webOS 3.0 (HP TouchPad)",
        "ua": "Mozilla/5.0 (hp-tablet; Linux; hpwOS/3.0.5; U; en-US) AppleWebKit/534.6 (KHTML, like Gecko) wOSBrowser/234.83 Safari/534.6 TouchPad/1.0",
        "platform": "Linux armv7l",
        "vendor": "SmartTV",
        "maxTouchPoints": 0,
        "mobile": false
      },
      {
        "id": "webos-webos-4-0-lg-tv",
        "name": "webOS 4.0 (LG TV)",
        "ua": "Mozilla/5.0 (Web0S; Linux/SmartTV) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/53.0.2785.34 Safari/537.36 WebAppManager",
        "platform": "Linux armv7l",
        "vendor": "SmartTV",
        "maxTouchPoints": 0,
        "mobile": false
      },
      {
        "id": "webos-webos-5-0-lg-tv",
        "name": "webOS 5.0 (LG TV)",
        "ua": "Mozilla/5.0 (Web0S; Linux/SmartTV) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/68.0.3440.106 Safari/537.36 WebAppManager",
        "platform": "Linux armv7l",
        "vendor": "SmartTV",
        "maxTouchPoints": 0,
        "mobile": false
      },
      {
        "id": "webos-webos-6-0-lg-tv",
        "name": "webOS 6.0 (LG TV)",
        "ua": "Mozilla/5.0 (Web0S; Linux/SmartTV) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.88 Safari/537.36 WebAppManager",
        "platform": "Linux armv7l",
        "vendor": "SmartTV",
        "maxTouchPoints": 0,
        "mobile": false
      },
      {
        "id": "smart-tv-generic-samsung-smart-tv-2022",
        "name": "Samsung Smart TV 2022",
        "ua": "Mozilla/5.0 (SMART-TV; LINUX; Tizen 6.5) AppleWebKit/537.36 (KHTML, like Gecko) SamsungBrowser/5.0 Chrome/85.0.4183.93 TV Safari/537.36",
        "platform": "Linux armv7l",
        "vendor": "SmartTV",
        "maxTouchPoints": 0,
        "mobile": false
      },
      {
        "id": "smart-tv-generic-android-tv",
        "name": "Android TV",
        "ua": "Mozilla/5.0 (Linux; Android 12; BRAVIA 4K GB ATV3) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.5195.136 Safari/537.36",
        "platform": "Linux armv7l",
        "vendor": "SmartTV",
        "maxTouchPoints": 0,
        "mobile": false
      },
      {
        "id": "smart-tv-generic-apple-tv-tvos",
        "name": "Apple TV (tvOS)",
        "ua": "AppleTV11,1/11.1",
        "platform": "Linux armv7l",
        "vendor": "SmartTV",
        "maxTouchPoints": 0,
        "mobile": false
      },
      {
        "id": "smart-tv-generic-roku",
        "name": "Roku",
        "ua": "Roku4640X/DVP-7.70 (297.70E04154A)",
        "platform": "Linux armv7l",
        "vendor": "SmartTV",
        "maxTouchPoints": 0,
        "mobile": false
      },
      {
        "id": "smart-tv-generic-fire-tv-stick",
        "name": "Fire TV Stick",
        "ua": "Mozilla/5.0 (Linux; Android 9; AFTSSS Build/PS7285) AppleWebKit/537.36 (KHTML, like Gecko) Silk/105.3.4 like Chrome/105.0.5195.136 Safari/537.36",
        "platform": "Linux armv7l",
        "vendor": "SmartTV",
        "maxTouchPoints": 0,
        "mobile": false
      }
    ]
  },
  {
    "id": "specialized",
    "name": "Legacy & Specialized",
    "icon": "terminal",
    "type": "special",
    "items": [
      {
        "id": "windows-phone-windows-phone-7-0",
        "name": "Windows Phone 7.0",
        "ua": "Mozilla/5.0 (compatible; MSIE 9.0; Windows Phone OS 7.0; Trident/5.0; IEMobile/9.0; HTC; HD7)",
        "platform": "ARM",
        "vendor": "Microsoft Corporation",
        "maxTouchPoints": 5,
        "mobile": true
      },
      {
        "id": "windows-phone-windows-phone-7-5-mango",
        "name": "Windows Phone 7.5 Mango",
        "ua": "Mozilla/5.0 (compatible; MSIE 9.0; Windows Phone OS 7.5; Trident/5.0; IEMobile/9.0; SAMSUNG; SGH-i917)",
        "platform": "ARM",
        "vendor": "Microsoft Corporation",
        "maxTouchPoints": 5,
        "mobile": true
      },
      {
        "id": "windows-phone-windows-phone-7-8",
        "name": "Windows Phone 7.8",
        "ua": "Mozilla/5.0 (compatible; MSIE 9.0; Windows Phone OS 7.8; Trident/5.0; IEMobile/9.0; NOKIA; Lumia 800)",
        "platform": "ARM",
        "vendor": "Microsoft Corporation",
        "maxTouchPoints": 5,
        "mobile": true
      },
      {
        "id": "windows-phone-windows-phone-8-0",
        "name": "Windows Phone 8.0",
        "ua": "Mozilla/5.0 (compatible; MSIE 10.0; Windows Phone 8.0; Trident/6.0; IEMobile/10.0; ARM; Touch; NOKIA; Lumia 920)",
        "platform": "ARM",
        "vendor": "Microsoft Corporation",
        "maxTouchPoints": 5,
        "mobile": true
      },
      {
        "id": "windows-phone-windows-phone-8-1",
        "name": "Windows Phone 8.1",
        "ua": "Mozilla/5.0 (Windows Phone 8.1; ARM; Trident/7.0; Touch; rv:11.0; IEMobile/11.0; NOKIA; Lumia 930) like Gecko",
        "platform": "ARM",
        "vendor": "Microsoft Corporation",
        "maxTouchPoints": 5,
        "mobile": true
      },
      {
        "id": "windows-phone-windows-10-mobile",
        "name": "Windows Phone · Windows 10 Mobile",
        "ua": "Mozilla/5.0 (Windows Phone 10.0; Android 6.0.1; Microsoft; Lumia 950 XL) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/52.0.2743.116 Mobile Safari/537.36 Edge/15.15254",
        "platform": "ARM",
        "vendor": "Microsoft Corporation",
        "maxTouchPoints": 5,
        "mobile": true
      },
      {
        "id": "blackberry-blackberry-os-5-0",
        "name": "BlackBerry OS 5.0",
        "ua": "BlackBerry9000/5.0.0.93 Profile/MIDP-2.0 Configuration/CLDC-1.1 VendorID/179",
        "platform": "BlackBerry",
        "vendor": "Research In Motion Ltd.",
        "maxTouchPoints": 5,
        "mobile": true
      },
      {
        "id": "blackberry-blackberry-os-6-0",
        "name": "BlackBerry OS 6.0",
        "ua": "Mozilla/5.0 (BlackBerry; U; BlackBerry 9800; en) AppleWebKit/534.1+ (KHTML, like Gecko) Version/6.0.0.337 Mobile Safari/534.1+",
        "platform": "BlackBerry",
        "vendor": "Research In Motion Ltd.",
        "maxTouchPoints": 5,
        "mobile": true
      },
      {
        "id": "blackberry-blackberry-os-7-0",
        "name": "BlackBerry OS 7.0",
        "ua": "Mozilla/5.0 (BlackBerry; U; BlackBerry 9900; en) AppleWebKit/534.11+ (KHTML, like Gecko) Version/7.0.0.261 Mobile Safari/534.11+",
        "platform": "BlackBerry",
        "vendor": "Research In Motion Ltd.",
        "maxTouchPoints": 5,
        "mobile": true
      },
      {
        "id": "blackberry-blackberry-os-7-1",
        "name": "BlackBerry OS 7.1",
        "ua": "Mozilla/5.0 (BlackBerry; U; BlackBerry 9930; en) AppleWebKit/534.11+ (KHTML, like Gecko) Version/7.1.0.74 Mobile Safari/534.11+",
        "platform": "BlackBerry",
        "vendor": "Research In Motion Ltd.",
        "maxTouchPoints": 5,
        "mobile": true
      },
      {
        "id": "blackberry-blackberry-10-0",
        "name": "BlackBerry 10.0",
        "ua": "Mozilla/5.0 (BB10; Touch) AppleWebKit/537.10+ (KHTML, like Gecko) Version/10.0.9.2372 Mobile Safari/537.10+",
        "platform": "BlackBerry",
        "vendor": "Research In Motion Ltd.",
        "maxTouchPoints": 5,
        "mobile": true
      },
      {
        "id": "blackberry-blackberry-10-1",
        "name": "BlackBerry 10.1",
        "ua": "Mozilla/5.0 (BB10; Touch) AppleWebKit/537.35+ (KHTML, like Gecko) Version/10.1.0.4633 Mobile Safari/537.35+",
        "platform": "BlackBerry",
        "vendor": "Research In Motion Ltd.",
        "maxTouchPoints": 5,
        "mobile": true
      },
      {
        "id": "blackberry-blackberry-10-2",
        "name": "BlackBerry 10.2",
        "ua": "Mozilla/5.0 (BB10; Touch) AppleWebKit/537.35+ (KHTML, like Gecko) Version/10.2.1.3442 Mobile Safari/537.35+",
        "platform": "BlackBerry",
        "vendor": "Research In Motion Ltd.",
        "maxTouchPoints": 5,
        "mobile": true
      },
      {
        "id": "blackberry-blackberry-10-3",
        "name": "BlackBerry 10.3",
        "ua": "Mozilla/5.0 (BB10; Touch) AppleWebKit/537.35+ (KHTML, like Gecko) Version/10.3.3.2205 Mobile Safari/537.35+",
        "platform": "BlackBerry",
        "vendor": "Research In Motion Ltd.",
        "maxTouchPoints": 5,
        "mobile": true
      },
      {
        "id": "freebsd-freebsd-12",
        "name": "FreeBSD 12",
        "ua": "Mozilla/5.0 (X11; FreeBSD amd64; rv:91.0) Gecko/20100101 Firefox/91.0",
        "platform": "FreeBSD amd64",
        "vendor": "",
        "maxTouchPoints": 0,
        "mobile": false
      },
      {
        "id": "freebsd-freebsd-13",
        "name": "FreeBSD 13",
        "ua": "Mozilla/5.0 (X11; FreeBSD amd64; rv:109.0) Gecko/20100101 Firefox/115.0",
        "platform": "FreeBSD amd64",
        "vendor": "",
        "maxTouchPoints": 0,
        "mobile": false
      },
      {
        "id": "freebsd-freebsd-14",
        "name": "FreeBSD 14",
        "ua": "Mozilla/5.0 (X11; FreeBSD amd64; rv:131.0) Gecko/20100101 Firefox/131.0",
        "platform": "FreeBSD amd64",
        "vendor": "",
        "maxTouchPoints": 0,
        "mobile": false
      },
      {
        "id": "openbsd-openbsd-7-0",
        "name": "OpenBSD 7.0",
        "ua": "Mozilla/5.0 (X11; OpenBSD amd64; rv:91.0) Gecko/20100101 Firefox/91.0",
        "platform": "OpenBSD amd64",
        "vendor": "",
        "maxTouchPoints": 0,
        "mobile": false
      },
      {
        "id": "openbsd-openbsd-7-2",
        "name": "OpenBSD 7.2",
        "ua": "Mozilla/5.0 (X11; OpenBSD amd64; rv:102.0) Gecko/20100101 Firefox/102.0",
        "platform": "OpenBSD amd64",
        "vendor": "",
        "maxTouchPoints": 0,
        "mobile": false
      },
      {
        "id": "openbsd-openbsd-7-4",
        "name": "OpenBSD 7.4",
        "ua": "Mozilla/5.0 (X11; OpenBSD amd64; rv:115.0) Gecko/20100101 Firefox/115.0",
        "platform": "OpenBSD amd64",
        "vendor": "",
        "maxTouchPoints": 0,
        "mobile": false
      },
      {
        "id": "openbsd-openbsd-7-5",
        "name": "OpenBSD 7.5",
        "ua": "Mozilla/5.0 (X11; OpenBSD amd64; rv:131.0) Gecko/20100101 Firefox/131.0",
        "platform": "OpenBSD amd64",
        "vendor": "",
        "maxTouchPoints": 0,
        "mobile": false
      },
      {
        "id": "netbsd-netbsd-9",
        "name": "NetBSD 9",
        "ua": "Mozilla/5.0 (X11; NetBSD amd64; rv:91.0) Gecko/20100101 Firefox/91.0",
        "platform": "NetBSD amd64",
        "vendor": "",
        "maxTouchPoints": 0,
        "mobile": false
      },
      {
        "id": "netbsd-netbsd-10",
        "name": "NetBSD 10",
        "ua": "Mozilla/5.0 (X11; NetBSD amd64; rv:115.0) Gecko/20100101 Firefox/115.0",
        "platform": "NetBSD amd64",
        "vendor": "",
        "maxTouchPoints": 0,
        "mobile": false
      },
      {
        "id": "solaris-illumos-solaris-10",
        "name": "Solaris / illumos · Solaris 10",
        "ua": "Mozilla/5.0 (X11; SunOS sun4u; rv:52.0) Gecko/20100101 Firefox/52.0",
        "platform": "Win32",
        "vendor": "Google Inc.",
        "maxTouchPoints": 0,
        "mobile": false
      },
      {
        "id": "solaris-illumos-solaris-11",
        "name": "Solaris / illumos · Solaris 11",
        "ua": "Mozilla/5.0 (X11; SunOS i86pc; rv:68.0) Gecko/20100101 Firefox/68.0",
        "platform": "Win32",
        "vendor": "Google Inc.",
        "maxTouchPoints": 0,
        "mobile": false
      },
      {
        "id": "solaris-illumos-openindiana-illumos",
        "name": "Solaris / illumos · OpenIndiana (illumos)",
        "ua": "Mozilla/5.0 (X11; SunOS i86pc; rv:91.0) Gecko/20100101 Firefox/91.0",
        "platform": "Win32",
        "vendor": "Google Inc.",
        "maxTouchPoints": 0,
        "mobile": false
      },
      {
        "id": "harmonyos-harmonyos-2-0",
        "name": "HarmonyOS 2.0",
        "ua": "Mozilla/5.0 (Linux; Android 10; HarmonyOS; ANA-AN00; HMSCore 6.3.0.327) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.105 HuaweiBrowser/12.0.4.1 Mobile Safari/537.36",
        "platform": "Win32",
        "vendor": "Google Inc.",
        "maxTouchPoints": 0,
        "mobile": false
      },
      {
        "id": "harmonyos-harmonyos-3-0",
        "name": "HarmonyOS 3.0",
        "ua": "Mozilla/5.0 (Linux; Android 12; HarmonyOS; NOH-AN01; HMSCore 6.7.0.312) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/99.0.4844.88 HuaweiBrowser/13.0.0.300 Mobile Safari/537.36",
        "platform": "Win32",
        "vendor": "Google Inc.",
        "maxTouchPoints": 0,
        "mobile": false
      },
      {
        "id": "harmonyos-harmonyos-4-0",
        "name": "HarmonyOS 4.0",
        "ua": "Mozilla/5.0 (Linux; Android 14; HarmonyOS; ALN-AL10; HMSCore 6.12.0.301) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.5735.196 HuaweiBrowser/15.0.3.331 Mobile Safari/537.36",
        "platform": "Win32",
        "vendor": "Google Inc.",
        "maxTouchPoints": 0,
        "mobile": false
      },
      {
        "id": "symbian-symbian-os-9-2-s60v3",
        "name": "Symbian OS 9.2 (S60v3)",
        "ua": "Mozilla/5.0 (SymbianOS/9.2; U; Series60/3.1 NokiaN95/31.0.017; Profile/MIDP-2.0 Configuration/CLDC-1.1) AppleWebKit/413 (KHTML, like Gecko) Safari/413",
        "platform": "Win32",
        "vendor": "Google Inc.",
        "maxTouchPoints": 0,
        "mobile": false
      },
      {
        "id": "symbian-symbian-os-9-3-s60v3-2",
        "name": "Symbian OS 9.3 (S60v3.2)",
        "ua": "Mozilla/5.0 (SymbianOS/9.3; U; Series60/3.2 NokiaN78-1/10.136; Profile/MIDP-2.0 Configuration/CLDC-1.1) AppleWebKit/413 (KHTML, like Gecko) Safari/413",
        "platform": "Win32",
        "vendor": "Google Inc.",
        "maxTouchPoints": 0,
        "mobile": false
      },
      {
        "id": "symbian-symbian-os-9-4-s60v5",
        "name": "Symbian OS 9.4 (S60v5)",
        "ua": "Mozilla/5.0 (SymbianOS/9.4; Series60/5.0 Nokia5800d-1/60.0.003; Profile/MIDP-2.1 Configuration/CLDC-1.1) AppleWebKit/533.4 (KHTML, like Gecko) NokiaBrowser/7.3.1.33 Mobile Safari/533.4",
        "platform": "Win32",
        "vendor": "Google Inc.",
        "maxTouchPoints": 0,
        "mobile": false
      },
      {
        "id": "symbian-symbian-3-nokia-n8",
        "name": "Symbian^3 (Nokia N8)",
        "ua": "Mozilla/5.0 (Symbian/3; Series60/5.2 NokiaN8-00/025.007; Profile/MIDP-2.1 Configuration/CLDC-1.1) AppleWebKit/533.4 (KHTML, like Gecko) NokiaBrowser/7.3.1.33 Mobile Safari/533.4",
        "platform": "Win32",
        "vendor": "Google Inc.",
        "maxTouchPoints": 0,
        "mobile": false
      },
      {
        "id": "symbian-symbian-belle-nokia-808",
        "name": "Symbian Belle (Nokia 808)",
        "ua": "Mozilla/5.0 (Symbian/3; Series60/5.5 Nokia808PureView/113.010.1508; Profile/MIDP-2.1 Configuration/CLDC-1.1) AppleWebKit/535.1 (KHTML, like Gecko) NokiaBrowser/8.3.1.4 Mobile Safari/535.1",
        "platform": "Win32",
        "vendor": "Google Inc.",
        "maxTouchPoints": 0,
        "mobile": false
      },
      {
        "id": "firefox-os-firefox-os-1-0",
        "name": "Firefox OS 1.0",
        "ua": "Mozilla/5.0 (Mobile; rv:18.0) Gecko/18.0 Firefox/18.0",
        "platform": "Win32",
        "vendor": "Google Inc.",
        "maxTouchPoints": 0,
        "mobile": false
      },
      {
        "id": "firefox-os-firefox-os-1-1",
        "name": "Firefox OS 1.1",
        "ua": "Mozilla/5.0 (Mobile; rv:18.1) Gecko/18.1 Firefox/18.1",
        "platform": "Win32",
        "vendor": "Google Inc.",
        "maxTouchPoints": 0,
        "mobile": false
      },
      {
        "id": "firefox-os-firefox-os-1-3",
        "name": "Firefox OS 1.3",
        "ua": "Mozilla/5.0 (Mobile; rv:28.0) Gecko/28.0 Firefox/28.0",
        "platform": "Win32",
        "vendor": "Google Inc.",
        "maxTouchPoints": 0,
        "mobile": false
      },
      {
        "id": "firefox-os-firefox-os-1-4",
        "name": "Firefox OS 1.4",
        "ua": "Mozilla/5.0 (Mobile; rv:30.0) Gecko/30.0 Firefox/30.0",
        "platform": "Win32",
        "vendor": "Google Inc.",
        "maxTouchPoints": 0,
        "mobile": false
      },
      {
        "id": "firefox-os-firefox-os-2-0",
        "name": "Firefox OS 2.0",
        "ua": "Mozilla/5.0 (Mobile; rv:32.0) Gecko/32.0 Firefox/32.0",
        "platform": "Win32",
        "vendor": "Google Inc.",
        "maxTouchPoints": 0,
        "mobile": false
      },
      {
        "id": "firefox-os-firefox-os-2-2",
        "name": "Firefox OS 2.2",
        "ua": "Mozilla/5.0 (Mobile; rv:37.0) Gecko/37.0 Firefox/37.0",
        "platform": "Win32",
        "vendor": "Google Inc.",
        "maxTouchPoints": 0,
        "mobile": false
      },
      {
        "id": "firefox-os-firefox-os-2-5",
        "name": "Firefox OS 2.5",
        "ua": "Mozilla/5.0 (Mobile; rv:44.0) Gecko/44.0 Firefox/44.0",
        "platform": "Win32",
        "vendor": "Google Inc.",
        "maxTouchPoints": 0,
        "mobile": false
      },
      {
        "id": "firefox-os-firefox-os-2-6",
        "name": "Firefox OS 2.6",
        "ua": "Mozilla/5.0 (Mobile; rv:46.0) Gecko/46.0 Firefox/46.0",
        "platform": "Win32",
        "vendor": "Google Inc.",
        "maxTouchPoints": 0,
        "mobile": false
      },
      {
        "id": "sailfish-os-sailfish-os-3-4",
        "name": "Sailfish OS 3.4",
        "ua": "Mozilla/5.0 (Linux; U; Sailfish 3.4; Mobile; rv:78.0) Gecko/78.0 Firefox/78.0 SailfishBrowser/1.0",
        "platform": "Win32",
        "vendor": "Google Inc.",
        "maxTouchPoints": 0,
        "mobile": false
      },
      {
        "id": "sailfish-os-sailfish-os-4-0",
        "name": "Sailfish OS 4.0",
        "ua": "Mozilla/5.0 (Linux; U; Sailfish 4.0; Mobile; rv:78.0) Gecko/78.0 Firefox/78.0 SailfishBrowser/1.0",
        "platform": "Win32",
        "vendor": "Google Inc.",
        "maxTouchPoints": 0,
        "mobile": false
      },
      {
        "id": "sailfish-os-sailfish-os-4-5",
        "name": "Sailfish OS 4.5",
        "ua": "Mozilla/5.0 (Linux; U; Sailfish 4.5; Mobile; rv:91.0) Gecko/91.0 Firefox/91.0 SailfishBrowser/1.0",
        "platform": "Win32",
        "vendor": "Google Inc.",
        "maxTouchPoints": 0,
        "mobile": false
      },
      {
        "id": "haiku-haiku-r1-beta-3",
        "name": "Haiku R1 Beta 3",
        "ua": "Mozilla/5.0 (X11; Haiku x86_64; rv:102.0) Gecko/20100101 Firefox/102.0",
        "platform": "Win32",
        "vendor": "Google Inc.",
        "maxTouchPoints": 0,
        "mobile": false
      },
      {
        "id": "haiku-haiku-r1-beta-4",
        "name": "Haiku R1 Beta 4",
        "ua": "Mozilla/5.0 (X11; Haiku x86_64; rv:115.0) Gecko/20100101 Firefox/115.0",
        "platform": "Win32",
        "vendor": "Google Inc.",
        "maxTouchPoints": 0,
        "mobile": false
      },
      {
        "id": "os-2-ecomstation-os-2-warp-4",
        "name": "OS/2 & eComStation · OS/2 Warp 4",
        "ua": "Mozilla/5.0 (OS/2; Warp 4.5; rv:38.0) Gecko/20100101 Firefox/38.0",
        "platform": "Win32",
        "vendor": "Google Inc.",
        "maxTouchPoints": 0,
        "mobile": false
      },
      {
        "id": "os-2-ecomstation-ecomstation-2-1",
        "name": "OS/2 & eComStation · eComStation 2.1",
        "ua": "Mozilla/5.0 (OS/2; eComStation 2.1; rv:45.0) Gecko/20100101 Firefox/45.0",
        "platform": "Win32",
        "vendor": "Google Inc.",
        "maxTouchPoints": 0,
        "mobile": false
      },
      {
        "id": "amigaos-amigaos-4-1",
        "name": "AmigaOS 4.1",
        "ua": "Mozilla/5.0 (AmigaOS 4.1; ppc; rv:4.0) OWB/4.0",
        "platform": "Win32",
        "vendor": "Google Inc.",
        "maxTouchPoints": 0,
        "mobile": false
      },
      {
        "id": "amigaos-aros-amiga-clone",
        "name": "AmigaOS · AROS (Amiga clone)",
        "ua": "Mozilla/5.0 (AROS x86_64; rv:52.0) Gecko/20100101 Firefox/52.0",
        "platform": "Win32",
        "vendor": "Google Inc.",
        "maxTouchPoints": 0,
        "mobile": false
      },
      {
        "id": "amigaos-morphos-3-15",
        "name": "AmigaOS · MorphOS 3.15",
        "ua": "Mozilla/5.0 (MorphOS; ppc; rv:52.0) Gecko/20100101 Firefox/52.0",
        "platform": "Win32",
        "vendor": "Google Inc.",
        "maxTouchPoints": 0,
        "mobile": false
      },
      {
        "id": "risc-os-risc-os-5",
        "name": "RISC OS 5",
        "ua": "Mozilla/5.0 (RISC OS 5; armv7) Netsurf/3.10",
        "platform": "Win32",
        "vendor": "Google Inc.",
        "maxTouchPoints": 0,
        "mobile": false
      },
      {
        "id": "beos-beos-5",
        "name": "BeOS 5",
        "ua": "Mozilla/5.0 (BeOS; U; BeOS BePC; en-US; rv:1.8.1.6) Gecko/20070731 BonEcho/2.0.0.6",
        "platform": "Win32",
        "vendor": "Google Inc.",
        "maxTouchPoints": 0,
        "mobile": false
      }
    ]
  }
];

  return {
    categories,
    /**
     * Look up preset by ID across all categories.
     * @param {string} id
     * @returns {Object|undefined}
     */
    findById: function (id) {
      for (const cat of categories) {
        const found = cat.items.find(item => item.id === id);
        if (found) return found;
      }
      return undefined;
    },
    /**
     * Calculate total preset count.
     * @returns {number}
     */
    getTotalCount: function () {
      return categories.reduce((sum, cat) => sum + cat.items.length, 0);
    }
  };
});

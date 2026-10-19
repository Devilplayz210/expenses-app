# 💰 Expenses — Smart Personal Finance Tracker & PWA

[![Live Demo](https://img.shields.io/badge/Live_Demo-expenses--c13a8.web.app-0a4d3c?style=for-the-badge&logo=firebase&logoColor=white)](https://expenses-c13a8.web.app)
[![License: MIT](https://img.shields.io/badge/License-MIT-emerald.svg?style=for-the-badge)](LICENSE)
[![PWA Ready](https://img.shields.io/badge/PWA-Installable-blue.svg?style=for-the-badge&logo=pwa&logoColor=white)](manifest.json)
[![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](index.html)
[![Firebase](https://img.shields.io/badge/Firebase-Auth%20%26%20Firestore-FFCA28?style=for-the-badge&logo=firebase&logoColor=black)](firebase-config.js)

> 🚀 **Live Web App:** **[https://expenses-c13a8.web.app](https://expenses-c13a8.web.app)**  
> *Click the link above to test the live application instantly in your browser (supports Guest mode & cloud sync).*

**Expenses** is a modern, high-performance, and offline-capable Progressive Web Application (PWA) designed to give you total control over your personal finances. Track daily expenses and income, capture photo receipts, monitor monthly category budgets, analyze rolling trends, and seamlessly synchronize your data across devices with Firebase.

---

## 🌟 Highlights & Key Features

### 📊 Real-Time Financial Dashboard
* **Split Account Balances**: Dedicated tracking for **Digital Accounts** (bank, cards, UPI) and **Physical Cash**.
* **Anytime Balance Editing**: Quickly recalibrate wallet balances directly from the dashboard card or settings.
* **Privacy Toggle**: Blur sensitive balance amounts instantly with the one-click eye toggle.
* **Monthly Spending Overview**: Instant visual feedback on total income, expenses, and net cashflow.

### 🧾 Transaction & Receipt Management
* **Fast Transaction Entry**: Record expenses and income with custom tags, categories, and account channels.
* **Receipt Scanner & Attachment Vault**: Snap photo receipts directly with device camera or upload image files.
* **Full-Resolution Receipt Viewer**: Inspect, zoom, and download saved receipt images with linked transaction metadata.
* **Search & Filter**: Search transaction notes or filter records by date range, category, and payment channel.

### 🎯 Monthly Budgeting & Limit Alerts
* **Dynamic Budget Progress**: Set overall monthly limits and observe live progress bars.
* **Per-Category Budget Targets**: Configure spending ceilings for Food, Utilities, Shopping, Entertainment, etc.
* **Smart Alert Thresholds**: Visual indicators warn you as categories approach or exceed allocations.

### 📈 Dynamic Analytics & Rolling Reports
* **Zero Dummy Data**: Real financial aggregations computed directly from actual logged transactions.
* **Dynamic Rolling 5-Month Window**: Seamlessly transitions across calendar months and new year boundaries.
* **Expense Breakdown Charts**: Visual category distribution to help pinpoint where money is spent.
* **Adaptive Empty States**: Clean, informative empty views when starting fresh.

### ☁️ Cloud Sync & Offline-First Resilience
* **Offline-First Storage**: Full offline functionality using persistent browser storage (`localStorage`).
* **Firebase Cloud Firestore**: Automatically syncs transaction history across all signed-in devices when online.
* **Flexible Authentication**: Google One-Tap Sign-In, Email/Password authentication, and a Guest Mode for instant testing without registration.

### 📱 Progressive Web App (PWA)
* **Installable on Any Device**: Works seamlessly on iOS, Android, Windows, macOS, and Linux.
* **Native App Feel**: Implements smooth animations, haptic-friendly buttons, and safe-area insets.
* **Service Worker Caching**: Ultra-fast loads via background caching (`sw.js`).
* **Multi-Currency Support**: Native support for USD (`$`), EUR (`€`), GBP (`£`), INR (`₹`), JPY (`¥`), CAD (`$`), AUD (`$`), and more.

---

## 🛠️ Technology Stack

| Layer | Technologies |
| :--- | :--- |
| **Frontend** | Vanilla JavaScript (ES6+ Modules), HTML5, Modern CSS3 (Variables, Grid, Flexbox, Glassmorphism) |
| **Icons & Typography** | [Lucide Icons](https://lucide.dev/), [Plus Jakarta Sans](https://fonts.google.com/specimen/Plus+Jakarta+Sans) |
| **Backend as a Service** | [Google Firebase](https://firebase.google.com/) (Authentication, Cloud Firestore, Firebase Hosting, Analytics) |
| **PWA Infrastructure** | Service Worker (`sw.js`), Web App Manifest (`manifest.json`) |
| **Local Dev Server** | Python 3 HTTP Server (`server.py`) with zero-cache headers and auto-port selection |

---

## 📁 Project Directory Structure

```text
curious-curie/
├── index.html            # Main dashboard, views, modals, and core application logic
├── signin.html           # Authentication portal (Google & Email sign-in / registration)
├── server.py             # Development server with automatic port detection
├── sw.js                 # Service worker managing offline asset caching
├── manifest.json         # Web App Manifest for native installation
├── icon.svg              # Vector logo and PWA application icon
├── firebase.json         # Firebase Hosting rewrites, headers, and cache configuration
├── firebase-config.js    # Firebase credentials and SDK initialization
├── package.json          # Node project metadata and convenience scripts
└── README.md             # Project documentation
```

---

## 🚀 Quick Start Guide

### 1. Clone the Repository
```bash
git clone https://github.com/Devilplayz210/expenses-app.git
cd expenses-app
```

### 2. Run Locally

You can run the application with Python's built-in server or the included `server.py`:

```bash
# Recommended: Starts custom development server with no-cache headers
python3 server.py

# Or via npm shortcut:
npm start
```

Open your browser and navigate to:
```text
http://localhost:8000
```

### 3. Deploy to Firebase Hosting

To deploy your own instance to Firebase:

1. **Install Firebase CLI**:
   ```bash
   npm install -g firebase-tools
   ```

2. **Authenticate with Firebase**:
   ```bash
   firebase login
   ```

3. **Deploy Hosting**:
   ```bash
   firebase deploy --only hosting
   ```

Your site will be live at `https://<your-project-id>.web.app`.

---

## 📲 Installing as a PWA

### On Mobile (iOS / Android)
* **iOS (Safari)**: Tap the **Share** button at the bottom of the screen, scroll down, and select **Add to Home Screen**.
* **Android (Chrome)**: Tap the three-dot menu icon in the top right, then select **Install app** or **Add to Home screen**.

### On Desktop (Chrome / Edge / Brave)
* Click the install icon in the URL address bar or select **Install Expenses** from the browser settings menu.

---

## 🔒 Security & Privacy

* **Local Storage Option**: You can use the entire application in Guest Mode; financial logs stay strictly inside your device's browser storage.
* **Encrypted Cloud Backup**: Firebase Authentication guarantees authenticated data access governed by Cloud Firestore security rules.
* **No Third-Party Trackers**: No intrusive advertising SDKs or third-party behavioral trackers.

---

## 📄 License

This project is licensed under the [MIT License](LICENSE) — feel free to modify and build upon it.

---

<p align="center">
  Made with ❤️ for simple, stress-free personal finance.
</p>

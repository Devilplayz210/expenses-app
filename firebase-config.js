// Firebase Configuration & Initialization for Expenses App
import { initializeApp } from "https://www.gstatic.com/firebasejs/13.0.0/firebase-app.js";
import { getAnalytics, isSupported } from "https://www.gstatic.com/firebasejs/13.0.0/firebase-analytics.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/13.0.0/firebase-auth.js";

// Your web app's Firebase configuration
export const firebaseConfig = {
  apiKey: "AIzaSyDbDcONvkP45wGsLe9qiPZKYjFstjQlXXk",
  authDomain: "expenses-c13a8.firebaseapp.com",
  projectId: "expenses-c13a8",
  storageBucket: "expenses-c13a8.firebasestorage.app",
  messagingSenderId: "181825770479",
  appId: "1:181825770479:web:11ad44dabf429491dd5c1a",
  measurementId: "G-HQWKD5ETZ0"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

export let analytics = null;
if (typeof window !== "undefined") {
  window.firebaseApp = app;
  window.firebaseAuth = auth;
  try {
    isSupported().then(supported => {
      if (supported) {
        analytics = getAnalytics(app);
        window.firebaseAnalytics = analytics;
      }
    }).catch(() => {});
  } catch (e) {
    console.warn("Analytics initialization skipped:", e);
  }
}

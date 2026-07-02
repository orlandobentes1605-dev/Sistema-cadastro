import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-auth.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-analytics.js";

const firebaseConfig = {
    apiKey: "AIzaSyAC3xFRezQ-st2JCmUyCG7xMZAUZ5gIjyA",
    authDomain: "sistemafiliacao-team-as.firebaseapp.com",
    projectId: "sistemafiliacao-team-as",
    storageBucket: "sistemafiliacao-team-as.firebasestorage.app",
    messagingSenderId: "727325899527",
    appId: "1:727325899527:web:3b4105e30e1f901775e3a2",
    measurementId: "G-RWTHQZPR3W"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const analytics = getAnalytics(app);

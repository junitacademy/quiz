import { writable } from 'svelte/store'
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged } from "firebase/auth";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyDTPteO48MBCs0p1xCH3bHIJ2DqgJVOQWg",
  authDomain: "tinyquiz-dev.firebaseapp.com",
  databaseURL: "https://tinyquiz-dev-default-rtdb.firebaseio.com",
  projectId: "tinyquiz-dev",
  storageBucket: "tinyquiz-dev.appspot.com",
  messagingSenderId: "556237416277",
  appId: "1:556237416277:web:bdde340a2ed4534b99b1dc",
  measurementId: "G-C618E99Q47"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getDatabase(app);

export const user = writable(JSON.parse(localStorage.user || null));

onAuthStateChanged(auth,u=>{
    localStorage.user = JSON.stringify(u);
    user.set(u);
});


export function login(){
        let provider = new GoogleAuthProvider();
        signInWithPopup(auth,provider);
        return;
    }
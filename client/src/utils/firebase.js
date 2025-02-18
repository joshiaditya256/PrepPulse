
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth"
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "preppulse-ddcff.firebaseapp.com",
  projectId: "preppulse-ddcff",
  storageBucket: "preppulse-ddcff.firebasestorage.app",
  messagingSenderId: "517638230667",
  appId: "1:517638230667:web:4ed09f0e193b059e0b7a8e"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const provider = new GoogleAuthProvider()

export {auth , provider}
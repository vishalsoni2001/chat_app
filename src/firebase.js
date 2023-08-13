import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAaVM1PHKwCwwU2RcBtPHuLT13muEu7hKQ",
  authDomain: "chat-app-2-735d4.firebaseapp.com",
  projectId: "chat-app-2-735d4",
  storageBucket: "chat-app-2-735d4.appspot.com",
  messagingSenderId: "252000638884",
  appId: "1:252000638884:web:18750da9cef145e9875331"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()

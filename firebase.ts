import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBizyWyrEKBvsqFMCD33kjIqUXVQaxAEZw",
  authDomain: "chatgpt-messenger-yt-f7977.firebaseapp.com",
  projectId: "chatgpt-messenger-yt-f7977",
  storageBucket: "chatgpt-messenger-yt-f7977.appspot.com",
  messagingSenderId: "741520971649",
  appId: "1:741520971649:web:6883b8184432ae0adefa80"
};

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db =getFirestore(app);

export { db };
// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getStorage } from 'firebase/storage';
import { getFirestore } from 'firebase/firestore';
import 'firebase/storage';



// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyCdGIwGf8ani2Lc-zP-3zUo6Vsor8cIq6I",
  authDomain: "traning-chat-app.firebaseapp.com",
  projectId: "traning-chat-app",
  storageBucket: "traning-chat-app.appspot.com",
  messagingSenderId: "171830879697",
  appId: "1:171830879697:web:a10209e7a382c40ab7acf0"
};

  const app = initializeApp(firebaseConfig);
    const auth = getAuth();
    const storage = getStorage();
    const db = getFirestore();
    export {auth, storage, db};
    
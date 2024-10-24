// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBNWPgP3FrxSuknj3-8HMm9RrAQb_-whqs",
  authDomain: "contact-list-app-ae749.firebaseapp.com",
  projectId: "contact-list-app-ae749",
  storageBucket: "contact-list-app-ae749.appspot.com",
  messagingSenderId: "568998227987",
  appId: "1:568998227987:web:53f5a1bd98639fa0e20fe6",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Storage
export const storage = getStorage(app);

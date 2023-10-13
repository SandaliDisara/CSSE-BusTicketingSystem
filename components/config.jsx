// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDdgsoVkDhMR6eYjeED5aUq7Vb5qvxpxAQ",
  authDomain: "cssetest-ecc47.firebaseapp.com",
  projectId: "cssetest-ecc47",
  storageBucket: "cssetest-ecc47.appspot.com",
  messagingSenderId: "1013439684587",
  appId: "1:1013439684587:web:e7a341325bb9fa0d65c3ae",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//Intialize Firestore
export const db = getFirestore(app);

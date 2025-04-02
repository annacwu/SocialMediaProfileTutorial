// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD89tGgGxCIqpAF7Eucgo2mPNPU86PIjIc",
  authDomain: "socialmediaapp-75f26.firebaseapp.com",
  projectId: "socialmediaapp-75f26",
  storageBucket: "socialmediaapp-75f26.firebasestorage.app",
  messagingSenderId: "1070981555173",
  appId: "1:1070981555173:web:1e50ea2a40e8ba78ae050c",
  measurementId: "G-1Z2VXWS3QV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

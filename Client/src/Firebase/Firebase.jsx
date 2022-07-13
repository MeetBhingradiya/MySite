// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAeP-b_S6Xpn2DfhvbDQ_xqT6H4OKF5liw",
  authDomain: "mywebsite-253e2.firebaseapp.com",
  projectId: "mywebsite-253e2",
  storageBucket: "mywebsite-253e2.appspot.com",
  messagingSenderId: "735040352258",
  appId: "1:735040352258:web:17a1153da7dd4195ca371b",
  measurementId: "G-Y16FTNKNTD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
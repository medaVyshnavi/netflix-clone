// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCnVWtI76sbRD-NRdVWtOlHon5ecKUg67c",
  authDomain: "netflix-gpt-37ed4.firebaseapp.com",
  projectId: "netflix-gpt-37ed4",
  storageBucket: "netflix-gpt-37ed4.appspot.com",
  messagingSenderId: "262385174831",
  appId: "1:262385174831:web:ac2db5cb750017d7a5f9da",
  measurementId: "G-RQCG92PHL8",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

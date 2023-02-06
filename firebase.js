// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD7ZiKoAlpD__ofnJq-OJP1cpd5fi1hm8A",
  authDomain: "tasty-tech-bytes-5.firebaseapp.com",
  projectId: "tasty-tech-bytes-5",
  storageBucket: "tasty-tech-bytes-5.appspot.com",
  messagingSenderId: "258662935096",
  appId: "1:258662935096:web:c6e2855a9651159ea354cd",
  measurementId: "G-L8XBJERJS4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

export { db };

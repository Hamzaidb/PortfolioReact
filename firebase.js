// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCGXiT2o9k4cJ_TKbae2NSip3a4PG8MQKI",
  authDomain: "portfolio-app-d8044.firebaseapp.com",
  databaseURL: "https://portfolio-app-d8044.firebaseio.com",
  projectId: "portfolio-app-d8044",
  storageBucket: "portfolio-app-d8044.appspot.com",
  messagingSenderId: "286995047389",
  appId: "1:286995047389:web:48bd5f0dd1ac7e21208c34",
  measurementId: "G-ZKR04FVW6D"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const analytics = getAnalytics(app);

export { db };
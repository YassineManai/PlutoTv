// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDr_ZMPtFMjav_ViS-vOUQzbktvd9IK-VU",
  authDomain: "netflix-clone-314eb.firebaseapp.com",
  projectId: "netflix-clone-314eb",
  storageBucket: "netflix-clone-314eb.appspot.com",
  messagingSenderId: "727244506430",
  appId: "1:727244506430:web:077e55e60f272c9ce6d86f",
  measurementId: "G-424HQPWJFP"
};

// Initialize Firebase
export const firebase = initializeApp(firebaseConfig);
export const auth = getAuth(firebase);
export const db = getFirestore(firebase)

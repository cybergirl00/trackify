// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth, GoogleAuthProvider } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBT_Y0PZBlFTu2c3rTM4RgbhuKfU9MLFlQ",
  authDomain: "trakify-c8ad3.firebaseapp.com",
  projectId: "trakify-c8ad3",
  storageBucket: "trakify-c8ad3.appspot.com",
  messagingSenderId: "969935718301",
  appId: "1:969935718301:web:a184546291bfe033391174"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const provider = new GoogleAuthProvider(app)
export const db = getFirestore(app)
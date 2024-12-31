// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// 匯入firebase
import {getAuth, GoogleAuthProvider} from "firebase/auth"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCx6z_i8bls0bDbFgihaeU_Sb-P8Vc75CM",
  authDomain: "react-98101.firebaseapp.com",
  projectId: "react-98101",
  storageBucket: "react-98101.firebasestorage.app",
  messagingSenderId: "868735466952",
  appId: "1:868735466952:web:939bf2cd8ecd615f6054fd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// 匯出
export const auth = getAuth(app);
export const provide = new GoogleAuthProvider();
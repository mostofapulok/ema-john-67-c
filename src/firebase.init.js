// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBIdX6sdJC4Vyh_YO6CMfR6umKPBJl0Unw",
  authDomain: "ema-john-67.firebaseapp.com",
  projectId: "ema-john-67",
  storageBucket: "ema-john-67.appspot.com",
  messagingSenderId: "104118549922",
  appId: "1:104118549922:web:1d6dec7a20d92c2a70c6fb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
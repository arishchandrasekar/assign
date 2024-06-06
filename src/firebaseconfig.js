import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAq7Eh6FZzgb5fx5dnTawJdr1oUQbD_XaE",
  authDomain: "auth-a4dda.firebaseapp.com",
  projectId: "auth-a4dda",
  storageBucket: "auth-a4dda.appspot.com",
  messagingSenderId: "371941183724",
  appId: "1:371941183724:web:63472cdc2d312d3ee315c9",
  measurementId: "G-VD9P0DCLFT",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

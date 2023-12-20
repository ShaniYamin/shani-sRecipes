
import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider} from "firebase/auth"
const firebaseConfig = {
  apiKey: "AIzaSyCu_vAqxk5TbTeUre8-8Hk3hBQHEygH6JI",
  authDomain: "shani-s-recipes.firebaseapp.com",
  projectId: "shani-s-recipes",
  storageBucket: "shani-s-recipes.appspot.com",
  messagingSenderId: "1048076808142",
  appId: "1:1048076808142:web:9dd61602279a41a3be059f"
};

const app = initializeApp(firebaseConfig);
const auth= getAuth(app);
const provider= new GoogleAuthProvider();

export {auth, provider};
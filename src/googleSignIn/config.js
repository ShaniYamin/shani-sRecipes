
import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider} from "firebase/auth"

const firebaseConfig = {
    apiKey: "AIzaSyBVmvV5YU8yoWA6qOwXwLG-K2f5rb5xAkY",
    authDomain: "shanisrecipes-f2621.firebaseapp.com",
    projectId: "shanisrecipes-f2621",
    storageBucket: "shanisrecipes-f2621.appspot.com",
    messagingSenderId: "662804727038",
    appId: "1:662804727038:web:28a74b30a04bc3ef2a11af"
  };

const app = initializeApp(firebaseConfig);
const auth= getAuth(app);
const provider= new GoogleAuthProvider();

export {auth, provider};
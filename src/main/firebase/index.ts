import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCZputDUuudTZu_APyJa2CjMMMENElIZ74",
  authDomain: "startup-21fc5.firebaseapp.com",
  projectId: "startup-21fc5",
  storageBucket: "startup-21fc5.appspot.com",
  messagingSenderId: "90486262677",
  appId: "1:90486262677:web:ed49d91d1b582c9ad5049c",
  measurementId: "G-R8E5N53FNH",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

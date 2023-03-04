import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA6Z5qN1wosdzGH5ebfPuiVC9YtWEsr8sU",
  authDomain: "asaxiy-8ecba.firebaseapp.com",
  projectId: "asaxiy-8ecba",
  storageBucket: "asaxiy-8ecba.appspot.com",
  messagingSenderId: "4179533335",
  appId: "1:4179533335:web:35da251f02ad9bea430652",
  measurementId: "G-444370P2RP",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

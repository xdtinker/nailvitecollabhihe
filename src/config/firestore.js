import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyCq0RaRO0R-Pw4QCzL-vM1HujNmbb4fOZE",
  authDomain: "collab-e3741.firebaseapp.com",
  projectId: "collab-e3741",
  storageBucket: "collab-e3741.appspot.com",
  messagingSenderId: "218584908050",
  appId: "1:218584908050:web:52eb20b7877078248d33cb",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);

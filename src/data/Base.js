//FIREBASE CONFIG
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyBWlz26dNE-eneSUHkcdqDpeelaYf9ddkk",
  authDomain: "swapp-7ff47.firebaseapp.com",
  databaseURL: "https://swapp-7ff47-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "swapp-7ff47",
  storageBucket: "swapp-7ff47.appspot.com",
  messagingSenderId: "918833195236",
  appId: "1:918833195236:web:4ef26edda8ca65cf9ba4f1",
  measurementId: "G-HQ39RWWV6Q"
};

export const auth = getAuth();
export const db = getDatabase(app);
const app = initializeApp(firebaseConfig);
export default app;




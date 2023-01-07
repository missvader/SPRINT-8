// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAhf11Ka342AWaYGW_ofo5dJuFTJqce3D0",
  authDomain: "starwars-204a6.firebaseapp.com",
  databaseURL: "https://starwars-204a6-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "starwars-204a6",
  storageBucket: "starwars-204a6.appspot.com",
  messagingSenderId: "491720715444",
  appId: "1:491720715444:web:512ae9578b3d6ccc20fbe1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
export default app;
export const db = getDatabase(app);



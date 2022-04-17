// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAvbnPAT5hyRurRiwk-aFs0XM35OZsK4Us",
  authDomain: "nutrition-specialist.firebaseapp.com",
  projectId: "nutrition-specialist",
  storageBucket: "nutrition-specialist.appspot.com",
  messagingSenderId: "464500522358",
  appId: "1:464500522358:web:52c2fb90e4a68872618e57",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;

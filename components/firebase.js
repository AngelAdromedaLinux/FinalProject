// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA2IEWOcI-xm3EzXldfuQRwkGGp5VU-dzA",
  authDomain: "proyectofinal-23e0d.firebaseapp.com",
  projectId: "proyectofinal-23e0d",
  storageBucket: "proyectofinal-23e0d.firebasestorage.app",
  messagingSenderId: "487528892123",
  appId: "1:487528892123:web:1c64bccddb6bd35e726efe"
};

// Initialize Firebase
const firebase = initializeApp(firebaseConfig);

export const db = getFirestore(firebase);

export default{
    firebase
};

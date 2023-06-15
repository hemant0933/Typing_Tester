import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBEADAIKykPtSEZvfaPrAdX3R6Hwnm7NAY",
  authDomain: "typing-website-5bf98.app.com",
  projectId: "typing-website-5bf98",
  storageBucket: "typing-website-5bf98.appspot.com",
  messagingSenderId: "48159604446",
  appId: "1:48159604446:web:71ab55a0fb016e7c67cc4f",
  measurementId: "G-7LZ9JGC500",
  
};
//Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);
// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);


// console.log(auth.currentUser);


export { auth, db };

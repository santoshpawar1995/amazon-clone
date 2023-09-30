import { initializeApp } from "firebase/app";
import { addDoc, collection } from "@firebase/firestore"
import { firestore } from "../firebase_setup/firebase"

const firebaseConfig = {
  apiKey: "AIzaSyDwkmtQo7fC2ezq6OQnuhcE2cQJNdzryRw",
  authDomain: "fir-74e80.firebaseapp.com",
  projectId: "fir-74e80",
  storageBucket: "fir-74e80.appspot.com",
  messagingSenderId: "797573666362",
  appId: "1:797573666362:web:c822bd139b2469134c4703",
  measurementId: "G-C8DDGT21GJ"
};

// Initialize Firebase
const firebaseapp =firebase.initializeApp(firebaseConfig);
const db= firebaseApp.firestore();


// const analytics = getAnalytics(app);
// const firestore=getFirestore(app);
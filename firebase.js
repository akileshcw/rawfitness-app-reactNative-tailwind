// Import the functions you need from the SDKs you need
import { initializeApp, getApps } from "firebase/app";
import {getAuth, onAuthStateChanged} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA8AJigssioTxpRtIks-PFp-QCo4Pw8VVs",
  authDomain: "raw-fitness-app-6dcf7.firebaseapp.com",
  projectId: "raw-fitness-app-6dcf7",
  storageBucket: "raw-fitness-app-6dcf7.appspot.com",
  messagingSenderId: "1019517332065",
  appId: "1:1019517332065:web:4ef221501ea34f260a5820",
}

let app;
if (getApps.length === 0) {
  app = initializeApp(firebaseConfig);
} else {
  app = app;
}
  
 
// Authentication
const auth = getAuth(app)

onAuthStateChanged(auth, user => {
  if (user != null) {
    console.log('user logged in')
  } else {
    console.log("user logged out")
  }
})

// Initialize Firebase
// OLD FIREBASEv8 CODEBASE
// let app;
// if (firebase.getApps.length === 0) {
//   app = firebase.initializeApp(firebaseConfig);
// } else {
//   app = firebase.app;
// }

export {auth}

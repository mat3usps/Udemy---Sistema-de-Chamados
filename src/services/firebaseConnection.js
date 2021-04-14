import firebase from "firebase/app";
import "firebase/auth";

let firebaseConfig = {
  apiKey: "AIzaSyBQO1NFI7MOf9ZPDghZvUB1fC1K6lPE1e0",
  authDomain: "sistema-de-chamados-47c32.firebaseapp.com",
  projectId: "sistema-de-chamados-47c32",
  storageBucket: "sistema-de-chamados-47c32.appspot.com",
  messagingSenderId: "1038568399040",
  appId: "1:1038568399040:web:6885242350537241040d25",
  measurementId: "G-1PTGQPDDRD",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default firebase;

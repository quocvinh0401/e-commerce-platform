import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD9effhlrCQ_e9eVm4q3pCcUBouzn9X6WQ",
  authDomain: "shopee-clone-cd42f.firebaseapp.com",
  projectId: "shopee-clone-cd42f",
  storageBucket: "shopee-clone-cd42f.appspot.com",
  messagingSenderId: "418572977126",
  appId: "1:418572977126:web:66dc69cdebb4929bb70c27",
  measurementId: "G-PNKR2YXY39",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };

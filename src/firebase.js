import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCtZ5-dYWBcA09bORCveAKtex40rw2LLRA",
  authDomain: "instagram-clone-bdbc0.firebaseapp.com",
  projectId: "instagram-clone-bdbc0",
  storageBucket: "instagram-clone-bdbc0.appspot.com",
  messagingSenderId: "711102991749",
  appId: "1:711102991749:web:dd03794b34947290de08ec",
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };

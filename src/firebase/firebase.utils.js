import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyAmU9O7Bev6zuEhH1QfbUcy78KE3b3s_94",
  authDomain: "clothing-store-f58ed.firebaseapp.com",
  projectId: "clothing-store-f58ed",
  storageBucket: "clothing-store-f58ed.appspot.com",
  messagingSenderId: "94818410396",
  appId: "1:94818410396:web:eff0b496f29ce25c7f7259",
  measurementId: "G-7RXCEE5R0K",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

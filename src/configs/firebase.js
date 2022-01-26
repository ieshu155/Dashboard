
import firebase from 'firebase';
import { useContext } from 'react';
// import * as auth from 'firebase'

// working package :      "firebase": "7.20.0",
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD7w_alIje4A7DEr0G33toxrin5noPldy0",
  authDomain: "cse545-g11-shs.firebaseapp.com",
  projectId: "cse545-g11-shs",
  storageBucket: "cse545-g11-shs.appspot.com",
  messagingSenderId: "411025679894",
  appId: "1:411025679894:web:bc00e75f9be779db75b737"
};


export const app = firebase.initializeApp(firebaseConfig);
export const auth = app.auth()

export const useAuthState = () => {
  const _auth = useContext(auth)
  return { ..._auth, isAuthenticated: _auth.user != null }
}


import firebase from 'firebase'

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDET0SpHPWGhjb3VxH_FKCZq_jZ2hGfLQs",
  authDomain: "clone-c92e6.firebaseapp.com",
  projectId: "clone-c92e6",
  storageBucket: "clone-c92e6.appspot.com",
  messagingSenderId: "670353999959",
  appId: "1:670353999959:web:d6a85a6bfdb18460d1bb12"
});

const db = firebaseApp.firestore();
const auth = firebase.auth();

export {db,auth};
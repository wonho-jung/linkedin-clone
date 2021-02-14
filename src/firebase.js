import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCxXX9ySLIoWh56CZEulVcmg9Zwo6SEgO8",
  authDomain: "linkedin-clone-e1af4.firebaseapp.com",
  projectId: "linkedin-clone-e1af4",
  storageBucket: "linkedin-clone-e1af4.appspot.com",
  messagingSenderId: "490919937063",
  appId: "1:490919937063:web:79aa19ee554436038a7a02",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };

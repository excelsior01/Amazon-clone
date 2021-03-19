import firebase from "firebase";


const firebaseConfig = {
    apiKey: "AIzaSyCnbvN4yj7CwdyBFEMBbjB--ekviJELqhw",
    authDomain: "ecommerce1-2c2f3.firebaseapp.com",
    projectId: "ecommerce1-2c2f3",
    storageBucket: "ecommerce1-2c2f3.appspot.com",
    messagingSenderId: "218287483727",
    appId: "1:218287483727:web:49d46183342dcbf8dff33a",
    measurementId: "G-D1HL7GNXQZ"
  };

//initializing firebase app
const firebaseApp = firebase.initializeApp(firebaseConfig);

//initialize database
const db = firebaseApp.firestore();
//initialize authentication
const auth = firebase.auth();

export {db, auth} 


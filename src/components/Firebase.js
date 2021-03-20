import firebase from "firebase";


const firebaseConfig = {
    yourfirebaseconfig
  };

//initializing firebase app
const firebaseApp = firebase.initializeApp(firebaseConfig);

//initialize database
const db = firebaseApp.firestore();
//initialize authentication
const auth = firebase.auth();

export {db, auth} 


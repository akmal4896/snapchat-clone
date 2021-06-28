import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyCeV4DLykqcGSsBP2_ldNatPMYAifph0BA",
    authDomain: "snapchat-clone-9e3fe.firebaseapp.com",
    projectId: "snapchat-clone-9e3fe",
    storageBucket: "snapchat-clone-9e3fe.appspot.com",
    messagingSenderId: "1080359716845",
    appId: "1:1080359716845:web:510aebbf62ae995a52c9e4",
    measurementId: "G-7Y19T09MTS"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();
const storage = firebaseApp.storage();
const provider = new firebase.auth.GoogleAuthProvider();


export { 
    db, 
    auth, 
    storage, 
    provider
};

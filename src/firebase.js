import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
const firebaseConfig = {

    apiKey: "AIzaSyCNVzqY4nhrUyrfh3qhpmBskGkchnw4hW8",

    authDomain: "twitter-clone-2c91a.firebaseapp.com",

    projectId: "twitter-clone-2c91a",

    storageBucket: "twitter-clone-2c91a.appspot.com",

    messagingSenderId: "884418310514",

    appId: "1:884418310514:web:cd17b9a88dfdc03b78adeb",

    measurementId: "G-KGS3PX9X8M"

};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;
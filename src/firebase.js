import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBHy3WgPh3mesQCtBoQ9HBz0cZ3FclWsAs",
    authDomain: "facebook-messenger-evyatar.firebaseapp.com",
    databaseURL: "https://facebook-messenger-evyatar.firebaseio.com",
    projectId: "facebook-messenger-evyatar",
    storageBucket: "facebook-messenger-evyatar.appspot.com",
    messagingSenderId: "460386640530",
    appId: "1:460386640530:web:96330f3319d0413513bc4b",
    measurementId: "G-N305P15QMJ"
});

const db = firebaseApp.firestore();

export default db;


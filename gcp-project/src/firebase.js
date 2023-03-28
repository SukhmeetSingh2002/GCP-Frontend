import firebase from 'firebase/compat/app';
import 'firebase/compat/auth'
import 'firebase/compat/firestore'
import 'firebase/compat/storage';

const fire = firebase.initializeApp({
    apiKey: "AIzaSyBBwKi4tJ1bp4n-MdbSJbLyfC45V-hDND0",
    authDomain: "gcp-project-bb4a4.firebaseapp.com",
    projectId: "gcp-project-bb4a4",
    storageBucket: "gcp-project-bb4a4.appspot.com",
    messagingSenderId: "324186320961",
    appId: "1:324186320961:web:4141d509d92a57654256c0",
})

export const auth = fire.auth();
export const db = firebase.firestore();
export const storage = firebase.storage();
export default fire

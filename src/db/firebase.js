import firebase from 'firebase/app';
import 'firebase/database'
import 'firebase/auth'
import 'firebase/firestore'
import "firebase/storage"

const firebaseConfig = {
    apiKey: "AIzaSyCLvd-_iuMxxNJ0sxDl-f8lgnASSAnGMRM",
    authDomain: "lingua-d6542.firebaseapp.com",
    projectId: "lingua-d6542",
    storageBucket: "lingua-d6542.appspot.com",
    messagingSenderId: "889057676538",
    appId: "1:889057676538:web:f510230a9ce92f350e4d43",
    measurementId: "G-V3DY76RFTL"
  };
 
  firebase.initializeApp(firebaseConfig);
  export const storage = firebase.storage();
  export const db = firebase.firestore();
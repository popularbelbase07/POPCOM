import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
import "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyDwW0UCorQKm0RQWjdk93MC9AyOdpOFpGI",
    authDomain: "popcom-a79c9.firebaseapp.com",
    databaseURL: "https://popcom-a79c9-default-rtdb.firebaseio.com",
    projectId: "popcom-a79c9",
    storageBucket: "popcom-a79c9.appspot.com",
    messagingSenderId: "228811406373",
    appId: "1:228811406373:web:e27422fa05698dde6e13cc",
    measurementId: "G-VN39552SMZ"
  };
firebase.initializeApp(firebaseConfig);

export default firebase;

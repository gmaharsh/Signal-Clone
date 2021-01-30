import *  as firebase from 'firebase';
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAnVbLZyxeHl6rZQkXVS6QkWgdSU3thejo",
  authDomain: "signal-react-native.firebaseapp.com",
  projectId: "signal-react-native",
  storageBucket: "signal-react-native.appspot.com",
  messagingSenderId: "699653242899",
  appId: "1:699653242899:web:15eb7a7f6c73ea3d817fe6",
  measurementId: "G-WCZFKVMZPJ"
};

let app;

if (firebase.app.length === 0) {
    app = firebase.initializeApp(firebaseConfig);
} else {
    app = firebase.app();
}

const db = app.firestore();
const auth = app.auth();

export { db, auth };
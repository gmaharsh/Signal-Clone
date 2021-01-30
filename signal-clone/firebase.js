import * as firebase from 'firebase';
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


const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();

export { db, auth };
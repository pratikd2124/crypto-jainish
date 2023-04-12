
import firebase from 'firebase/compat/app';

import "firebase/compat/database";

const firebaseConfig = {
  apiKey: "AIzaSyDYaWsHJOAM9vy7Zr4h7r8jVr1grBK6Fb4",
  authDomain: "contact-form-fac20.firebaseapp.com",
  databaseURL: "https://contact-form-fac20-default-rtdb.firebaseio.com",
  projectId: "contact-form-fac20",
  storageBucket: "contact-form-fac20.appspot.com",
  messagingSenderId: "238761841301",
  appId: "1:238761841301:web:5d57f70ed4deae3f4e019c"
};

  const fireDb = firebase.initializeApp(firebaseConfig);

  export default fireDb.database().ref();
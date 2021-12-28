  import firebase from 'firebase/compat/app';  
  import 'firebase/compat/storage';
  import 'firebase/compat/firestore';

  var firebaseConfig = {
    apiKey: "AIzaSyBLFY5ZapMDmiy9svML10zH_hQyjxfzZSE",
    authDomain: "photo-gallery-d01a1.firebaseapp.com",
    projectId: "photo-gallery-d01a1",
    storageBucket: "photo-gallery-d01a1.appspot.com",
    messagingSenderId: "374087435500",
    appId: "1:374087435500:web:1a88f6340c5a0e3fd391c9",
    measurementId: "G-HDJJM0HKQW"
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export const projectStorage = firebase.storage();
  export const projectFirestore = firebase.firestore();
  export const timestamp = firebase.firestore.FieldValue.serverTimestamp;

 
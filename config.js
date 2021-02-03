  
import firebase from 'firebase';
require('@firebase/firestore')

var firebaseConfig = {
  apiKey: "AIzaSyCqD9mPR0Gww9DlypBbMZ1SMyTfbWC9D4w",
  authDomain: "book-santa-72d93.firebaseapp.com",
  projectId: "book-santa-72d93",
  storageBucket: "book-santa-72d93.appspot.com",
  messagingSenderId: "390948209892",
  appId: "1:390948209892:web:e27c1d196294fc2c6758f1"
};


// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();                                    
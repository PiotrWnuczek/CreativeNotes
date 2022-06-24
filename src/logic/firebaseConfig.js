import firebase from 'firebase/app';
import 'firebase/analytics';
import 'firebase/firestore';
import 'firebase/auth';

firebase.initializeApp({
  apiKey: 'AIzaSyDvLL7AqMJaIw5Jg6CrhfEzqnRBP_1CuKw',
  authDomain: 'creativenotes-db.firebaseapp.com',
  projectId: 'creativenotes-db',
  storageBucket: 'creativenotes-db.appspot.com',
  messagingSenderId: '669244173601',
  appId: '1:669244173601:web:0d75ce398768507e172260',
  measurementId: 'G-98Y15KYD5G',
});

firebase.analytics();
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase;

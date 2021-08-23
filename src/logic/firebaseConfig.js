import firebase from 'firebase/app';
import 'firebase/analytics';
import 'firebase/firestore';
import 'firebase/auth';

firebase.initializeApp({
  apiKey: 'AIzaSyAwNphJG7ehmxFIRDPIGZepnFKMtFQ0QXg',
  authDomain: 'creative-notebook.firebaseapp.com',
  projectId: 'creative-notebook',
  storageBucket: 'creative-notebook.appspot.com',
  messagingSenderId: '567980262050',
  appId: '1:567980262050:web:b7ede430fa4ae8cea44dfb',
  measurementId: 'G-CPS5HZP9RD',
});

firebase.analytics();
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase;

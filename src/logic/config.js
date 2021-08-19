import firebase from 'firebase/app';
import 'firebase/analytics';
import 'firebase/firestore';
import 'firebase/auth';

firebase.initializeApp({
  apiKey: 'AIzaSyCbyMzDj4bnxURJI6PCHVKV-hz6PG2qU-I',
  authDomain: 'creativenotebook-450e5.firebaseapp.com',
  projectId: 'creativenotebook-450e5',
  storageBucket: 'creativenotebook-450e5.appspot.com',
  messagingSenderId: '664350679572',
  appId: '1:664350679572:web:f8245b38b6e857fdbc3d01',
  measurementId: 'G-XZJ57FCFSB',
});

firebase.analytics();
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase

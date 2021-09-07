import firebase from 'firebase/app';
import 'firebase/analytics';
import 'firebase/firestore';
import 'firebase/auth';

firebase.initializeApp({
  apiKey: 'AIzaSyA6NVtuNlis_SAytnYJZVYo5wCc2N6FGtY',
  authDomain: 'creativenotes-app.firebaseapp.com',
  projectId: 'creativenotes-app',
  storageBucket: 'creativenotes-app.appspot.com',
  messagingSenderId: '486916899257',
  appId: '1:486916899257:web:3855e5717718f8a83bf668',
  measurementId: 'G-LW5EEG920Q',
});

firebase.analytics();
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase;

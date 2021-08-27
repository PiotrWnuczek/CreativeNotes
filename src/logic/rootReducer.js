import authReducer from 'logic/authReducer';
import noteReducer from 'logic/noteReducer';
import { combineReducers } from 'redux';
import { firestoreReducer } from 'redux-firestore';
import { firebaseReducer } from 'react-redux-firebase';

const rootReducer = combineReducers({
  auth: authReducer,
  note: noteReducer,
  firebase: firebaseReducer,
  firestore: firestoreReducer,
});

export default rootReducer;

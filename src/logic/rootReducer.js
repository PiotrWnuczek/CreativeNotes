import authReducer from 'logic/authReducer';
import noteReducer from 'logic/noteReducer';
import { combineReducers } from 'redux';
import { firestoreReducer } from 'redux-firestore';

const rootReducer = combineReducers({
  auth: authReducer,
  note: noteReducer,
  firestore: firestoreReducer,
});

export default rootReducer;

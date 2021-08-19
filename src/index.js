import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
//import { reactReduxFirebase, getFirebase } from 'react-redux-firebase';
//import { reduxFirestore, getFirestore } from 'redux-firestore';
import { persistStore, persistReducer } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';
import storage from 'redux-persist/lib/storage';
//import firebase from 'logic/firebase';
import reducer from 'logic/reducer';
import thunk from 'redux-thunk';
import App from 'App';

const persistConfig = { key: 'root', storage };
const persistedReducer = persistReducer(persistConfig, reducer);

const store = createStore(persistedReducer, compose(
  applyMiddleware(thunk), //applyMiddleware(thunk.withExtraArgument({ getFirebase, getFirestore })),
  //reactReduxFirebase(firebase, { userProfile: 'users', useFirestoreForProfile: true, attachAuthIsReady: true }),
  //reduxFirestore(firebase),
));

const persistor = persistStore(store);

//store.firebaseAuthIsReady.then(() => {
ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>,
  document.getElementById('root'),
);
//});

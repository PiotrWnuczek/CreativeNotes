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
import rootReducer from 'logic/rootReducer';
import thunk from 'redux-thunk';
import Root from 'layout/Root';

const persistConfig = { key: 'root', storage };
const persistedReducer = persistReducer(persistConfig, rootReducer);

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
      <Root />
    </PersistGate>
  </Provider>,
  document.getElementById('root'),
);
//});

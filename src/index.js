import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import { getFirebase, ReactReduxFirebaseProvider } from 'react-redux-firebase';
import { getFirestore, createFirestoreInstance } from 'redux-firestore';
import firebaseConfig from 'logic/firebaseConfig';
import rootReducer from 'logic/rootReducer';
import thunk from 'redux-thunk';
import Root from 'layout/Root';

const store = createStore(rootReducer, compose(
  applyMiddleware(thunk.withExtraArgument({ getFirebase, getFirestore })),
));

const rrfConfig = {
  userProfile: 'users',
  useFirestoreForProfile: true,
  attachAuthIsReady: true,
};

const rrfProps = {
  firebase: firebaseConfig,
  config: rrfConfig,
  dispatch: store.dispatch,
  createFirestoreInstance,
};

ReactDOM.render(
  <ReactReduxFirebaseProvider {...rrfProps}>
    <Provider store={store}>
      <Root />
    </Provider>
  </ReactReduxFirebaseProvider>,
  document.getElementById('root'),
);

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { useSelector } from 'react-redux';
import { isLoaded } from 'react-redux-firebase';
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

const AuthIsLoaded = ({ children }) => {
  const auth = useSelector(state => state.firebase.auth);
  return isLoaded(auth) ? children : <p className='text-center'>loading...</p>;
};

ReactDOM.render(
  <ReactReduxFirebaseProvider {...rrfProps}>
    <Provider store={store}>
      <AuthIsLoaded>
        <Root />
      </AuthIsLoaded>
    </Provider>
  </ReactReduxFirebaseProvider>,
  document.getElementById('root'),
);

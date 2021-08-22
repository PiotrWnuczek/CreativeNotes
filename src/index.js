import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import { getFirebase, reactReduxFirebase } from 'react-redux-firebase';
import { getFirestore, reduxFirestore } from 'redux-firestore';
import firebaseConfig from 'logic/firebaseConfig';
import rootReducer from 'logic/rootReducer';
import thunk from 'redux-thunk';
import Root from 'layout/Root';

const store = createStore(rootReducer, compose(
  applyMiddleware(thunk.withExtraArgument({ getFirebase, getFirestore })),
  reactReduxFirebase(firebaseConfig),
  reduxFirestore(firebaseConfig),
));

ReactDOM.render(
  <Provider store={store}>
    <Root />
  </Provider>,
  document.getElementById('root'),
);

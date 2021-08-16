import React from 'react';
import { createGlobalStyle } from 'styled-components';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from 'logic/store';
import { BrowserRouter, Switch } from 'react-router-dom';
import { Route, Redirect } from 'react-router-dom';
import Main from 'views/Main';
import firebase from "firebase/app";
import "firebase/analytics";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCbyMzDj4bnxURJI6PCHVKV-hz6PG2qU-I",
  authDomain: "creativenotebook-450e5.firebaseapp.com",
  projectId: "creativenotebook-450e5",
  storageBucket: "creativenotebook-450e5.appspot.com",
  messagingSenderId: "664350679572",
  appId: "1:664350679572:web:f8245b38b6e857fdbc3d01",
  measurementId: "G-XZJ57FCFSB"
};

firebase.initializeApp(firebaseConfig);
firebase.analytics();

<link href='https://fonts.googleapis.com/css2?family=Lato:wght@400;700' />

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    color: #555555;
    background: #fcfcfc;
    font-family: 'Lato';
  }
`;

const Root = () => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <BrowserRouter>
        <GlobalStyle />
        <Switch>
          <Route exact path='/' render={() => <Redirect to='/start' />} />
          <Route exact path='/start'><Main /></Route>
        </Switch>
      </BrowserRouter>
    </PersistGate>
  </Provider>
);

export default Root;

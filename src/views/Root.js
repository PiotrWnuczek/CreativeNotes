import React from 'react';
import { createGlobalStyle } from 'styled-components';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from 'logic/store';
import { BrowserRouter, Switch } from 'react-router-dom';
import { Route, Redirect } from 'react-router-dom';
import Main from 'views/Main';

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

import React from 'react';
import { createGlobalStyle } from 'styled-components';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Topbar from 'blocks/Topbar';
import Notes from 'layout/Notes';
import Create from 'layout/Create';
import Details from 'layout/Details';
import Signin from 'auth/Signin';
import Signup from 'auth/Signup';
import 'bootstrap/dist/css/bootstrap.min.css';
<link href='https://fonts.googleapis.com/css2?family=Lato:wght@400;700' />

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: 'Lato';
  }
`;

const Root = () => (
  <BrowserRouter>
    <GlobalStyle />
    <Topbar />
    <Switch>
      <Route exact path='/' component={Notes} />
      <Route path='/create' component={Create} />
      <Route path='/notes/:id' component={Details} />
      <Route path='/signin' component={Signin} />
      <Route path='/signup' component={Signup} />
    </Switch>
  </BrowserRouter>
);

export default Root;

import React from 'react';
import { createGlobalStyle } from 'styled-components';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Menu from 'blocks/Menu';
import Notes from 'layout/Notes';
import Create from 'layout/Create';
import Details from 'layout/Details';
import Private from 'auth/Private';
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
    <Menu />
    <Switch>
      <Private exact path='/'><Notes /></Private>
      <Private path='/create'><Create /></Private>
      <Private path='/notes/:id'><Details /></Private>
      <Route path='/signin'><Signin /></Route>
      <Route path='/signup'><Signup /></Route>
    </Switch>
  </BrowserRouter>
);

export default Root;

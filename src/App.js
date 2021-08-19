import React from 'react';
import { createGlobalStyle } from 'styled-components';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from 'blocks/Navbar';
import Notes from 'layout/Notes';
import 'bootstrap/dist/css/bootstrap.min.css';
<link href='https://fonts.googleapis.com/css2?family=Lato:wght@400;700' />

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    color: #555555;
    background: #fcfcfc;
    font-family: 'Lato';
  }
  h1, h2, h3, p {
    margin: 0;
    padding: 0;
  }
`;

const Root = () => (
  <BrowserRouter>
    <GlobalStyle />
    <Navbar />
    <Switch>
      <Route exact path='/' component={Notes} />
    </Switch>
  </BrowserRouter>
);

export default Root;
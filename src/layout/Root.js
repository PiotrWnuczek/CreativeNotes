import React from 'react';
import { createGlobalStyle } from 'styled-components';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Menu from 'blocks/Menu';
import Panel from 'layout/Panel';
import Create from 'layout/Create';
import Details from 'layout/Details';
import Protect from 'auth/Protect';
import Signin from 'auth/Signin';
import Signup from 'auth/Signup';
import 'bootstrap/dist/css/bootstrap.min.css';
<link href='https://fonts.googleapis.com/css2?family=Lato:wght@400;700' />

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0; padding: 0;
    font-family: 'Lato';
    overflow-x: hidden;
  }
  .pointer {
    cursor: pointer;
  }
`;

const Root = () => (
  <BrowserRouter basename={process.env.PUBLIC_URL}>
    <GlobalStyle />
    <Menu />
    <Switch>
      <Protect exact path='/' component={Panel} />
      <Protect path='/create' component={Create} />
      <Protect path='/:type/:id' component={Details} />
      <Route path='/signin' component={Signin} />
      <Route path='/signup' component={Signup} />
    </Switch>
  </BrowserRouter>
);

export default Root;

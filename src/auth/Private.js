import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { isLoaded, isEmpty } from 'react-redux-firebase';

const Private = ({ children, ...rest }) => {
  const auth = useSelector(state => state.firebase.auth);
  return (
    <Route {...rest}
      render={() => isLoaded(auth) && !isEmpty(auth) ?
        children : <Redirect to='/signin' />
      }
    />
  )
};

export default Private;

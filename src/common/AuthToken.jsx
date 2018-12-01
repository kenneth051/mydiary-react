import React from 'react';
import decode from 'jwt-decode';
import { Route, Redirect } from 'react-router-dom';

const AuthenticateToken = () => {
  const token = localStorage.getItem('token');
  if (!token) {
    return false;
  }
  const { expdate } = decode(token);
  if (expdate < new Date().getTime() / 1000) {
    return false;
  }
  return true;
};

const ProtectedRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props => (
      AuthenticateToken() ? (
    <Component {...props} />
  ) : (<Redirect to={{ pathname: '/' }} />)
)}
  />
);

export default ProtectedRoute;

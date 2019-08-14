import React from 'react';
import { Redirect } from 'react-router-dom';
import Cookies from 'js-cookie';

const RequireAuth = () => {
  if (!Cookies.get('token')) return <Redirect to="/" />;
  return true;
};

export default RequireAuth;

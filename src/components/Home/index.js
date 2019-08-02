import React from 'react';
import { Link } from 'react-router-dom';
import Logged from 'components/Logged';
import Cookies from 'js-cookie';

export default () => {
  if (!Cookies.get('token')) {
    return (
      <div>
        <h5 className="page-head-title">Welcome, stranger!</h5>
        <div className="container">
          <div>
            <Link to="/login">Login</Link>
          </div>
          <div>
            <Link to="/register">Register</Link>
          </div>
          <div>
            <Link to="/forget_password">Forget Password?</Link>
          </div>
        </div>
      </div>
    );
  }
  return <Logged />;
};

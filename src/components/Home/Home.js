import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import checkAuth from 'helpers/checkAuth';

const Home = () => {
  if (checkAuth()) return <Redirect to="/logged" />;

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
};

export default Home;

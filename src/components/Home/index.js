import React from 'react';
import { Link } from 'react-router-dom';

export default () => {
  return (
    <div>
      <h5 className="page-head-title">Welcome dude!</h5>
      <div className="container">
        <div>
          <Link to="/register">Register</Link>
        </div>
        <div>
          <Link to="/login">Login</Link>
        </div>
      </div>
    </div>
  );
};

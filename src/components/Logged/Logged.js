import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import Cookies from 'js-cookie';
import checkAuth from 'helpers/checkAuth';

const Logged = props => {
  console.log(props);

  if (!checkAuth()) return <Redirect to="/" />;

  const handleLogout = () => {
    Cookies.remove('token');
    props.history.push('/');
  };

  return (
    <div className="center">
      <h5 className="page-head-title">
        Welcome!
        <br />
        You've logged in!
      </h5>

      <Link to="/change_password">Change password</Link>
      <br />
      <button type="button" onClick={handleLogout}>
        Log out
      </button>
    </div>
  );
};

export default Logged;

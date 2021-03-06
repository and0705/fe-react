import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import Cookies from 'js-cookie';
import checkAuth from 'helpers/checkAuth';

const Logged = props => {
  if (!checkAuth()) return <Redirect to="/" />;

  const handleLogout = () => {
    Cookies.remove('token');
    // eslint-disable-next-line
    props.history.push('/');
  };

  return (
    <div className="center">
      <h5 className="page-head-title">
        Welcome!
        <br />
        You&apos;ve logged in!
      </h5>

      <Link to="/change_password">Change password</Link>

      <button className="button is-block is-info" type="button" onClick={handleLogout}>
        Log out
      </button>
    </div>
  );
};

export default Logged;

import React from 'react';
import { Link } from 'react-router-dom';
import { Redirect } from 'react-router';
import Cookies from 'js-cookie';

export default props => {
  console.log(props);
  return (
    <div className="center">
      <h5 className="page-head-title">
        Welcome dude!
        <br />
        You've logged in!
      </h5>

      <Link to="/change_password">Change password</Link>
      <br />
      {/* eslint-disable-next-line */}
      <Link onClick={() => Cookies.remove('token')}>Log out</Link>
    </div>
  );
};

import React from 'react';
import Cookies from 'js-cookie';
import Home from 'components/Home';

export default () => {
  Cookies.remove('token');
  if (Cookies.get('token')) {
    //   if (true) {
    return (
      <div className="center">
        <h5 className="page-head-title">Logging out...</h5>
      </div>
    );
  }
  return <Home />;
};

// 追光者

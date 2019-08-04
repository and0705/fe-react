// import React from 'react';
import Cookies from 'js-cookie';

export default () => {
  if (Cookies.get('token')) {
    return true;
  }
  console.log('vl');
  return false;
};

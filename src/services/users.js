// @flow
// import { BrowserRouter } from 'react-router-dom';
import { requestServices } from 'services';
import { Link, withRouter } from 'react-router-dom';
// import Cookies from 'js-cookie';

const fetchUsers = () => requestServices.customAxios.get('/').then(res => res.data);

// Cookies.set('name', 'value', { expires: 1 / 48, path: '' });

const login = data => {
  requestServices.customAxios.post('users/login', data).then(res => {
    console.log(res.data.token);
    sessionStorage.setItem('token', res.data.token);
  });
  console.log(sessionStorage.getItem('token'));
};

const register = data => {
  requestServices.customAxios.post('users/register', data).then(res => {
    console.log(res.data.Successful);
  });
};

const forgetPassword = data => {
  requestServices.customAxios.post('users/forget_password', data).then(res => {
    console.log(res.data.verification_link);
    this.props.history.push('/login');
  });
};

const changePassword = data => {
  requestServices.customAxios.post('users/change_password', data).then(res => {
    console.log(res);
  });
};

export default {
  login,
  register,
  forgetPassword,
  changePassword,
  fetchUsers,
};

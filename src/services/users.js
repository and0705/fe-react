// @flow
import { requestServices } from 'services';
import Cookies from 'js-cookie';
import history from '../history';

const fetchUsers = () => requestServices.customAxios.get('/').then(res => res.data);

const login = data => {
  // sessionStorage.clear();
  requestServices.customAxios.post('users/login', data).then(res => {
    Cookies.set('token', res.data.token, { expires: 1 / 48, path: '' });
    history.push('/logged');
    console.log('token got: ', Cookies.get('token'));
  });
};

const register = data => {
  requestServices.customAxios.post('users/register', data).then(res => {
    console.log(res.data.Successful);
  });
};

const forgetPassword = data => {
  requestServices.customAxios.post('users/forget_password', data).then(res => {
    console.log(res.data.verification_link);
    // this.props.history.push('/login');
  });
};

const changePassword = data => {
  // console.log(sessionStorage.token);
  console.log('Cookies token: ', Cookies.get('token'));
  console.log(data);
  requestServices.customAxios
    .post('users/change_password', data, {
      headers: {
        Authorization: 'Bearer ' + Cookies.get('token'),
      },
    })
    .then(res => {
      console.log(res.data.password_changed);
      console.log(res);
    });
};

const logout = data => {
  Cookies.remove('token');

  requestServices.customAxios
    .get('users/logout', data)
    .then(res => {
      console.log(res);
      // sessionStorage.clear();
    })
    .then(() => history.push('/'));
};

export default {
  fetchUsers,
  login,
  register,
  forgetPassword,
  changePassword,
  logout,
};

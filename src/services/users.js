// @flow
import { requestServices } from 'services';
import Cookies from 'js-cookie';

const fetchUsers = () => requestServices.customAxios.get('/').then(res => res.data);

const login = data => {
  return requestServices.customAxios.post('users/login', data);
};

const register = data => {
  requestServices.customAxios.post('users/register', data).then(res => {
    console.log(res.data.Successful);
  });
};

const forgetPassword = data => {
  requestServices.customAxios.post('users/forget_password', data).then(res => {
    console.log(res.data.verification_link);
    // history.push('/login');
  });
};

const changePassword = data => {
  console.log(data);
  return requestServices.customAxios.post('users/change_password', data, {
    headers: {
      Authorization: 'Bearer ' + Cookies.get('token'),
    },
  });
};

const logout = data => {
  Cookies.remove('token');

  requestServices.customAxios.get('users/logout', data).then(res => {
    console.log(res);
    // history.push('/home');
  });
};

export default {
  fetchUsers,
  login,
  register,
  forgetPassword,
  changePassword,
  logout,
};

// @flow
import { requestServices } from 'services';
import Cookies from 'js-cookie';

const fetchUsers = () => requestServices.customAxios.get('/').then(res => res.data);

const login = data => {
  return requestServices.customAxios.post('users/login', data);
};

const register = data => {
  return requestServices.customAxios.post('users/register', data);
};

const forgetPassword = data => {
  return requestServices.customAxios.post('users/forget_password', data);
};

const changePassword = data => {
  return requestServices.customAxios.post('users/change_password', data, {
    headers: {
      Authorization: `Bearer ${Cookies.get('token')}`,
    },
  });
};

const logout = data => {
  Cookies.remove('token');

  requestServices.customAxios.get('users/logout', data);
};

export default {
  fetchUsers,
  login,
  register,
  forgetPassword,
  changePassword,
  logout,
};

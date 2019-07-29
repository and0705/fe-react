// @flow
import { BrowserRouter } from 'react-router-dom';
import { requestServices } from 'services';

const fetchUsers = () => requestServices.customAxios.get('/').then(res => res.data);

// const login = params => {
//  requestServices.customAxios
//     .post('/users/login')
//     .then(res => {
//       console.log(res)
//       return res.data
//     })

// }

const login = params => {
  requestServices.customAxios.post('users/login', params).then(res => {
    console.log(res);
  });

  // .push('/test');

  // console.log('submit ok')
};

const register = data => {
  requestServices.customAxios.post('users/register', data).then(res => {
    console.log(res);
  });
};

export default {
  login,
  register,
  fetchUsers,
};

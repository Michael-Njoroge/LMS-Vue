import {api as axios} from '../../axios';

export const login = (data) => {
  return axios.post('/login', data);
};

export const logout = () => {
  return axios.post('/logout');
};


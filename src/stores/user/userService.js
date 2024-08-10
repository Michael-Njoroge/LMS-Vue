import {api as axios} from '../../axios';

export const getUsers = () => {
  return axios.get('/users');
};

export const getUser= (id) => {
  return axios.get(`/users/${id}`);
};

export const updateProfile= (data) => {
  return axios.get(`/users/${data.id}`,data.userData);
};


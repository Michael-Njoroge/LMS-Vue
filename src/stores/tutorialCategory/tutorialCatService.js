import {api as axios} from '../../axios';

export const getTutCats = () => {
  return axios.get('/tutorial/category');
};

export const getTutCat = (id) => {
  return axios.get(`/tutorial/category/${id}`);
};

export const addTutCategory = (data) => {
  return axios.post('/tutorial/category', data);
};

export const updateTutCategory = (data) => {
  return axios.put(`/tutorial/category/${data.id}`, {title:data.title});
};

export const deleteTutCat = (id) => {
  return axios.delete(`/tutorial/category/${id}`);
};


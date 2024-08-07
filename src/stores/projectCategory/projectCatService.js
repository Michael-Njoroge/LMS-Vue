import {api as axios} from '../../axios';

export const getProjectCats = () => {
  return axios.get('/projects-category');
};

export const getProjectCat = (id) => {
  return axios.get(`/projects-category/${id}`);
};

export const addProjectCat = (data) => {
  return axios.post('/projects-category', data);
};

export const updateProjectCat = (data) => {
  return axios.put(`/projects-category/${data.id}`, {title:data.title});
};

export const deleteProjectCat = (id) => {
  return axios.delete(`/projects-category/${id}`);
};


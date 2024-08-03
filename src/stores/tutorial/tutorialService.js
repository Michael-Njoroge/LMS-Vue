import {api as axios} from '../../axios';

export const getTutorials = () => {
  return axios.get('/tutorials');
};

export const getTutorial = (id) => {
  return axios.get(`/tutorials/${id}`);
};


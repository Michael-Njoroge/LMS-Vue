import {api as axios} from '../../axios';

export const getTutorials = () => {
  return axios.get('/tutorials');
};

export const getTutorial = (id) => {
  return axios.get(`/tutorials/${id}`);
};

export const addTutorial = (data) => {
  return axios.post('/tutorials', data);
};

export const updateTutorial = (data) => {
  return axios.put(`/tutorials/${data.id}`, {
    title:data.title,
    topic_name:data.topic_name,
    category:data.category,
    keywords:data.keywords,
    content:data.content
  });
};

export const deleteTutorial = (id) => {
  return axios.delete(`/tutorials/${id}`);
};


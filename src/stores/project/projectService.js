import {api as axios} from '../../axios';

export const getProjects = () => {
  return axios.get('/projects');
};

export const getProject = (id) => {
  return axios.get(`/projects/${id}`);
};

export const addProject = (data) => {
  return axios.post('/projects', data);
};

export const updateProject = (data) => {
  return axios.put(`/projects/${data.id}`, {
    title:data.title,
    price:data.price,
    category_id:data.category_id,
    keywords:data.keywords,
    links:data.links,
    images:data.images,
    tech_stack:data.tech_stack,
    description:data.description,
  });
};

export const deleteProject = (id) => {
  return axios.delete(`/projects/${id}`);
};


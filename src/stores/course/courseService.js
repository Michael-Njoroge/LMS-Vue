import {api as axios} from '../../axios';

export const getCourses = () => {
  return axios.get('/courses');
};

export const getCourse = (id) => {
  return axios.get(`/courses/${id}`);
};


import axios from 'axios';

const apiUrl = process.env.VUE_APP_API_URL;

export const api = axios.create({
  baseURL: apiUrl
});

api.interceptors.request.use(
  config => {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user && user.token) {
      config.headers.Authorization = `Bearer ${user.token}`;
    }
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);


import {api as axios} from '../../axios';

export const register = (data) => {
  return axios.post('/register', data);
};

export const login = (data) => {
  return axios.post('/login', data);
};

export const forgot = (data) => {
  return axios.post('/forgot-password', data);
};

export const reset = (data) => {
  return axios.post('/reset-password', data);
};

export const resendVerification = (data) => {
  return axios.post('/email/resend', data);
};

export const emailVerification = (data) => {
  return axios.get(`/email/verify/${data.id}/${data.hash}?expires=${data.expires}&signature=${data.signature}`);
};

export const logout = () => {
  return axios.post('/logout');
};


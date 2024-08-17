import {api as axios} from '../../axios';

export const register = (data) => {
  return axios.post('/register', data);
};

export const login = (data) => {
  return axios.post('/login', data);
};

export const loginHistory = () => {
  return axios.get('/login/history');
};

export const forgot = (data) => {
  return axios.post('/forgot-password', data);
};

export const reset = (data) => {
  return axios.post('/reset-password', data);
};

export const updatePassword = (data) => {
  return axios.put('/users/update/password', data);
};

export const resendVerification = (data) => {
  return axios.post('/email/resend', data);
};

export const enable2FA = () => {
  return axios.post('/2fa/prepare');
};

export const emailVerification = (data) => {
  return axios.get(`/email/verify/${data.id}/${data.hash}?expires=${data.expires}&signature=${data.signature}`);
};

export const logout = () => {
  return axios.post('/logout');
};

export const redirect = (provider) => {
  return axios.get(`/redirect/${provider}`);
};

export const callback = ({ code, provider }) => {
  return axios.post(`/callback/${provider}`, {code: code});
};


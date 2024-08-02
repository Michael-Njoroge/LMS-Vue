import { register as registerService,login as loginService, logout as logoutService } from './authService';
import { useToast } from 'vue-toastification';

const toast = useToast();

export const auth = {
  namespaced: true,
  state() {
    return {
      isLoggedIn: false,
      user: null,
      isLoading: false,
      isError: false,
      isSuccess: false,
      message: '',
    };
  },
  getters: {
    isLoggedIn: (state) => state.isLoggedIn,
    user: (state) => state.user,
    isLoading: (state) => state.isLoading,
    isError: (state) => state.isError,
    isSuccess: (state) => state.isSuccess,
    message: (state) => state.message,
  },

   mutations: {
    setLoading(state, isLoading) {
      state.isLoading = isLoading;
    },
    setError(state, isError) {
      state.isError = isError;
    },
    setSuccess(state, isSuccess) {
      state.isSuccess = isSuccess;
    },
    setMessage(state, message) {
      state.message = message;
    },
    login(state, user) {
      state.isLoggedIn = true;
      state.user = user;
    },
    register(state, user) {
      state.isRegistered = true;
      state.user = user;
    },
    logout(state) {
      state.isLoggedIn = false;
      state.user = null;
    },
  },

  actions: {
    async register({ commit }, data) {
      commit('setLoading', true);
      commit('setError', false);
      commit('setSuccess', false);
      try {
        const response = await registerService(data);
        const user = response.data.data;
        commit('register', user);
        commit('setSuccess', true);
        commit('setMessage', response?.data?.message || 'Registered successfully');
        toast.info(response?.data?.message || 'Registered successfully');
        localStorage.setItem('user',JSON.stringify({
          id: response.data.data?.id,
          firstname: response.data.data?.firstname,
          lastname: response.data.data?.lastname,
          mobile: response.data.data?.mobile,
          email: response.data.data?.email,
          token: response.data.data?.token
        }))
      } catch (error) {
        commit('setError', true);
        commit('setMessage', error.response?.data?.message || 'Login failed');
        toast.error(error.response?.data?.message || 'Login failed');
      } finally {
        commit('setLoading', false);
      }
    },
    async login({ commit }, data) {
      commit('setLoading', true);
      commit('setError', false);
      commit('setSuccess', false);
      try {
        const response = await loginService(data);
        const user = response.data.data;
        commit('login', user);
        commit('setSuccess', true);
        commit('setMessage', response?.data?.message || 'Login successfully');
        toast.info(response?.data?.message || 'Login successfully');
        localStorage.setItem('user',JSON.stringify({
          id: response.data.data?.id,
          firstname: response.data.data?.firstname,
          lastname: response.data.data?.lastname,
          mobile: response.data.data?.mobile,
          email: response.data.data?.email,
          token: response.data.data?.token
        }))
      } catch (error) {
        commit('setError', true);
        commit('setMessage', error.response?.data?.message || 'Login failed');
        toast.error(error.response?.data?.message || 'Login failed');
      } finally {
        commit('setLoading', false);
      }
    },
    async logout({ commit }) {
      commit('setLoading', true);
      commit('setError', false);
      commit('setSuccess', false);
      try {
        const response = await logoutService();
        commit('logout');
        commit('setSuccess', true);
        commit('setMessage', response?.data?.message || 'See you!');
        toast.info(response?.data?.message || 'See you!');
      } catch (error) {
        commit('setError', true);
        commit('setMessage', error.response?.data?.message || 'Logout failed');
      } finally {
        commit('setLoading', false);
      }
    },
  },
};

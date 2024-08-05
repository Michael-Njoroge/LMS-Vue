import { getUsers as getUsersService, getUser as getUserService } from './userService';
import { useToast } from 'vue-toastification';

const toast = useToast();

export const users = {
  namespaced: true,
  state() {
    return {
      getUsers: [],
      getUser: {},
      isLoading: false,
      isError: false,
      isSuccess: false,
      message: '',
    };
  },
  getters: {
    getUsers: (state) => state.getUsers,
    getUser: (state) => state.getUser,
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
    getUsers(state, getUsers) {
      state.getUsers = getUsers;
    },
     getUser(state, getUser) {
      state.getUser = getUser;
    },
  },

  actions: {
    async getUsers({ commit }) {
      commit('setLoading', true);
      commit('setError', false);
      commit('setSuccess', false);
      try {
        const response = await getUsersService();
        const users = response.data.data;
        commit('getUsers', users);
        commit('setSuccess', true);
        commit('setMessage', response?.data?.message || 'Users  retrieved successfully');
      } catch (error) {
        commit('setError', true);
        commit('setMessage', error.response?.data?.message || 'Failed to get users');
        toast.error(error.response?.data?.message || 'Failed to get users');
      } finally {
        commit('setLoading', false);
      }
    },
    async getUser({ commit }) {
      commit('setLoading', true);
      commit('setError', false);
      commit('setSuccess', false);
      try {
        const response = await getUserService();
        const user = response.data.data;
        commit('getUser', user);
        commit('setSuccess', true);
        commit('setMessage', response?.data?.message || 'User  retrieved successfully');
      } catch (error) {
        commit('setError', true);
        commit('setMessage', error.response?.data?.message || 'Failed to get user');
        toast.error(error.response?.data?.message || 'Failed to get user');
      } finally {
        commit('setLoading', false);
      }
    },
  },
};

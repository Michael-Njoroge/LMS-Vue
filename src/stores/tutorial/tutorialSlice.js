import { getTutorials as getTutorialsService, getTutorial as getTutorialService } from './tutorialService';
import { useToast } from 'vue-toastification';

const toast = useToast();

export const tutorials = {
  namespaced: true,
  state() {
    return {
      getTutorials: [],
      getTutorial: {},
      isLoading: false,
      isError: false,
      isSuccess: false,
      message: '',
    };
  },
  getters: {
    getTutorials: (state) => state.getTutorials,
    getTutorial: (state) => state.getTutorial,
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
    getTutorials(state, getTutorials) {
      state.getTutorials = getTutorials;
    },
     getTutorial(state, getTutorial) {
      state.getTutorial = getTutorial;
    },
  },

  actions: {
    async getTutorials({ commit }) {
      commit('setLoading', true);
      commit('setError', false);
      commit('setSuccess', false);
      try {
        const response = await getTutorialsService();
        const tutorials = response.data.data;
        commit('getTutorials', tutorials);
        commit('setSuccess', true);
        commit('setMessage', response?.data?.message || 'Tutorials retrieved successfully');
        toast.success(response?.data?.message || 'Tutorials retrieved successfully');
      } catch (error) {
        commit('setError', true);
        commit('setMessage', error.response?.data?.message || 'Failed to get tutorials');
        toast.error(error.response?.data?.message || 'Failed to get tutorials');
      } finally {
        commit('setLoading', false);
      }
    },
    async getTutorial({ commit },data) {
      commit('setLoading', true);
      commit('setError', false);
      commit('setSuccess', false);
      try {
        const response = await getTutorialService(data);
        const tutorial = response.data.data;
        commit('getTutorial', tutorial);
        commit('setSuccess', true);
        commit('setMessage', response?.data?.message || 'Tutorial retrieved successfully');
        toast.success(response?.data?.message || 'Tutorial retrieved successfully');
      } catch (error) {
        commit('setError', true);
        commit('setMessage', error.response?.data?.message || 'Failed to get tutorial');
        toast.error(error.response?.data?.message || 'Failed to get tutorial');
      } finally {
        commit('setLoading', false);
      }
    },
  },
};

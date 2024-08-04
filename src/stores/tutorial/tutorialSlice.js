import { 
  getTutorials as getTutorialsService,
  getTutorial as getTutorialService, 
  addTutorial as addTutorialService, 
  updateTutorial as updateTutorialService, 
  deleteTutorial as deleteTutorialService, 
} from './tutorialService';
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
    addTutorial(state, addTutorial) {
      state.addTutorial = addTutorial;
    },
    deleteTutorial(state, deleteTutorial) {
      state.deleteTutorial = deleteTutorial;
    },
    updateTutorial(state, updateTutorial) {
      state.updateTutorial = updateTutorial;
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

     async addTutorial({ commit },data) {
      commit('setLoading', true);
      commit('setError', false);
      commit('setSuccess', false);
      try {
        const response = await addTutorialService(data);
        const addTutorial = response.data.data;
        commit('addTutorial', addTutorial);
        commit('setSuccess', true);
        commit('setMessage', response?.data?.message || 'Tutorial added successfully');
        toast.success(response?.data?.message || 'Tutorial added successfully');
      } catch (error) {
        commit('setError', true);
        commit('setMessage', error.response?.data?.message || 'Failed to add tutorial');
        toast.error(error.response?.data?.message || 'Failed to add tutorial');
      } finally {
        commit('setLoading', false);
      }
    },

    async updateTutorial({ commit },data) {
      commit('setLoading', true);
      commit('setError', false);
      commit('setSuccess', false);
      try {
        const response = await updateTutorialService(data);
        const updateTutorial = response.data.data;
        commit('updateTutorial', updateTutorial);
        commit('setSuccess', true);
        commit('setMessage', response?.data?.message || 'Tutorial updated successfully');
        toast.success(response?.data?.message || 'Tutorial updated successfully');
      } catch (error) {
        commit('setError', true);
        commit('setMessage', error.response?.data?.message || 'Failed to update tutorial');
        toast.error(error.response?.data?.message || 'Failed to update tutorial');
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

    async deleteTutorial({ commit },data) {
      commit('setLoading', true);
      commit('setError', false);
      commit('setSuccess', false);
      try {
        const response = await deleteTutorialService(data);
        const deleteTutorial = response.data.data;
        commit('deleteTutorial', deleteTutorial);
        commit('setSuccess', true);
        commit('setMessage', response?.data?.message || 'Tutorial deleted successfully');
        toast.success(response?.data?.message || 'Tutorial deleted successfully');
      } catch (error) {
        commit('setError', true);
        commit('setMessage', error.response?.data?.message || 'Failed to delete tutorial');
        toast.error(error.response?.data?.message || 'Failed to delete tutorial');
      } finally {
        commit('setLoading', false);
      }
    },
  },
};

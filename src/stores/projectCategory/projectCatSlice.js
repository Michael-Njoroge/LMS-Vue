import { 
  getProjectCats as getProjectCatsService, 
  getProjectCat as getProjectCatService, 
  addProjectCat as addProjectCatService ,
  deleteProjectCat as deleteProjectCatService ,
  updateProjectCat as updateProjectCatService ,
} from './projectCatService';
import { useToast } from 'vue-toastification';

const toast = useToast();

export const projectCategories = {
  namespaced: true,
  state() {
    return {
      getProjectCats: [],
      isLoading: false,
      isError: false,
      isSuccess: false,
      message: '',
    };
  },
  getters: {
    getProjectCats: (state) => state.getProjectCats,
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
    getProjectCats(state, getProjectCats) {
      state.getProjectCats = getProjectCats;
    },
     getProjectCat(state, getProjectCat) {
      state.getProjectCat = getProjectCat;
    },
    addProjectCat(state, addProjectCat) {
      state.addProjectCat = addProjectCat;
    },
    deleteProjectCat(state, deleteProjectCat) {
      state.deleteProjectCat = deleteProjectCat;
    },
    updateProjectCat(state, updateProjectCat) {
      state.updateProjectCat = updateProjectCat;
    },
  },

  actions: {
    async getProjectCats({ commit }) {
      commit('setLoading', true);
      commit('setError', false);
      commit('setSuccess', false);
      try {
        const response = await getProjectCatsService();
        const ProjectCategories = response.data.data;
        commit('getProjectCats', ProjectCategories);
        commit('setSuccess', true);
        commit('setMessage', response?.data?.message || 'Project Categories retrieved successfully');
      } catch (error) {
        commit('setError', true);
        commit('setMessage', error.response?.data?.message || 'Failed to get Project categories');
        toast.error(error.response?.data?.message || 'Failed to get Project categories');
      } finally {
        commit('setLoading', false);
      }
    },
    async getProjectCat({ commit },data) {
      commit('setLoading', true);
      commit('setError', false);
      commit('setSuccess', false);
      try {
        const response = await getProjectCatService(data);
        const ProjectCategory = response.data.data;
        commit('getProjectCat', ProjectCategory);
        commit('setSuccess', true);
        commit('setMessage', response?.data?.message || 'Project Category retrieved successfully');
      } catch (error) {
        commit('setError', true);
        commit('setMessage', error.response?.data?.message || 'Failed to get Project category');
        toast.error(error.response?.data?.message || 'Failed to get Project category');
      } finally {
        commit('setLoading', false);
      }
    },
    async addProjectCat({ commit },data) {
      commit('setLoading', true);
      commit('setError', false);
      commit('setSuccess', false);
      try {
        const response = await addProjectCatService(data);
        const addProjectCat = response.data.data;
        commit('addProjectCat', addProjectCat);
        commit('setSuccess', true);
        commit('setMessage', response?.data?.message || 'Project Category added successfully');
        toast.success(response?.data?.message || 'Project Category added successfully');
      } catch (error) {
        commit('setError', true);
        commit('setMessage', error.response?.data?.message || 'Failed to add Project category');
        toast.error(error.response?.data?.message || 'Failed to add Project category');
      } finally {
        commit('setLoading', false);
      }
    },

    async updateProjectCat({ commit },data) {
      commit('setLoading', true);
      commit('setError', false);
      commit('setSuccess', false);
      try {
        const response = await updateProjectCatService(data);
        const updateProjectCat = response.data.data;
        commit('updateProjectCat', updateProjectCat);
        commit('setSuccess', true);
        commit('setMessage', response?.data?.message || 'Project Category updated successfully');
        toast.success(response?.data?.message || 'Project Category updated successfully');
      } catch (error) {
        commit('setError', true);
        commit('setMessage', error.response?.data?.message || 'Failed to update Project category');
        toast.error(error.response?.data?.message || 'Failed to update Project category');
      } finally {
        commit('setLoading', false);
      }
    },

    async deleteProjectCat({ commit },data) {
      commit('setLoading', true);
      commit('setError', false);
      commit('setSuccess', false);
      try {
        const response = await deleteProjectCatService(data);
        const deleteProjectCat = response.data.data;
        commit('deleteProjectCat', deleteProjectCat);
        commit('setSuccess', true);
        commit('setMessage', response?.data?.message || 'Project Category deleted successfully');
        toast.success(response?.data?.message || 'Project Category deleted successfully');
      } catch (error) {
        commit('setError', true);
        commit('setMessage', error.response?.data?.message || 'Failed to delete Project category');
        toast.error(error.response?.data?.message || 'Failed to delete Project category');
      } finally {
        commit('setLoading', false);
      }
    },
  },
};

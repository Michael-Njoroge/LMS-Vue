import { 
  getTutCats as getTutCatsService, 
  getTutCat as getTutCatService, 
  addTutCategory as addTutCategoryService ,
  deleteTutCat as deleteTutCatService ,
  updateTutCategory as updateTutCategoryService ,
} from './tutorialCatService';
import { useToast } from 'vue-toastification';

const toast = useToast();

export const tutorialCategories = {
  namespaced: true,
  state() {
    return {
      getTutCats: [],
      isLoading: false,
      isError: false,
      isSuccess: false,
      message: '',
    };
  },
  getters: {
    getTutCats: (state) => state.getTutCats,
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
    getTutCats(state, getTutCats) {
      state.getTutCats = getTutCats;
    },
     getTutCat(state, getTutCat) {
      state.getTutCat = getTutCat;
    },
    addTutCategory(state, addTutCategory) {
      state.addTutCategory = addTutCategory;
    },
    deleteTutCat(state, deleteTutCat) {
      state.deleteTutCat = deleteTutCat;
    },
    updateTutCategory(state, updateTutCategory) {
      state.updateTutCategory = updateTutCategory;
    },
  },

  actions: {
    async getTutCats({ commit }) {
      commit('setLoading', true);
      commit('setError', false);
      commit('setSuccess', false);
      try {
        const response = await getTutCatsService();
        const tutorialCategories = response.data.data;
        commit('getTutCats', tutorialCategories);
        commit('setSuccess', true);
        commit('setMessage', response?.data?.message || 'Tutorial Categories retrieved successfully');
      } catch (error) {
        commit('setError', true);
        commit('setMessage', error.response?.data?.message || 'Failed to get tutorial categories');
        toast.error(error.response?.data?.message || 'Failed to get tutorial categories');
      } finally {
        commit('setLoading', false);
      }
    },
    async getTutCat({ commit },data) {
      commit('setLoading', true);
      commit('setError', false);
      commit('setSuccess', false);
      try {
        const response = await getTutCatService(data);
        const tutorialCategory = response.data.data;
        commit('getTutCat', tutorialCategory);
        commit('setSuccess', true);
        commit('setMessage', response?.data?.message || 'Tutorial Category retrieved successfully');
      } catch (error) {
        commit('setError', true);
        commit('setMessage', error.response?.data?.message || 'Failed to get tutorial category');
        toast.error(error.response?.data?.message || 'Failed to get tutorial category');
      } finally {
        commit('setLoading', false);
      }
    },
    async addTutCategory({ commit },data) {
      commit('setLoading', true);
      commit('setError', false);
      commit('setSuccess', false);
      try {
        const response = await addTutCategoryService(data);
        const addTutCategory = response.data.data;
        commit('addTutCategory', addTutCategory);
        commit('setSuccess', true);
        commit('setMessage', response?.data?.message || 'Tutorial Category added successfully');
        toast.success(response?.data?.message || 'Tutorial Category added successfully');
      } catch (error) {
        commit('setError', true);
        commit('setMessage', error.response?.data?.message || 'Failed to add tutorial category');
        toast.error(error.response?.data?.message || 'Failed to add tutorial category');
      } finally {
        commit('setLoading', false);
      }
    },

    async updateTutCategory({ commit },data) {
      commit('setLoading', true);
      commit('setError', false);
      commit('setSuccess', false);
      try {
        const response = await updateTutCategoryService(data);
        const updateTutCategory = response.data.data;
        commit('updateTutCategory', updateTutCategory);
        commit('setSuccess', true);
        commit('setMessage', response?.data?.message || 'Tutorial Category updated successfully');
        toast.success(response?.data?.message || 'Tutorial Category updated successfully');
      } catch (error) {
        commit('setError', true);
        commit('setMessage', error.response?.data?.message || 'Failed to update tutorial category');
        toast.error(error.response?.data?.message || 'Failed to update tutorial category');
      } finally {
        commit('setLoading', false);
      }
    },

    async deleteTutCat({ commit },data) {
      commit('setLoading', true);
      commit('setError', false);
      commit('setSuccess', false);
      try {
        const response = await deleteTutCatService(data);
        const deleteTutCat = response.data.data;
        commit('deleteTutCat', deleteTutCat);
        commit('setSuccess', true);
        commit('setMessage', response?.data?.message || 'Tutorial Category deleted successfully');
        toast.success(response?.data?.message || 'Tutorial Category deleted successfully');
      } catch (error) {
        commit('setError', true);
        commit('setMessage', error.response?.data?.message || 'Failed to delete tutorial category');
        toast.error(error.response?.data?.message || 'Failed to delete tutorial category');
      } finally {
        commit('setLoading', false);
      }
    },
  },
};

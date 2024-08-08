import { 
  getProjects as getProjectsService, 
  getProject as getProjectService, 
  addProject as addProjectService, 
  updateProject as updateProjectService, 
  deleteProject as deleteProjectService, 
} from './projectService';
import { useToast } from 'vue-toastification';

const toast = useToast();

export const projects = {
  namespaced: true,
  state() {
    return {
      getProjects: [],
      isLoading: false,
      isError: false,
      isSuccess: false,
      message: '',
    };
  },
  getters: {
    getProjects: (state) => state.getProjects,
    getProject: (state) => state.getProject,
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
    getProjects(state, getProjects) {
      state.getProjects = getProjects;
    },
    getProject(state, getProject) {
      state.getProject = getProject;
    },
    addProject(state, addProject) {
      state.addProject = addProject;
    },
    deleteProject(state, deleteProject) {
      state.deleteProject = deleteProject;
    },
    updateProject(state, updateProject) {
      state.updateProject = updateProject;
    },
  },

  actions: {
    async getProjects({ commit }) {
      commit('setLoading', true);
      commit('setError', false);
      commit('setSuccess', false);
      try {
        const response = await getProjectsService();
        const projects = response.data.data;
        commit('getProjects', projects);
        commit('setSuccess', true);
        commit('setMessage', response?.data?.message || 'Projects  retrieved successfully');
        toast.success(response?.data?.message || 'Projects  retrieved successfully');
      } catch (error) {
        commit('setError', true);
        commit('setMessage', error.response?.data?.message || 'Failed to get Projects');
        toast.error(error.response?.data?.message || 'Failed to get Projects');
      } finally {
        commit('setLoading', false);
      }
    },

    async addProject({ commit },data) {
      commit('setLoading', true);
      commit('setError', false);
      commit('setSuccess', false);
      try {
        const response = await addProjectService(data);
        const addProject = response.data.data;
        commit('addProject', addProject);
        commit('setSuccess', true);
        commit('setMessage', response?.data?.message || 'Project added successfully');
        toast.success(response?.data?.message || 'Project added successfully');
      } catch (error) {
        commit('setError', true);
        commit('setMessage', error.response?.data?.message || 'Failed to add Project');
        toast.error(error.response?.data?.message || 'Failed to add Project');
      } finally {
        commit('setLoading', false);
      }
    },

    async updateProject({ commit },data) {
      commit('setLoading', true);
      commit('setError', false);
      commit('setSuccess', false);
      try {
        const response = await updateProjectService(data);
        const updateProject = response.data.data;
        commit('updateProject', updateProject);
        commit('setSuccess', true);
        commit('setMessage', response?.data?.message || 'Project updated successfully');
        toast.success(response?.data?.message || 'Project updated successfully');
      } catch (error) {
        commit('setError', true);
        commit('setMessage', error.response?.data?.message || 'Failed to update Project');
        toast.error(error.response?.data?.message || 'Failed to update Project');
      } finally {
        commit('setLoading', false);
      }
    },

    async getProject({ commit },data) {
      commit('setLoading', true);
      commit('setError', false);
      commit('setSuccess', false);
      try {
        const response = await getProjectService(data);
        const project = response.data.data;
        commit('getProject', project);
        commit('setSuccess', true);
        commit('setMessage', response?.data?.message || 'Project  retrieved successfully');
        toast.success(response?.data?.message || 'Project  retrieved successfully');
      } catch (error) {
        commit('setError', true);
        commit('setMessage', error.response?.data?.message || 'Failed to get Project');
        toast.error(error.response?.data?.message || 'Failed to get Project');
      } finally {
        commit('setLoading', false);
      }
    },

    async deleteProject({ commit },data) {
      commit('setLoading', true);
      commit('setError', false);
      commit('setSuccess', false);
      try {
        const response = await deleteProjectService(data);
        const deleteProject = response.data.data;
        commit('deleteProject', deleteProject);
        commit('setSuccess', true);
        commit('setMessage', response?.data?.message || 'Project deleted successfully');
        toast.success(response?.data?.message || 'Project deleted successfully');
      } catch (error) {
        commit('setError', true);
        commit('setMessage', error.response?.data?.message || 'Failed to delete Project');
        toast.error(error.response?.data?.message || 'Failed to delete Project');
      } finally {
        commit('setLoading', false);
      }
    },
  },
};

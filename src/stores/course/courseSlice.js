import { getCourses as getCoursesService, getCourse as getCourseService } from './courseService';
import { useToast } from 'vue-toastification';

const toast = useToast();

export const courses = {
  namespaced: true,
  state() {
    return {
      getCourses: [],
      getCourse: {},
      isLoading: false,
      isError: false,
      isSuccess: false,
      message: '',
    };
  },
  getters: {
    getCourses: (state) => state.getCourses,
    getCourse: (state) => state.getCourse,
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
    getCourses(state, getCourses) {
      state.getCourses = getCourses;
    },
     getCourse(state, getCourse) {
      state.getCourse = getCourse;
    },
  },

  actions: {
    async getCourses({ commit }) {
      commit('setLoading', true);
      commit('setError', false);
      commit('setSuccess', false);
      try {
        const response = await getCoursesService();
        const courses = response.data.data;
        commit('getCourses', courses);
        commit('setSuccess', true);
        commit('setMessage', response?.data?.message || 'Courses  retrieved successfully');
        toast.success(response?.data?.message || 'Courses  retrieved successfully');
      } catch (error) {
        commit('setError', true);
        commit('setMessage', error.response?.data?.message || 'Failed to get courses');
        toast.error(error.response?.data?.message || 'Failed to get courses');
      } finally {
        commit('setLoading', false);
      }
    },
    async getCourse({ commit },data) {
      commit('setLoading', true);
      commit('setError', false);
      commit('setSuccess', false);
      try {
        const response = await getCourseService(data);
        const course = response.data.data;
        commit('getCourse', course);
        commit('setSuccess', true);
        commit('setMessage', response?.data?.message || 'Course  retrieved successfully');
        toast.success(response?.data?.message || 'Course  retrieved successfully');
      } catch (error) {
        commit('setError', true);
        commit('setMessage', error.response?.data?.message || 'Failed to get course');
        toast.error(error.response?.data?.message || 'Failed to get course');
      } finally {
        commit('setLoading', false);
      }
    },
  },
};

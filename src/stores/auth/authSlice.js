import { 
  register as registerService,
  login as loginService, 
  forgot as forgotService, 
  reset as resetService, 
  logout as logoutService, 
  emailVerification as emailVerificationService, 
  resendVerification as resendVerificationService, 
  redirect as redirectService, 
  callback as callbackService, 
} from './authService';
import { useToast } from 'vue-toastification';

const toast = useToast();

export const auth = {
  namespaced: true,
  state() {
    const user = JSON.parse(localStorage.getItem('user')) || null;
    return {
      isLoggedIn: !!user,
      user: user,
      isLoading: false,
      isError: false,
      isSuccess: false,
      isAdmin: false,
      message: '',
    };
  },
  getters: {
    isLoggedIn: (state) => state.isLoggedIn,
    isAdmin: (state) => state.isAdmin,
    redirectUrl: (state) => state.redirectUrl,
    callback: (state) => state.callback,
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
    forgot(state) {
      state.message = '';
    },
    reset(state, reset) {
      state.reset = reset;
    },
    register(state, user) {
      state.isRegistered = true;
      state.user = user;
    },
    emailVerification(state, emailVerification) {
      state.emailVerification = emailVerification;
    },
    resendVerification(state, verification) {
      state.verification = verification;
    },
    logout(state) {
      state.isLoggedIn = false;
      state.user = null;
      localStorage.removeItem('user');
    },
    redirectUrl(state,redirectUrl) {
      state.redirectUrl = redirectUrl;
    },
    initialize(state) {
      const user = JSON.parse(localStorage.getItem('user'));
      if (user) {
        state.isLoggedIn = true;
        state.user = user;
        
        if (state.user.role === 'admin') {
          state.isAdmin = true;
        } else {
          state.isAdmin = false;
        }
      } else {
        state.isAdmin = false;
      }
    },
    clearMessage(state) {
      state.message = '';
    }
  },

  actions: {

    async initAuth({ commit }) {
      commit('initialize');
    },

    async clearMessage({ commit }) {
      commit('clearMessage');
    },

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
          image: response.data.data?.image,
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

    async emailVerification({ commit }, data) {
      commit('setLoading', true);
      commit('setError', false);
      commit('setSuccess', false);
      try {
        const response = await emailVerificationService(data);
        const emailVerif = response.data.data;
        commit('emailVerification', emailVerif);
        commit('setSuccess', true);
        commit('setMessage', response?.data?.message || 'Email Verified');
        toast.info(response?.data?.message || 'Email Verified');
      } catch (error) {
        commit('setError', true);
        commit('setMessage', error.response?.data?.message || 'Failed to Verify');
      } finally {
        commit('setLoading', false);
      }
    },

    async resendVerification({ commit }, data) {
      commit('setLoading', true);
      commit('setError', false);
      commit('setSuccess', false);
      try {
        const response = await resendVerificationService(data);
        const verification = response.data.data;
        commit('resendVerification', verification);
        commit('setSuccess', true);
        commit('setMessage', response?.data?.message || 'Email Verification Sent');
        toast.info(response?.data?.message || 'Email Verification Sent');
      } catch (error) {
        commit('setError', true);
        commit('setMessage', error.response?.data?.message || 'Failed to send');
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
          role: response.data.data?.role?.role_name,
          image: response.data.data?.image,
          token: response.data.data?.token,
        }))
      } catch (error) {
        commit('setError', true);
        commit('setMessage', error.response?.data?.message || 'Login failed');
        toast.error(error.response?.data?.message || 'Login failed');
      } finally {
        commit('setLoading', false);
      }
    },

    async forgot({ commit }, data) {
      commit('setLoading', true);
      commit('setError', false);
      commit('setSuccess', false);
      try {
        const response = await forgotService(data);
        const forgot = response.data.data;
        commit('forgot', forgot);
        commit('setSuccess', true);
        commit('setMessage', response?.data?.message || 'Email Sent');
      } catch (error) {
        commit('setError', true);
        commit('setMessage', error.response?.data?.message || 'Failed to send email');
      } finally {
        commit('setLoading', false);
      }
    },

    async reset({ commit }, data) {
      commit('setLoading', true);
      commit('setError', false);
      commit('setSuccess', false);
      try {
        const response = await resetService(data);
        const reset = response.data.data;
        commit('reset', reset);
        commit('setSuccess', true);
        commit('setMessage', response?.data?.message || 'Password Reset');
      } catch (error) {
        commit('setError', true);
        commit('setMessage', error.response?.data?.message || 'Failed to Reset');
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

    async redirect({ commit },provider) {
      commit('setLoading', true);
      commit('setError', false);
      commit('setSuccess', false);
      try {
        const response = await redirectService(provider);
        const url = response?.data?.url;
        commit('redirectUrl', url);
        commit('setSuccess', true);
        commit('setMessage', response?.data?.message || 'Success redirect!');
      } catch (error) {
        commit('setError', true);
        commit('setMessage', error.response?.data?.message || 'Success redirect');
      } finally {
        commit('setLoading', false);
      }
    },

    async callback({ commit },data) {
      commit('setLoading', true);
      commit('setError', false);
      commit('setSuccess', false);
      try {
        const response = await callbackService(data);
        const user = response.data.data;
        console.log("user",user)
        commit('user', user);
        commit('setSuccess', true);
        commit('setMessage', response?.data?.message || 'Success callback!');
        toast.info(response?.data?.message || 'Success callback!');
        localStorage.setItem('user',JSON.stringify({
          id: response.data.data?.id,
          firstname: response.data.data?.firstname,
          lastname: response.data.data?.lastname,
          mobile: response.data.data?.mobile,
          email: response.data.data?.email,
          role: response.data.data?.role?.role_name,
          token: response.data.data?.token?.tokenable_id,
        }))
      } catch (error) {
        commit('setError', true);
        commit('setMessage', error.response?.data?.message || 'Callback failed');
      } finally {
        commit('setLoading', false);
      }
    },
  },
};

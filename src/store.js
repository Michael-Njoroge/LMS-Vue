import { createStore } from 'vuex';
import { auth } from './stores/auth/authSlice';

export const store = createStore({
  modules: {
    auth,
  },
});

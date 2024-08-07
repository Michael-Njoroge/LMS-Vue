import { createStore } from 'vuex';
import { auth } from './stores/auth/authSlice';
import { users } from './stores/user/userSlice';
import { courses } from './stores/course/courseSlice';
import { tutorials } from './stores/tutorial/tutorialSlice';
import { tutorialCategories } from './stores/tutorialCategory/tutorialCatSlice';
import { projectCategories } from './stores/projectCategory/projectCatSlice';

export const store = createStore({
  modules: {
    auth,
    users,
    courses,
    tutorials,
    tutorialCategories,
    projectCategories
  },
});

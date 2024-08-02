import { createWebHistory, createRouter } from "vue-router";
import SignUpPage from "@/views/SignUpPage.vue";
import LoginPage from "@/views/LoginPage.vue";
import Forgot from "@/views/ForgotPassword.vue";
import Reset from "@/views/ResetPassword.vue";
import HomePage from "@/views/HomePage.vue";
import Terms from "@/views/TermsAndConditions.vue";
import Privacy from "@/views/PrivacyPolicy.vue";
import Courses from "@/views/CoursesPage.vue";
import Admin from "@/views/AdminDashboard.vue";
import { useStore } from 'vuex';

const routes = [
  {
    path: "/signup",
    name: "SignUpPage",
    component: SignUpPage,
  },

  {
    path: "/login",
    name: "LoginPage",
    component: LoginPage,
  },

  {
    path: "/forgot-password",
    name: "Forgot",
    component: Forgot,
  },

  {
    path: "/reset-password",
    name: "Reset",
    component: Reset,
  },

  {
    path: "/",
    name: "HomePage",
    component: HomePage,
  },

  {
    path: "/terms-conditions",
    name: "Terms",
    component: Terms,
  },

  {
    path: "/privacy-policy",
    name: "Privacy",
    component: Privacy,
  },

  {
    path: "/courses",
    name: "Courses",
    component: Courses,
  },

  {
    path: "/admin",
    name: "Admin",
    component: Admin,
    meta: { requiresAuth: true }
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  const store = useStore();
  const isLoggedIn = store.getters['auth/isLoggedIn'];

  if (to.meta.requiresAuth && !isLoggedIn) {
    next('/login');
  } else {
    next();
  }
});

export default router;

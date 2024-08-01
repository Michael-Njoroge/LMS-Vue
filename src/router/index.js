import { createWebHistory, createRouter } from "vue-router";
import SignUpPage from "@/views/SignUpPage.vue";
import LoginPage from "@/views/LoginPage.vue";
import Forgot from "@/views/ForgotPassword.vue";
import Reset from "@/views/ResetPassword.vue";
import HomePage from "@/views/HomePage.vue";

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
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

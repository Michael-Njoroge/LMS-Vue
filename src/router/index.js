import { createWebHistory, createRouter } from "vue-router";
import SignUpPage from "@/views/SignUpPage.vue";
import LoginPage from "@/views/LoginPage.vue";
import EmailVerification from "@/views/EmailVerification.vue";
import Forgot from "@/views/ForgotPassword.vue";
import Reset from "@/views/ResetPassword.vue";
import HomePage from "@/views/HomePage.vue";
import Terms from "@/views/TermsAndConditions.vue";
import Privacy from "@/views/PrivacyPolicy.vue";
import Courses from "@/views/CoursesPage.vue";
import Admin from "@/views/AdminDashboard.vue";
import Users from "@/views/UsersPage.vue";
import Tutorials from "@/views/TutorialsPage.vue";
import Projects from "@/views/ProjectsPage.vue";
import AddProject from "@/views/AddProject.vue";
import TutorialCategory from "@/views/TutorialCategoryPage.vue";
import ProjectCategory from "@/views/ProjectCategory.vue";
import AuthCallback from '@/views/AuthCallback.vue';
import ProfilePage from '@/views/ProfilePage.vue';
import { useStore } from 'vuex';

const routes = [
  { path: "/signup", name: "SignUpPage", component: SignUpPage },
  { path: "/login", name: "LoginPage", component: LoginPage },
  { path: "/email-verification", name: "EmailVerification", component: EmailVerification },
  { path: "/forgot-password", name: "Forgot", component: Forgot },
  { path: "/reset-password", name: "Reset", component: Reset },
  { path: "/", name: "HomePage", component: HomePage },
  { path: "/terms-conditions", name: "Terms", component: Terms },
  { path: "/privacy-policy", name: "Privacy", component: Privacy },
  { path: "/courses", name: "Courses", component: Courses },
  { path: '/auth/callback/google', name: 'AuthCallbackGoogle', component: AuthCallback },
  { path: '/auth/callback/github', name: 'AuthCallbackGithub', component: AuthCallback },
  { path: '/auth/callback/linkedin', name: 'AuthCallbackLinkedin', component: AuthCallback },
  { path: "/admin", name: "Admin", component: Admin, meta: { requiresAdmin: true } },
  { path: "/admin/users", name: "Users", component: Users, meta: { requiresAdmin: true } },
  { path: "/admin/tutorials-category", name: "TutorialCategory", component: TutorialCategory, meta: { requiresAdmin: true } },
  { path: "/admin/project-category", name: "ProjectCategory", component: ProjectCategory, meta: { requiresAdmin: true } },
  { path: "/admin/tutorials", name: "Tutorials", component: Tutorials, meta: { requiresAdmin: true } },
  { path: "/admin/project-list", name: "Projects", component: Projects, meta: { requiresAdmin: true } },
  { path: "/admin/project", name: "AddProject", component: AddProject, meta: { requiresAdmin: true } },
  { path: "/admin/project/:id", name: "EditProject", component: AddProject, meta: { requiresAdmin: true } },
  { path: "/admin/profile", name: "ProfilePage", component: ProfilePage, meta: { requiresAdmin: true } }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  const store = useStore();
    const isLoggedIn = store.getters['auth/isLoggedIn'];
    const isAdmin = store.getters['auth/isAdmin'];

    if (to.meta.requiresAdmin && (!isLoggedIn || !isAdmin)) {
      next('/login');
    } else if (to.meta.requiresAuth && !isLoggedIn) {
      next('/login');
    } else {
      next();
    }
});

export default router;

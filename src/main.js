import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import { store } from './store';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'mdb-vue-ui-kit/css/mdb.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import '@coreui/coreui/dist/css/coreui.min.css';
import "quill/dist/quill.core.css";
import "quill/dist/quill.bubble.css";
import "quill/dist/quill.snow.css";
import VueSidebarMenu from 'vue-sidebar-menu'
import 'vue-sidebar-menu/dist/vue-sidebar-menu.css'
import Toast, { POSITION } from 'vue-toastification';
import 'vue-toastification/dist/index.css';
import { VueSpinnersPlugin } from 'vue3-spinners';

store.dispatch('auth/initAuth').then(() => {
  const app = createApp(App);

  app.use(VueSidebarMenu);
  app.use(VueSpinnersPlugin)
  app.use(store);
  app.use(router);

  app.use(Toast, {
    position: POSITION.BOTTOM_RIGHT,
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: false,
    progress: undefined,
    toastClassName: 'toast-custom'
  });

  if (process.env.NODE_ENV === 'development') {
    app.config.devtools = true;
  }

  app.mount('#app');
});

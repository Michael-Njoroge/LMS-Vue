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
import VueSidebarMenu from 'vue-sidebar-menu'
import 'vue-sidebar-menu/dist/vue-sidebar-menu.css'
import Toast, { POSITION } from 'vue-toastification';
import 'vue-toastification/dist/index.css';

const app = createApp(App);
app.use(VueSidebarMenu);
app.use(store);
app.use(router);

app.use(Toast, {
  position: POSITION.TOP_RIGHT,
  autoClose: 5000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
});

if (process.env.NODE_ENV === 'development') {
  app.config.devtools = true;
}

app.mount('#app');

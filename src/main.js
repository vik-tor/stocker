import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import './assets/tailwind.css';
/* import './assets/style.css'; */

import { VueCookieNext } from 'vue-cookie-next';

VueCookieNext.config({
  expire: '3d',
  path: '/',
});

createApp(App)
  .use(router)
  .use(VueCookieNext)
  .mount("#app");

import { createApp } from "vue";
import App from "./App.vue";
import store from "./store";
import  router  from "./router/index";
import "./assets/css/nucleo-icons.css";
import "./assets/css/nucleo-svg.css";
import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';
import ArgonDashboard from "./argon-dashboard";

const app = createApp(App);
app.use(store);
app.use(router);
app.use(VueSweetalert2);
app.use(ArgonDashboard);
app.mount("#app");

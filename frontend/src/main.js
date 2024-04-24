import "bootstrap/dist/css/bootstrap.min.css";
// import 'bootstrap/dist/css/bootstrap.css'
// import 'bootstrap-vue/dist/bootstrap-vue.css'
import "font-awesome/css/font-awesome.css"
import $ from 'jquery';

import { createApp } from 'vue'
import App from './App.vue'
import router from "./routes/index"

createApp(App).use(router).mount("#app")

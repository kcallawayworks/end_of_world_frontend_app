import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import axios from "axios";
import Vuetify from "vue";
import BootstrapVue from "bootstrap-vue";
import moment from "moment";

axios.defaults.baseURL = 
  process.env.NODE_ENV === "development" ? "http://localhost:3000" : "/";

var jwt = localStorage.getItem("jwt");
if (jwt) {
  axios.defaults.headers.common["Authorization"] = "Bearer " + jwt;
}

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");

Vue.use(BootstrapVue);
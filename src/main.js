import Vue from "vue";
import App from "./App.vue";
import VueRS from "@appbaseio/reactivesearch-vue";

Vue.use(VueRS);
Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount("#app");

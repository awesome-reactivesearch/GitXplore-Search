import Vue from "vue";
import App from "./App.vue";
import VueRs from "@appbaseio/reactivesearch-vue";

import { library } from "@fortawesome/fontawesome-svg-core";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { faCodeBranch } from "@fortawesome/free-solid-svg-icons";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(faStar, faEye, faCodeBranch);
Vue.component("font-awesome-icon", FontAwesomeIcon);

Vue.use(VueRs);
Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount("#app");

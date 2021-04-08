import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import Directves from './directive'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.config.productionTip = false;

Vue.use(ElementUI)
Vue.use(Directves)
import './components/ui-lib'

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");

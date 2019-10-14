// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'babel-polyfill';

import Vue from 'vue';
import App from './App';
import router from './router';
import store from "./vuex";
import axios_default from "./http/default";
import ElementUi from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css'

Vue.config.productionTip = false;
Vue.prototype.$http = axios_default;
Vue.prototype.$message = ElementUi.Message;
Vue.use(ElementUi);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})

import Vue from 'vue';
import api from '@/api';
import App from './App.vue';
import router from './router';
import store from './store';

Vue.config.productionTip = false;

Vue.prototype.$api = api; // 将接口统一挂在到vue实例上

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');

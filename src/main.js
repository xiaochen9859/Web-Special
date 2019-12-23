import Vue from 'vue';
import VueRouter from 'vue-router';
import router from './router/index';
import store from './store';
import App from './App.vue';

import VueLazyLoad from 'vue-lazyload'
Vue.use(VueLazyLoad)

Vue.use(VueRouter);
Vue.config.productionTip = false

router.beforeEach((to, from, next) => {
  next();
})
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router: router,
  store
}).$mount('#app')


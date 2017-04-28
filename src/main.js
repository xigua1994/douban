// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ComingSoon from './components/ComingSoon'
import VueResource from 'vue-resource'
require("./assets/resize.js")
Vue.use(VueResource)

Vue.config.productionTip = false
// new router({
// 	routes
// })
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})

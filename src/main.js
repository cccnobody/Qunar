// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from "./store"
import 'babel-polyfill'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'styles/reset.css'
import 'styles/border.css'
import 'styles/iconfont.css'
import fastclick from 'fastclick'
import 'swiper/dist/css/swiper.css'
import VueLazyload from 'vue-lazyload'

// or with options
// Vue.use(VueLazyload, {
//   preLoad: 1.3,
//   loading: 'common/image/loading.gif',
//   attempt: 1
// })
Vue.use(VueLazyload, {
  loading: require('common/image/loading.gif')
})

Vue.config.devtools = true
Vue.config.productionTip = false
fastclick.attach(document.body)
Vue.use(VueAwesomeSwiper)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})

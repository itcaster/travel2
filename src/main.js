// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import fastclick from 'fastclick'
import Axios from 'axios'
import Mint from 'mint-ui'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import store from './store'
import 'styles/border.css'
import 'styles/reset.css'
import 'styles/iconfont/iconfont.css'
import 'mint-ui/lib/style.css'
import 'swiper/dist/css/swiper.css'

Vue.config.productionTip = false
fastclick.attach(document.body)
Vue.use(Mint)
Vue.use(VueAwesomeSwiper)
Vue.prototype.$axios = Axios
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})

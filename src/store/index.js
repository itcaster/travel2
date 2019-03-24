import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
let cityDefault = '上海'
try {
  if (localStorage.city) {
    cityDefault = localStorage.city
  }
} catch (e) {}

export default new Vuex.Store({
  state: {
    city: cityDefault
  },
  mutations: {
    changeCity (state, city) {
      state.city = city
      try {
        localStorage.city = city
      } catch (e) {}
    }
  },
  actions: {
    changeCity (context, city) {
      context.commit('changeCity', city)
    }
  }
})

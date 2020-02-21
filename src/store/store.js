import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    TableArr:[
      {
        name:123,
        age:456
      },
      {
        name:222,
        age:333
      }
    ]
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
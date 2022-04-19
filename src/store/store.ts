import Vue from 'vue'
import Vuex from 'vuex'
import VuexPersistence from 'vuex-persist'
Vue.use(Vuex)

import { RootState } from './types'
import { product } from './product/index'

const vuexLocal = new VuexPersistence<any>({
  storage: window.localStorage,
  reducer: (state) => ({
    product: {
      products: state.product.products,
    },
  }),
})

export default new Vuex.Store<RootState>({
  state: {
    version: '1.0.0',
  },
  modules: {
    product,
  },
  mutations: {},
  actions: {},
  plugins: [vuexLocal.plugin],
})

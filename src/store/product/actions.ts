import { ActionTree } from 'vuex'
import { ProductsState, Product } from './types'
import { RootState } from '../types'

export const actions: ActionTree<ProductsState, RootState> = {
  addProduct({ commit }, payload: Product): void {
    commit('ADD_PRODUCT', payload)
  },
  addSelectedProduct({ commit }, payload: Product): void {
    commit('ADD_SELECTED_PRODUCT', payload)
  },
  deleteProduct({ commit }): void {
    commit('DELETE_PRODUCT')
  },
}

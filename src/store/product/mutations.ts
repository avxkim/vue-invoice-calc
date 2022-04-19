import { MutationTree } from 'vuex'
import { ProductsState, Product } from './types'

export const mutations: MutationTree<ProductsState> = {
  ADD_PRODUCT(state, payload: Product) {
    state.products.push(payload)
  },
  ADD_SELECTED_PRODUCT(state, payload: Product[]) {
    state.selected = [...payload]
  },
  DELETE_PRODUCT(state) {
    state.products = state.products.filter(
      (o) => !state.selected.find(({ id }) => o.id === id)
    )
  },
}

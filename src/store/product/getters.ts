import { GetterTree } from 'vuex'
import { ProductsState, Product } from './types'
import { RootState } from '../types'

export const getters: GetterTree<ProductsState, RootState> = {
  productsList(state): Product[] {
    return state.products
  },
  totalSum(state): number {
    const total = state.products.reduce((prev, curr) => prev + curr.sum, 0)
    return total
  },
}

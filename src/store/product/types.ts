export interface Product {
  id: string
  name: string
  price: number
  qty: number
  sum: number
}

export interface ProductsState {
  products: Product[]
  selected: Product[]
}

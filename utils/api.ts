import axios from 'axios'

const api = axios.create({
  baseURL: "https://fakestoreapi.com"
})

export interface Product {
  id: number,
  title: string,
  price: number,
  category: string,
  description: string,
  image: string,
  rating: {rate: number, count: number}
  quantity?: number | undefined
}

export const fetchProducts = (category_name: string) => {
  return api.get(`/products/category/${category_name}`)
    .then(({data} : {data: Product[]}) => {
      return data
    })
}

export const fetchSingleProduct = (product_id: string) => {
  return api.get(`/products/${product_id}`)
    .then(({data} : {data:Product}) => {
      return data
    })
}


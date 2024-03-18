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
}

export const fetchProducts = () => {
  return api.get('/products')
    .then(({data} : {data: Product[]}) => {
      return data
    })
}


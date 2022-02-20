import { useQuery } from 'react-query'
import { request, gql } from 'graphql-request'
import { API_ENDPOINT } from '../config'
import { Product } from '../@types/graphql-generated'

const ALL_PRODUCTS_QUERY = gql`
  query ALL_PRODUCTS_QUERY {
    products {
      id
      name
      price
      description
      photo {
        id
        image {
          id
          publicUrlTransformed
        }
      }
    }
  }
`

function useProducts() {
  return useQuery<Product[]>('products', async () => {
    const { products } = await request(API_ENDPOINT, ALL_PRODUCTS_QUERY)
    return products
  })
}

export default useProducts

import { useQuery } from 'react-query'
import { request, gql } from 'graphql-request'
import { API_ENDPOINT } from '../config'

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
  return useQuery('posts', async () => {
    const { products } = await request(API_ENDPOINT, ALL_PRODUCTS_QUERY)
    return products
  })
}

export default useProducts

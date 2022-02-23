import request, { gql } from 'graphql-request'
import { useQuery } from 'react-query'
import { Product } from '../@types/graphql-generated'
import { API_ENDPOINT } from '../config'

const SINGLE_PRODUCT_QUERY = gql`
  query SINGLE_PRODUCT_QUERY($id: ID!) {
    product(where: { id: $id }) {
      name
      price
      description
      id
      photo {
        image {
          publicUrlTransformed
        }
      }
    }
  }
`

function useProduct(productId: string) {
  return useQuery<Product>(['product', productId], async () => {
    const { product } = await request(API_ENDPOINT, SINGLE_PRODUCT_QUERY, {
      id: productId,
    })
    return product
  })
}

export default useProduct

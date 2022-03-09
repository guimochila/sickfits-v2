import { useQuery } from 'react-query'
import { gql } from 'graphql-request'
import { Product } from '../@types/graphql-generated'
import gqlClient from '../utils/requestClient'

const ALL_PRODUCTS_QUERY = gql`
  query ALL_PRODUCTS_QUERY($take: Int = 0, $skip: Int! = 0) {
    products(take: $take, skip: $skip) {
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

interface IUseProductsProps {
  take?: number
  skip?: number
}

function useProducts({ take, skip }: IUseProductsProps) {
  return useQuery<Product[]>(['products', skip, take], async () => {
    const { products } = await gqlClient.request(ALL_PRODUCTS_QUERY, {
      take,
      skip,
    })
    return products
  })
}

export default useProducts

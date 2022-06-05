import { gql } from 'graphql-request'
import { useQuery } from 'react-query'
import gqlClient from '../utils/requestClient'

export const PAGINATION_QUERY = gql`
  query PAGINATION_QUERY {
    productsCount
  }
`

interface IProductsQueryResponse {
  productsCount: number
}

function useProductsCount() {
  const productsCount = useQuery<IProductsQueryResponse>(
    'productCount',
    async () => await gqlClient.request(PAGINATION_QUERY),
  )

  return productsCount
}

export default useProductsCount

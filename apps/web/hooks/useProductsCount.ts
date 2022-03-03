import request, { gql } from 'graphql-request'
import { useQuery } from 'react-query'
import { API_ENDPOINT } from '../config'

const PAGINATION_QUERY = gql`
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
    async () => await request(API_ENDPOINT, PAGINATION_QUERY),
  )

  return productsCount
}

export default useProductsCount

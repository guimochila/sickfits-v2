import { gql } from 'graphql-request'
import { useQuery } from 'react-query'
import { Product } from '../@types/graphql-generated'
import gqlClient from '../utils/requestClient'

const SEARCH_PRODUCTS_QUERY = gql`
  query SEARCH_PRODUCTS_QUERY($searchTerm: String!) {
    searchTerms: products(
      where: {
        OR: [
          { name: { contains: $searchTerm } }
          { description: { contains: $searchTerm } }
        ]
      }
    ) {
      id
      name
      photo {
        image {
          publicUrlTransformed
        }
      }
    }
  }
`

function useSearch(searchTerm: string | undefined) {
  return useQuery<{ searchTerms: Product[] }>(
    ['search'],
    async () => {
      const items = await gqlClient.request(SEARCH_PRODUCTS_QUERY, {
        searchTerm,
      })
      return items
    },
    {
      enabled: false,
      cacheTime: 0,
      retry: false,
    },
  )
}

export default useSearch

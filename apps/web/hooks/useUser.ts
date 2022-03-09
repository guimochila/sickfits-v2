import { gql } from 'graphql-request'
import { useQuery } from 'react-query'
import { User } from '../@types/graphql-generated'
import gqlClient from '../utils/requestClient'

const CURRENT_USER_QUERY = gql`
  query CURRENT_USER_QUERY {
    authenticatedItem {
      ... on User {
        id
        email
        name
      }
    }
  }
`

function useUser() {
  return useQuery<User>(
    'user',
    async () => {
      const { authenticatedItem: user } = await gqlClient.request(
        CURRENT_USER_QUERY,
      )
      return user
    },
    {
      retry: 0,
      staleTime: 1000 * 60 * 60 * 12,
    },
  )
}

export default useUser

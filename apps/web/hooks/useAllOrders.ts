import { gql } from 'graphql-request'
import { useQuery } from 'react-query'
import { Order } from '../@types/graphql-generated'
import gqlClient from '../utils/requestClient'

const USER_ORDERS_QUERY = gql`
  query USER_ORDERS_QUERY {
    orders {
      id
      charge
      total
      user {
        id
      }
      items {
        id
        name
        description
        price
        quantity
        photo {
          image {
            publicUrlTransformed
          }
        }
      }
    }
  }
`

function useAllOrders() {
  return useQuery<Order[]>(['orders'], async () => {
    const { orders } = await gqlClient.request(USER_ORDERS_QUERY)
    return orders
  })
}

export default useAllOrders

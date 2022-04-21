import { gql } from 'graphql-request'
import { useQuery } from 'react-query'
import { Order } from '../@types/graphql-generated'
import gqlClient from '../utils/requestClient'

const SINGLE_ORDER_QUERY = gql`
  query SINGLE_ORDER_QUERY($id: ID!) {
    order(where: { id: $id }) {
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

function useSingleOrder(orderId: string) {
  return useQuery<Order>(['order', orderId], async () => {
    const { order } = await gqlClient.request(SINGLE_ORDER_QUERY, {
      id: orderId,
    })
    return order
  })
}

export default useSingleOrder

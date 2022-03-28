import { gql } from 'graphql-request'
import { useMutation, UseMutationOptions } from 'react-query'
import { Order } from '../@types/graphql-generated'
import gqlClient from '../utils/requestClient'

const CREATE_ORDER_MUTATION = gql`
  mutation CREATE_ORDER_MUTATION($token: String!) {
    checkout(token: $token) {
      id
      charge
      total
      items {
        id
        name
      }
    }
  }
`

interface IUseOrderResponse {
  checkout: Order
}

function useOrder(options?: UseMutationOptions<IUseOrderResponse>) {
  return useMutation<IUseOrderResponse, unknown>(async token => {
    const { checkout } = await gqlClient.request(CREATE_ORDER_MUTATION, {
      token,
    })
    return checkout
  }, options)
}

export default useOrder

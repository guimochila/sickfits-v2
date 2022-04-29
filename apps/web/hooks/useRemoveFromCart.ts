import { gql } from 'graphql-request'
import { useMutation, UseMutationOptions } from 'react-query'
import { CartItem } from '../@types/graphql-generated'
import gqlClient from '../utils/requestClient'

const REMOVE_FROM_CART_MUTATION = gql`
  mutation REMOVE_FROM_CART_MUTATION($id: ID!) {
    deleteCartItem(where: { id: $id }) {
      id
    }
  }
`

interface IUseRemoveFromCartResponse {
  deleteCartItem: CartItem
}

function useRemoveFromCart(
  id: string,
  options?: UseMutationOptions<IUseRemoveFromCartResponse>,
) {
  return useMutation<IUseRemoveFromCartResponse>(
    () => gqlClient.request(REMOVE_FROM_CART_MUTATION, { id }),
    options,
  )
}

export default useRemoveFromCart

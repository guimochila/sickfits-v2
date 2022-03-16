import { gql } from 'graphql-request'
import { useMutation, UseMutationOptions } from 'react-query'
import { CartItem } from '../@types/graphql-generated'
import gqlClient from '../utils/requestClient'

const ADD_TO_CART_MUTATION = gql`
  mutation ADD_TO_CART_MUTATION($productId: ID!) {
    addToCart(productId: $productId) {
      id
      quantity
    }
  }
`

interface IUseAddToCartResponse {
  addTocart: CartItem
}

function useAddToCart(
  productId: string,
  options?: UseMutationOptions<IUseAddToCartResponse>,
) {
  return useMutation<IUseAddToCartResponse>(
    () => gqlClient.request(ADD_TO_CART_MUTATION, { productId }),
    options,
  )
}

export default useAddToCart

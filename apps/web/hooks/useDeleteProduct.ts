import { gql } from 'graphql-request'
import { useMutation, UseMutationOptions } from 'react-query'
import { Product } from '../@types/graphql-generated'

import gqlClient from '../utils/requestClient'

const DELETE_PRODUCT_MUTATION = gql`
  mutation DELETE_PRODUCT_MUTATION($id: ID!) {
    deleteProduct(where: { id: $id }) {
      id
      name
    }
  }
`

function useDeleteProduct(id: string, options?: UseMutationOptions<Product>) {
  return useMutation(
    () => gqlClient.request(DELETE_PRODUCT_MUTATION, { id }),
    options,
  )
}

export default useDeleteProduct

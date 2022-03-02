import request, { gql } from 'graphql-request'
import { useMutation, UseMutationOptions } from 'react-query'
import { Product } from '../@types/graphql-generated'
import { API_ENDPOINT } from '../config'

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
    () => request(API_ENDPOINT, DELETE_PRODUCT_MUTATION, { id }),
    options,
  )
}

export default useDeleteProduct

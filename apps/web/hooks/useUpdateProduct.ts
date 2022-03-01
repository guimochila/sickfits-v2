import request, { gql } from 'graphql-request'
import { useMutation, UseMutationOptions } from 'react-query'
import { API_ENDPOINT } from '../config'

const UPDATE_PRODUCT_MUTATION = gql`
  mutation UPDATE_PRODUCT_MUTATION(
    $id: ID!
    $name: String
    $description: String
    $price: Int
  ) {
    updateProduct(
      where: { id: $id }
      data: { name: $name, description: $description, price: $price }
    ) {
      id
      name
      description
      price
    }
  }
`

interface IUpdateProductProps {
  name: string
  description: string
  price: number
}

function useUpdateProduct(
  id: string,
  data: IUpdateProductProps,
  options?: UseMutationOptions<IUpdateProductProps>,
) {
  return useMutation(
    () => request(API_ENDPOINT, UPDATE_PRODUCT_MUTATION, { id, ...data }),
    options,
  )
}

export default useUpdateProduct

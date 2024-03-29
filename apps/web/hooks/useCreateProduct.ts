import { gql } from 'graphql-request'
import { useMutation, UseMutationOptions } from 'react-query'
import { Product } from '../@types/graphql-generated'
import gqlClient from '../utils/requestClient'

const CREATE_PRODUCT_MUTATION = gql`
  mutation CREATE_PRODUCT_MUTATION(
    $name: String!
    $description: String!
    $price: Int!
    $image: Upload
  ) {
    createProduct(
      data: {
        name: $name
        description: $description
        price: $price
        photo: { create: { image: $image, altText: $name } }
      }
    ) {
      id
      price
      description
      name
    }
  }
`

interface IMutationProduct {
  createProduct: Product
}

function useCreateProduct<T>(
  inputs: T,
  options?: UseMutationOptions<IMutationProduct>,
) {
  return useMutation<IMutationProduct>(
    () => gqlClient.request(CREATE_PRODUCT_MUTATION, inputs),
    options,
  )
}

export default useCreateProduct

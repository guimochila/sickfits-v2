import request, { gql } from 'graphql-request'
import { useMutation } from 'react-query'
import { Product } from '../@types/graphql-generated'
import { API_ENDPOINT } from '../config'

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

function useCreateProduct<T>(inputs: T) {
  return useMutation<IMutationProduct>(() =>
    request(API_ENDPOINT, CREATE_PRODUCT_MUTATION, inputs),
  )
}

export default useCreateProduct

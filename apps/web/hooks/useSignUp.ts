import { gql } from 'graphql-request'
import { useMutation, UseMutationOptions } from 'react-query'
import { CreateInitialUserInput, User } from '../@types/graphql-generated'
import gqlClient from '../utils/requestClient'

const SIGNUP_MUTATION = gql`
  mutation SIGNUP_MUTATION(
    $email: String!
    $name: String!
    $password: String!
  ) {
    createUser(data: { email: $email, name: $name, password: $password }) {
      id
      email
      name
    }
  }
`

interface IUseSignUpResponse {
  createUser: User
}

function useSignUp(
  data: CreateInitialUserInput,
  options?: UseMutationOptions<IUseSignUpResponse>,
) {
  return useMutation<IUseSignUpResponse>(async () => {
    return gqlClient.request(SIGNUP_MUTATION, data)
  }, options)
}

export default useSignUp

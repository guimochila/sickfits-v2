import { gql } from 'graphql-request'
import { useMutation, UseMutationOptions } from 'react-query'
import { UserAuthenticationWithPasswordResult } from '../@types/graphql-generated'
import gqlClient from '../utils/requestClient'

const SIGNIN_MUTATION = gql`
  mutation SIGNIN_MUTATION($email: String!, $password: String!) {
    authenticateUserWithPassword(email: $email, password: $password) {
      ... on UserAuthenticationWithPasswordSuccess {
        item {
          id
          email
          name
        }
      }
      ... on UserAuthenticationWithPasswordFailure {
        __typename
        message
      }
    }
  }
`

interface IUseSigninProps {
  email: string
  password: string
}

function useSignin(
  { email, password }: IUseSigninProps,
  options?: UseMutationOptions<UserAuthenticationWithPasswordResult>,
) {
  return useMutation<UserAuthenticationWithPasswordResult>(async () => {
    const { authenticateUserWithPassword } = await gqlClient.request(
      SIGNIN_MUTATION,
      { email, password },
    )

    return authenticateUserWithPassword
  }, options)
}

export default useSignin

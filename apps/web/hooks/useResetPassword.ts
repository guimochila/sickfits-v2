import { gql } from 'graphql-request'
import { useMutation, UseMutationOptions } from 'react-query'
import { RedeemUserPasswordResetTokenResult } from '../@types/graphql-generated'
import gqlClient from '../utils/requestClient'

const RESET_PASSWORD_MUTATION = gql`
  mutation RESET_PASSWORD_MUTATION(
    $email: String!
    $token: String!
    $password: String!
  ) {
    redeemUserPasswordResetToken(
      email: $email
      token: $token
      password: $password
    ) {
      code
      message
    }
  }
`

interface IUseResetPasswordProps {
  email: string
  token: string
  password: string
}

interface IUseResetPasswordResponse {
  redeemUserPasswordResetToken: RedeemUserPasswordResetTokenResult
}

function useResetPassword(
  data: IUseResetPasswordProps,
  options?: UseMutationOptions<IUseResetPasswordResponse>,
) {
  return useMutation<IUseResetPasswordResponse>(
    () => gqlClient.request(RESET_PASSWORD_MUTATION, data),
    options,
  )
}

export default useResetPassword

import { gql } from 'graphql-request'
import { useMutation, UseMutationOptions } from 'react-query'
import gqlClient from '../utils/requestClient'

const REQUEST_RESET_MUTATION = gql`
  mutation REQUEST_RESET_MUTATION($email: String!) {
    sendUserPasswordResetLink(email: $email)
  }
`

interface IUseRequestResetResponse {
  sendUserPasswordResetLink: boolean
}

function useRequestReset(email: string, options?: UseMutationOptions) {
  return useMutation<IUseRequestResetResponse>(
    () => gqlClient.request(REQUEST_RESET_MUTATION, { email }),
    options,
  )
}

export default useRequestReset

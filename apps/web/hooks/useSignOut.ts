import { gql } from 'graphql-request'
import { useMutation, UseMutationOptions } from 'react-query'
import gqlClient from '../utils/requestClient'

const SIGNOUT_MUTATION = gql`
  mutation SIGNOUT_MUTATION {
    endSession
  }
`

interface IUseSignOutResponse {
  endSession: boolean
}

function useSignOut(options?: UseMutationOptions<IUseSignOutResponse>) {
  return useMutation<IUseSignOutResponse>(
    () => gqlClient.request(SIGNOUT_MUTATION),
    options,
  )
}

export default useSignOut

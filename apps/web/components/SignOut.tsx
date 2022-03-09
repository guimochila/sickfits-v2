import { ReactNode } from 'react'
import { useQueryClient } from 'react-query'
import useSignOut from '../hooks/useSignOut'

interface ISignOutProps {
  children: ReactNode
}

function SignOut({ children }: ISignOutProps) {
  const queryClient = useQueryClient()
  const signoutMutation = useSignOut({
    onSuccess: () => {
      queryClient.invalidateQueries('user')
    },
  })

  return (
    <button
      type="button"
      onClick={() => {
        signoutMutation.mutate()
      }}
    >
      {children}
    </button>
  )
}

export default SignOut

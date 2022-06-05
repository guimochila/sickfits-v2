import { ReactElement } from 'react'
import useUser from '../hooks/useUser'
import SignIn from './SignIn'

interface IProps {
  children: ReactElement
}

function PleaseSignIn({ children }: IProps) {
  const { data } = useUser()

  if (!data?.id) return <SignIn />

  return children
}

export default PleaseSignIn

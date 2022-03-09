import { FormEvent, useState } from 'react'
import { useQueryClient } from 'react-query'
import useForm from '../hooks/useForm'
import useSignin from '../hooks/useSignin'
import DisplayError from './DisplayError'
import Form from './styled/Form'

function SignIn() {
  const queryClient = useQueryClient()
  const [error, setError] = useState<Record<'message', string> | null>(null)
  const { inputs, handleChange, resetForm } = useForm({
    email: '',
    password: '',
  })
  const signInMutation = useSignin(
    { email: inputs.email, password: inputs.password },
    {
      onSuccess: async (data) => {
        if (data.__typename === 'UserAuthenticationWithPasswordFailure') {
          setError(data)
          return
        }
        queryClient.invalidateQueries('user')
        resetForm()
      },
    },
  )

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    signInMutation.mutate()
  }

  return (
    <Form method="post" onSubmit={handleSubmit}>
      <DisplayError error={error} />
      <h2>Sign Into Your Account</h2>
      <fieldset>
        <label htmlFor="email">
          Email
          <input
            type="email"
            name="email"
            placeholder="Your email address"
            autoComplete="email"
            value={inputs.email}
            onChange={handleChange}
          />
        </label>
        <label htmlFor="password">
          Password
          <input
            type="password"
            name="password"
            placeholder="Your password address"
            autoComplete="password"
            value={inputs.password}
            onChange={handleChange}
          />
        </label>
        <button type="submit">Sign In!</button>
      </fieldset>
    </Form>
  )
}

export default SignIn

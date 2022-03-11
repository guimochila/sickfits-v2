import { useRouter } from 'next/router'
import { FormEvent, useState } from 'react'
import useForm from '../hooks/useForm'
import useSignUp from '../hooks/useSignUp'
import DisplayError from './DisplayError'
import Form from './styled/Form'

function SignUp() {
  const [error, setError] = useState<Record<'message', string> | null>(null)
  const router = useRouter()
  const { inputs, handleChange, resetForm } = useForm({
    email: '',
    name: '',
    password: '',
  })
  const signUpMutation = useSignUp(
    { email: inputs.email, password: inputs.password, name: inputs.name },
    {
      onSuccess: async (data) => {
        router.push({
          pathname: '/thankyou',
          query: { email: data.createUser.email },
        })
      },
      onError: () => {
        setError({
          message: 'Oops! Something went wrong! Please try it again.',
        })
      },
    },
  )

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    signUpMutation.mutate()
  }

  return (
    <Form method="post" onSubmit={handleSubmit}>
      <DisplayError error={error} />
      <h2>Sign Up Your Account</h2>
      <fieldset>
        <label htmlFor="name">
          Your Name
          <input
            type="text"
            name="name"
            placeholder="Your name "
            autoComplete="name"
            value={inputs.name}
            onChange={handleChange}
          />
        </label>
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
        <button type="submit">Sign Up!</button>
      </fieldset>
    </Form>
  )
}

export default SignUp

import { FormEvent, useState } from 'react'
import useForm from '../hooks/useForm'
import useResetPassword from '../hooks/useResetPassword'
import DisplayError from './DisplayError'
import Form from './styled/Form'

interface IResetPasswordProps {
  token: string
}

function ResetPassword({ token }: IResetPasswordProps) {
  const [error, setError] = useState<Record<'message', string> | null>(null)
  const { inputs, handleChange, resetForm } = useForm({
    email: '',
    password: '',
    confirmPassword: '',
  })
  const resetMutation = useResetPassword(
    { email: inputs.email, password: inputs.password, token },
    {
      onSuccess: async ({ redeemUserPasswordResetToken }) => {
        if (redeemUserPasswordResetToken?.code) {
          setError(redeemUserPasswordResetToken)
          return
        }
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
    const target = e.target as typeof e.target & {
      password: { value: string }
      confirmPassword: { value: string }
    }
    if (target.password.value !== target.confirmPassword.value) {
      setError({ message: 'Passwords does not match!' })
      return
    }
    resetMutation.mutate()
    resetForm()
  }

  return (
    <Form method="post" onSubmit={handleSubmit}>
      <DisplayError error={error} />
      <h2>Reset Password</h2>
      <fieldset aria-disabled={resetMutation.isLoading}>
        <label htmlFor="email">
          Email
          <input
            type="email"
            name="email"
            placeholder="Your email address"
            autoComplete="email"
            required
            value={inputs.email}
            onChange={handleChange}
          />
        </label>
        <label htmlFor="password">
          New Password
          <input
            type="password"
            name="password"
            placeholder="Your password address"
            autoComplete="password"
            required
            value={inputs.password}
            onChange={handleChange}
          />
        </label>
        <label htmlFor="confirmPassword">
          Confirm Password
          <input
            type="password"
            name="confirmPassword"
            placeholder="Your password address"
            autoComplete="confirmPassword"
            required
            value={inputs.confirmPassword}
            onChange={handleChange}
          />
        </label>
        <button type="submit">Reset password</button>
      </fieldset>
    </Form>
  )
}

export default ResetPassword

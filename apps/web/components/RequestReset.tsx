import { useRouter } from 'next/router'
import { FormEvent, useState } from 'react'
import useForm from '../hooks/useForm'
import useRequestReset from '../hooks/useRequestReset'
import DisplayError from './DisplayError'
import Form from './styled/Form'

function RequestReset() {
  const [error, setError] = useState<Record<'message', string> | null>(null)
  const router = useRouter()
  const { inputs, handleChange, resetForm } = useForm({
    email: '',
  })
  const resetMutation = useRequestReset(inputs.email)

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    resetMutation.mutate()
  }

  return (
    <Form method="post" onSubmit={handleSubmit}>
      <DisplayError error={error} />
      {resetMutation.data?.sendUserPasswordResetLink ? <p>Success!</p> : null}
      <h2>Request Password reset</h2>
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

        <button type="submit">Request Reset</button>
      </fieldset>
    </Form>
  )
}

export default RequestReset

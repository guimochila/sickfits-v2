import {
  CardElement,
  Elements,
  useElements,
  useStripe,
} from '@stripe/react-stripe-js'
import nProgress from 'nprogress'
import { FormEvent, useState } from 'react'

import CheckoutForm from './styled/CheckoutForm'
import SickButton from './styled/SickButton'

function Checkout() {
  const [error, setError] = useState<string | undefined>(undefined)
  const [loading, setLoading] = useState(false)
  const stripe = useStripe()
  const elements = useElements()

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const cardElement = elements?.getElement(CardElement)

    setLoading(true)
    nProgress.start()

    if (!cardElement) {
      return
    }

    const response = await stripe?.createPaymentMethod({
      type: 'card',
      card: cardElement,
    })

    if (!response) {
      return
    }

    const { error, paymentMethod } = response

    if (error) {
      setError(error.message)
      return
    }

    console.log(paymentMethod)
    setLoading(false)
    nProgress.done()
  }

  return (
    <CheckoutForm onSubmit={handleSubmit}>
      <CardElement />
      <SickButton>Check out now</SickButton>
    </CheckoutForm>
  )
}

export default Checkout

import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js'
import nProgress from 'nprogress'
import { FormEvent, useState } from 'react'
import useOrder from '../hooks/useOrder'

import CheckoutForm from './styled/CheckoutForm'
import SickButton from './styled/SickButton'

function Checkout() {
  const [error, setError] = useState<string | undefined>(undefined)
  const [loading, setLoading] = useState(false)
  const stripe = useStripe()
  const elements = useElements()
  const orderMutation = useOrder()

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

    if (error?.message) {
      setError(error.message)
      nProgress.done()
      return
    }

    const order = await orderMutation.mutate(paymentMethod?.id)

    console.log(order)

    /* Turn off Loaders */
    setLoading(false)
    nProgress.done()
  }

  return (
    <CheckoutForm onSubmit={handleSubmit}>
      {error && <p style={{ fontSize: 12 }}> {error}</p>}
      {orderMutation.error && <p style={{ fontSize: 12 }}> {error}</p>}
      <CardElement />
      <SickButton>Check out now</SickButton>
    </CheckoutForm>
  )
}

export default Checkout

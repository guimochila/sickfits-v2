import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js'
import { useRouter } from 'next/router'
import nProgress from 'nprogress'
import { FormEvent, useState } from 'react'
import { useCart } from '../context/CartContext'
import useOrder from '../hooks/useOrder'

import CheckoutForm from './styled/CheckoutForm'
import SickButton from './styled/SickButton'

function Checkout() {
  const [error, setError] = useState<string | undefined>(undefined)
  const [loading, setLoading] = useState(false)
  const stripe = useStripe()
  const elements = useElements()
  const router = useRouter()
  const { closeCart } = useCart()
  const orderMutation = useOrder({
    onSuccess: order => {
      router.push({
        pathname: '/order/[id]',
        query: { id: order.checkout.id },
      })

      closeCart()
      /* Turn off Loaders */
      setLoading(false)
      nProgress.done()
    },
    onError: error => {
      console.error(error)
      setError(error.message)
      nProgress.done()
      return
    },
  })

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

    await orderMutation.mutate(paymentMethod?.id)
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

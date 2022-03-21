import { Elements } from '@stripe/react-stripe-js'
import { loadStripe } from '@stripe/stripe-js'
import { ReactNode } from 'react'

const stripeLib = loadStripe(process.env.NEXT_PUBLIC_STRIPE_KEY as string)

interface ICheckoutContainerProps {
  children: ReactNode
}

function CheckoutContainer({ children }: ICheckoutContainerProps) {
  return <Elements stripe={stripeLib}>{children}</Elements>
}

export default CheckoutContainer

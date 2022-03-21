import { useCart } from '../context/CartContext'
import useUser from '../hooks/useUser'
import calcTotalPrice from '../utils/calcTotalPrice'
import formatMoney from '@sickfits/utils'
import CartItem from './CartItem'
import Checkout from './Checkout'
import CheckoutContainer from './CheckoutContainer'
import CartStyled from './styled/CartStyled'
import CloseButton from './styled/CloseButton'
import Supreme from './styled/Supreme'

function Cart() {
  const { data: user } = useUser()
  const { cartOpen, closeCart } = useCart()

  if (!user) {
    return null
  }

  return (
    <CartStyled open={cartOpen}>
      <header>
        <Supreme>{user.name}&apos;s Cart</Supreme>
        <CloseButton onClick={closeCart}>&times;</CloseButton>
      </header>
      <ul>
        {user.cart.map(cartItem => (
          <CartItem key={cartItem.id} cartItem={cartItem} />
        ))}
      </ul>
      <footer>
        <p>{formatMoney(calcTotalPrice(user.cart))}</p>
        <CheckoutContainer>
          <Checkout />
        </CheckoutContainer>
      </footer>
    </CartStyled>
  )
}

export default Cart

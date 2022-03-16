import Link from 'next/link'
import { useCart } from '../../context/CartContext'
import useUser from '../../hooks/useUser'
import CartCount from '../CartCount'
import SignOut from '../SignOut'
import NavStyled from '../styled/NavStyled'

function Nav() {
  const user = useUser()
  const { openCart } = useCart()

  return (
    <NavStyled>
      <Link href="/products">Products</Link>
      {user.data ? (
        <>
          <Link href="/sell">Sell</Link>
          <Link href="/orders">Orders</Link>
          <Link href="/account">Account</Link>
          <SignOut>Sign Out</SignOut>
          <button type="button" onClick={openCart}>
            My Cart
            <CartCount
              count={user.data.cart.reduce(
                (total, cartItem) => total + cartItem.quantity,
                0,
              )}
            />
          </button>
        </>
      ) : (
        <Link href="/signin">Sign In</Link>
      )}
    </NavStyled>
  )
}

export default Nav

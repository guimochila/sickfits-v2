import Link from 'next/link'
import useUser from '../../hooks/useUser'
import SignOut from '../SignOut'
import NavStyled from '../styled/NavStyled'

function Nav() {
  const user = useUser()

  return (
    <NavStyled>
      <Link href="/products">Products</Link>
      {user.data ? (
        <>
          <Link href="/sell">Sell</Link>
          <Link href="/orders">Orders</Link>
          <Link href="/account">Account</Link>
          <SignOut>Sign Out</SignOut>
        </>
      ) : (
        <Link href="/signin">Sign In</Link>
      )}
    </NavStyled>
  )
}

export default Nav

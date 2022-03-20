import Link from 'next/link'
import Cart from '../Cart'
import Search from '../Search'
import HeaderStyled from '../styled/HeaderStyled'
import Logo from '../styled/Logo'
import Nav from './Nav'

function Header() {
  return (
    <HeaderStyled>
      <div className="bar">
        <Logo>
          <Link href="/">Sick fits</Link>
        </Logo>
        <Nav />
      </div>
      <div className="sub-bar">
        <Search />
      </div>
      <Cart />
    </HeaderStyled>
  )
}

export default Header

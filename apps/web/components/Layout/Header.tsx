import Link from 'next/link'
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
      </div>
      <div className="sub-bar">
        <p>Search</p>
      </div>
      <Nav />
    </HeaderStyled>
  )
}

export default Header

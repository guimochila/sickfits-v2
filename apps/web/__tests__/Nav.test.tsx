import { renderWithClient } from '../utils/queryTestUtils'
import { screen } from '@testing-library/react'
import Nav from '../components/Layout/Nav'
import { CartProvider } from '../context/CartContext'

describe('<Nav />', () => {
  it('Renders the basic nav when signed out', () => {
    const { container } = renderWithClient(
      <CartProvider>
        <Nav />
      </CartProvider>,
    )

    expect(container).toHaveTextContent('Sign In')
    const signInLink = screen.getByText('Sign In')
    expect(signInLink).toHaveAttribute('href', '/signin')

    const productsLink = screen.getByText('Products')
    expect(productsLink).toHaveAttribute('href', '/products')
  })

  it('renders the full nav bar when is signed in', async () => {
    sessionStorage.setItem('is-authenticated', 'yes')
    const { container } = renderWithClient(
      <CartProvider>
        <Nav />
      </CartProvider>,
    )

    await screen.findByText('Account')
    expect(container).toHaveTextContent('Sign Out')
    expect(container).toHaveTextContent('My Cart')
  })

  it('renders the amount of items in the cart', async () => {
    sessionStorage.setItem('is-authenticated', 'yesWithCartItems')
    renderWithClient(
      <CartProvider>
        <Nav />
      </CartProvider>,
    )

    await screen.findByText('Account')
    expect(screen.getByText('3')).toBeInTheDocument()
  })
})

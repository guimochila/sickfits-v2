import Product from '../components/Product'
import { renderWithClient } from '../utils/queryTestUtils'
import { screen } from '@testing-library/react'
import { fakeItem } from '../utils/testUtils'

const product = fakeItem()

describe('<Product/>', () => {
  it('renders out the price tag and title', () => {
    const { container } = renderWithClient(<Product product={product} />)
    const priceTag = screen.getByText('€50')
    expect(priceTag).toBeInTheDocument()

    const link = container.querySelector('a')
    expect(link).toHaveAttribute('href', '/product/abc123')
    expect(link).toHaveTextContent(product.name)
  })

  it('Renders and matches the snapshot', () => {
    const { container } = renderWithClient(<Product product={product} />)

    expect(container).toMatchSnapshot()
  })

  it('renders the image properly', () => {
    const { container } = renderWithClient(<Product product={product} />)

    const img = screen.getByAltText(product.name)
    expect(img).toBeInTheDocument()
  })
})

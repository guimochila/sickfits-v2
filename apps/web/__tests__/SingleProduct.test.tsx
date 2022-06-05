import { screen } from '@testing-library/react'
import SingleProduct from '../components/SingleProduct'
import { renderWithClient } from '../utils/queryTestUtils'

describe('<SingleProduct />', () => {
  it('renders with proper data', async () => {
    renderWithClient(<SingleProduct id="abc123" />)

    await screen.findAllByTestId('singleProduct')
  })

  it('Errors out when an item is not found.', async () => {
    const { container } = renderWithClient(<SingleProduct id="abc222" />)

    await screen.findAllByTestId('graphql-error')
    expect(container).toHaveTextContent('Shoot!')
    expect(container).toHaveTextContent('Item not found!')
  })
})

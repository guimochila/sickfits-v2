import { renderWithClient } from '../utils/queryTestUtils'
import { screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { RouterContext } from 'next/dist/shared/lib/router-context'
import CreateProduct from '../components/CreateProduct'
import { fakeItem } from '../utils/testUtils'
import { createMockRouter } from '../utils/createMockRouter'

const item = fakeItem()

describe('<CreateProduct/>', () => {
  it('renders and matches snapshots', () => {
    const { container } = renderWithClient(<CreateProduct />)

    expect(container).toMatchSnapshot()
  })

  it('handles the updating', async () => {
    renderWithClient(<CreateProduct />)

    await userEvent.type(screen.getByPlaceholderText('Name'), item.name)
    await userEvent.type(
      screen.getByPlaceholderText('Price'),
      item.price.toString(),
    )
    await userEvent.type(
      screen.getByPlaceholderText('Description'),
      item.description,
    )
    expect(screen.getByDisplayValue(item.name)).toBeInTheDocument()
    expect(screen.getByDisplayValue(item.price)).toBeInTheDocument()
    expect(screen.getByDisplayValue(item.description)).toBeInTheDocument()
  })

  it('create the item when the form is submitted', async () => {
    const router = createMockRouter({})
    const { container, debug } = renderWithClient(
      <RouterContext.Provider value={router}>
        <CreateProduct />
      </RouterContext.Provider>,
    )

    await userEvent.type(screen.getByPlaceholderText('Name'), item.name)
    await userEvent.type(
      screen.getByPlaceholderText('Price'),
      item.price.toString(),
    )
    await userEvent.type(
      screen.getByPlaceholderText('Description'),
      item.description,
    )

    const button = screen.getByRole('button')
    screen.debug(button)

    await userEvent.click(button)

    await waitFor(() => {
      expect(router.push).toHaveBeenCalledWith({
        pathname: '/products/abc123',
      })
    })
  })
})

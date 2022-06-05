import { renderWithClient } from '../utils/queryTestUtils'
import { screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import RequestReset from '../components/RequestReset'
import { RouterContext } from 'next/dist/shared/lib/router-context'
import { createMockRouter } from '../utils/createMockRouter'

const email = 'testing@test.com'

describe('<RequestReset/>', () => {
  it('renders and matches snapshot', () => {
    const router = createMockRouter({})
    const { container } = renderWithClient(
      <RouterContext.Provider value={router}>
        <RequestReset />
      </RouterContext.Provider>,
    )

    expect(container).toMatchSnapshot()
  })

  it('calls the mutation when submitted', async () => {
    const router = createMockRouter({})
    const { container, debug } = renderWithClient(
      <RouterContext.Provider value={router}>
        <RequestReset />
      </RouterContext.Provider>,
    )

    await userEvent.type(
      screen.getByPlaceholderText('Your email address'),
      email,
    )
    await userEvent.click(screen.getByText(/Request Reset/))
    const successMessage = await screen.findByText(/Success!/i)
    expect(successMessage).toBeInTheDocument()
  })
})

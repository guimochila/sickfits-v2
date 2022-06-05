import { renderWithClient } from '../utils/queryTestUtils'
import { screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import SignUp from '../components/SignUp'
import { fakeUser } from '../utils/testUtils'
import { RouterContext } from 'next/dist/shared/lib/router-context'
import { createMockRouter } from '../utils/createMockRouter'

const me = fakeUser()
const password = 'testing123'

describe('<SignUp />', () => {
  it('renders and match snapshot', () => {
    const { container } = renderWithClient(<SignUp />)

    expect(container).toMatchSnapshot()
  })

  it('calls the mutation properly', async () => {
    const router = createMockRouter({})
    const { container, debug } = renderWithClient(
      <RouterContext.Provider value={router}>
        <SignUp />
      </RouterContext.Provider>,
    )

    await userEvent.type(screen.getByPlaceholderText('Your name'), me.name)
    await userEvent.type(
      screen.getByPlaceholderText('Your email address'),
      me.email,
    )
    await userEvent.type(screen.getByPlaceholderText('Your password'), password)
    await userEvent.click(screen.getByText('Sign Up!'))

    expect(router.push).toHaveBeenCalledWith({
      pathname: '/thankyou',
      query: { email: me.email },
    })
  })
})

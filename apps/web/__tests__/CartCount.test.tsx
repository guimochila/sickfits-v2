import { renderWithClient } from '../utils/queryTestUtils'
import CartCount from '../components/CartCount'
import { waitFor } from '@testing-library/react'

describe('<CartCount/>', () => {
  it('renders', () => {
    renderWithClient(<CartCount count={1} />)
  })

  it('Matches Snapshot', () => {
    const { container } = renderWithClient(<CartCount count={1} />)
    expect(container).toMatchSnapshot()
  })

  it('Update via props', async () => {
    const { container, rerender } = renderWithClient(<CartCount count={1} />)
    expect(container.textContent).toBe('1')

    rerender(<CartCount count={2} />)
    await waitFor(() => {
      expect(container.textContent).toBe('2')
    })
  })
})

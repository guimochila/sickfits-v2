import { renderWithClient } from '../utils/queryTestUtils'
import { screen } from '@testing-library/react'
import Pagination from '../components/Pagination'

describe('<Pagination/>', () => {
  it('displays a loading message', () => {
    const { container } = renderWithClient(<Pagination page={1} />)

    expect(container).toHaveTextContent('Loading...')
  })

  it('renders pagination for 18 items', async () => {
    renderWithClient(<Pagination page={1} />)

    await screen.findByTestId('pagination')
    const pageCountSpan = screen.getByTestId('pageCount')
    expect(pageCountSpan).toHaveTextContent('5')
  })

  it('disables the prev page on the first page', async () => {
    renderWithClient(<Pagination page={1} />)

    await screen.findByTestId('pagination')
    const prevButton = screen.getByText(/Prev/)
    const nextButton = screen.getByText(/Next/)

    expect(prevButton).toHaveAttribute('aria-disabled', 'true')
    expect(nextButton).toHaveAttribute('aria-disabled', 'false')
  })

  it('disables the next page on the last page', async () => {
    renderWithClient(<Pagination page={5} />)

    await screen.findByTestId('pagination')
    const prevButton = screen.getByText(/Prev/)
    const nextButton = screen.getByText(/Next/)

    expect(prevButton).toHaveAttribute('aria-disabled', 'false')
    expect(nextButton).toHaveAttribute('aria-disabled', 'true')
  })

  it('enables prev page and next page in the middle page', async () => {
    renderWithClient(<Pagination page={3} />)

    await screen.findByTestId('pagination')

    const prevButton = screen.getByText(/Prev/)
    const nextButton = screen.getByText(/Next/)

    expect(prevButton).toHaveAttribute('aria-disabled', 'false')
    expect(nextButton).toHaveAttribute('aria-disabled', 'false')
  })
})

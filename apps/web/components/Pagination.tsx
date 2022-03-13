import Head from 'next/head'
import Link from 'next/link'
import { perPage } from '../config'
import useProductsCount from '../hooks/useProductsCount'
import DisplayError from './DisplayError'
import PaginationStyles from './styled/PaginationStyled'

interface IPaginationProps {
  page: number
}

function Pagination({ page }: IPaginationProps) {
  const productsCounter = useProductsCount()

  if (productsCounter.isLoading) {
    return <p>Loading...</p>
  }

  if (productsCounter.isSuccess) {
    const { productsCount } = productsCounter.data
    const pageCount = Math.ceil(productsCount / perPage)

    return (
      <PaginationStyles>
        <Head>
          <title>
            Sick Fits - Page {page} of {pageCount}
          </title>
        </Head>

        <Link href={`/products/${page - 1}`}>
          <a aria-disabled={page <= 1}>← Prev</a>
        </Link>
        <p>
          Page {page} of {pageCount}
        </p>
        <p>{productsCount} Items Total</p>
        <Link href={`/products/${page + 1}`}>
          <a aria-disabled={page >= pageCount}>Next →</a>
        </Link>
      </PaginationStyles>
    )
  }

  return <DisplayError error={productsCounter.error} />
}

export default Pagination

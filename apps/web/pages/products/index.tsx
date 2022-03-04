import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import Pagination from '../../components/Pagination'
import Products from '../../components/Products'

const ProductsPage: NextPage = () => {
  const { query } = useRouter()

  const page = query.page ? parseInt(query.page as string) : 1

  return (
    <div>
      <Pagination page={page} />
      <Products page={page} />
      <Pagination page={page} />
    </div>
  )
}

export default ProductsPage

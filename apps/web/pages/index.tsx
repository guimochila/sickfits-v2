import type { NextPage } from 'next'
import Pagination from '../components/Pagination'
import Products from '../components/Products'

const Home: NextPage = () => {
  return (
    <div>
      <Pagination page={1} />
      <Products />
      <Pagination page={1} />
    </div>
  )
}

export default Home

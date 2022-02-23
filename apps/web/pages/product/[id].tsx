import { NextPage } from 'next'
import { useRouter } from 'next/router'
import SingleProduct from '../../components/SingleProduct'

const SingleProductPage: NextPage = () => {
  const router = useRouter()
  const { id } = router.query

  if (typeof id !== 'string') {
    return null
  }

  return <SingleProduct id={id} />
}

export default SingleProductPage

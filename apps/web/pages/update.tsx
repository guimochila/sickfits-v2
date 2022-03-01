import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import UpdateProduct from '../components/UpdateProduct'

const UpdatePage: NextPage = () => {
  const router = useRouter()

  return (
    <div>
      <UpdateProduct id={router.query.id as string} />
    </div>
  )
}

export default UpdatePage

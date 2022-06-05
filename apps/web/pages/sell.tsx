import type { NextPage } from 'next'
import CreateProduct from '../components/CreateProduct'
import PleaseSignIn from '../components/PleaseSignIn'

const SellPage: NextPage = () => {
  return (
    <div>
      <PleaseSignIn>
        <CreateProduct />
      </PleaseSignIn>
    </div>
  )
}

export default SellPage

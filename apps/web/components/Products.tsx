import styled from '@emotion/styled'
import { perPage } from '../config'
import useProducts from '../hooks/useProducts'
import Product from './Product'

const ProductsList = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 60px;
`

interface IProductsProps {
  page: number
}

function Products({ page }: IProductsProps) {
  const skip = page * perPage - perPage
  const productsQuery = useProducts({ skip, take: perPage })

  if (productsQuery.isLoading) return <p>Loading</p>

  if (productsQuery.isSuccess) {
    return (
      <ProductsList>
        {productsQuery.data.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </ProductsList>
    )
  }

  throw new Error('This should be impossible')
}

export default Products

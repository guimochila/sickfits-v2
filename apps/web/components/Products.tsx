import styled from '@emotion/styled'
import useProducts from '../hooks/useProducts'

const ProductsList = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 60px;
`

function Products() {
  const { status, data, error, isLoading } = useProducts()

  if (isLoading) return <p>Loading</p>

  console.log(data)

  return (
    <ProductsList>
      {data.map((product) => (
        <p key={product.id}>{product.name}</p>
      ))}
    </ProductsList>
  )
}

export default Products

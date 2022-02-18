import useProducts from '../hooks/useProducts'

function Products() {
  const { status, data, error, isLoading } = useProducts()

  if (isLoading) return <p>Loading</p>

  console.log(data)

  return (
    <div>
      {data.map((product) => (
        <p key={product.id}>{product.name}</p>
      ))}
    </div>
  )
}

export default Products

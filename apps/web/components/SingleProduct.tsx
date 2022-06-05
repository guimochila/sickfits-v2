import Head from 'next/head'
import Image from 'next/image'
import useProduct from '../hooks/useProduct'
import DisplayError from './DisplayError'
import ProductStyled from './styled/ ProductStyles'

interface ISingleProductProps {
  id: string
}

function SingleProduct({ id }: ISingleProductProps) {
  const product = useProduct(id)

  if (product.isLoading) {
    return <p>Loading...</p>
  }

  if (product.isSuccess) {
    const { name, description, photo } = product.data

    return (
      <ProductStyled data-testid="singleProduct">
        <Head>
          <title>Sick Fits | {name}</title>
        </Head>
        <Image
          src={photo.image.publicUrlTransformed}
          alt={name}
          width={450}
          height={300}
        />
        <div className="details">
          <h2>{name}</h2>
          <p>{description}</p>
        </div>
      </ProductStyled>
    )
  }

  return <DisplayError error={product.error} />
}

export default SingleProduct

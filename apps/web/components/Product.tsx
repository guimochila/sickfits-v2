import Image from 'next/image'
import Link from 'next/link'
import type { Product as TProduct } from '../@types/graphql-generated'
import formatMoney from '../utils/formatMoney'
import Item from './styled/Item'
import PriceTag from './styled/PriceTag'
import Title from './styled/Title'

interface IProductProps {
  product: TProduct
}

function Product({ product }: IProductProps) {
  return (
    <Item>
      {product.name}
      <Image
        src={product.photo?.image?.publicUrlTransformed || ''}
        alt={product.name || 'Product image'}
        width={250}
        height={250}
      />
      <Title>
        <Link href={`/product/${product.id}`}>{product.name}</Link>
      </Title>
      <PriceTag>{formatMoney(product.price!)}</PriceTag>
      <p>{product.description}</p>
    </Item>
  )
}

export default Product

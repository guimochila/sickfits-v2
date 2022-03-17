import Image from 'next/image'
import { CartItem } from '../@types/graphql-generated'
import formatMoney from '../utils/formatMoney'
import RemoveFromCart from './RemoveFromCart'
import CartItemStyled from './styled/CartItemStyled'

interface ICartItemProps {
  cartItem: CartItem
}

function CartItem({ cartItem }: ICartItemProps) {
  const { product } = cartItem

  if (!product) return null

  return (
    <CartItemStyled>
      <Image
        src={product.photo.image.publicUrlTransformed}
        alt={product.name}
        width={100}
        height={100}
      />
      <div>
        <h3>{product.name}</h3>
        <p>
          {formatMoney(product.price * cartItem.quantity)}-
          <em>
            {cartItem.quantity} &times; {formatMoney(product.price)} each
          </em>
        </p>
      </div>
      <RemoveFromCart id={cartItem.id} />
    </CartItemStyled>
  )
}

export default CartItem

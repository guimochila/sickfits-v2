import { CartItem } from '../@types/graphql-generated'

function calcTotalPrice(cart: CartItem[]) {
  return cart.reduce((total, cartItem) => {
    if (!cartItem.product) return total

    return total + cartItem.quantity * cartItem.product.price
  }, 0)
}

export default calcTotalPrice

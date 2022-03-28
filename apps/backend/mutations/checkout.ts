import { KeystoneContext } from '@keystone-6/core/types'
import stripeConfig from '../lib/stripe'

const graphql = String.raw

async function checkout(
  root: any,
  { token }: { token: string },
  context: KeystoneContext,
) {
  const userId = context.session?.itemId
  if (!userId) {
    throw new Error('Sorry! You must be signed in to create an order')
  }

  const user = await context.query.User.findOne({
    where: { id: userId },
    query: graphql`
      id
      name
      email
      cart {
        id
        quantity
        product {
          name
          price
          description
          photo {
            id
            image {
              id
              publicUrlTransformed
            }
          }
        }
      }
    `,
  })

  const cartItems = user.cart.filter(cartItem => cartItem.product)
  const amount = cartItems.reduce((total, cartItem) => {
    return total + cartItem.quantity * cartItem.product.price
  }, 0)

  const charge = await stripeConfig.paymentIntents
    .create({
      amount,
      currency: 'EUR',
      confirm: true,
      payment_method: token,
    })
    .catch(error => {
      console.log(error)
      throw new Error(error)
    })

  const orderItems = cartItems.map(cartItem => {
    const orderItem = {
      name: cartItem.product.name,
      description: cartItem.product.description,
      price: cartItem.product.price,
      quantity: cartItem.quantity,
      photo: { connect: { id: cartItem.product.photo.id } },
    }

    return orderItem
  })

  const order = await context.db.Order.createOne({
    data: {
      total: charge.amount,
      charge: charge.id,
      items: { create: orderItems },
      user: { connect: { id: userId } },
    },
  })

  const cartItemIds = cartItems.map(cartItem => cartItem.id)
  await context.db.CartItem.deleteMany({
    where: cartItemIds.map((id: string) => ({ id })),
  })

  return order
}

export default checkout

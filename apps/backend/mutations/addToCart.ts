import { KeystoneContext } from '@keystone-6/core/types'

async function addToCart(
  root: any,
  { productId }: { productId: string },
  context: KeystoneContext,
) {
  const { session, query } = context

  if (!session.itemId) {
    throw new Error('You must be logged in.')
  }

  const allCartItems = await query.CartItem.findMany({
    where: {
      user: { id: { equals: session.itemId } },
      product: { id: { equals: productId } },
    },
    query: 'id quantity',
  })

  const [existingCartItem] = allCartItems

  if (existingCartItem) {
    return await query.CartItem.updateOne({
      where: { id: existingCartItem.id },
      data: { quantity: existingCartItem.quantity + 1 },
    })
  }

  return await query.CartItem.createOne({
    data: {
      product: { connect: { id: productId } },
      user: { connect: { id: session.itemId } },
    },
  })
}

export default addToCart

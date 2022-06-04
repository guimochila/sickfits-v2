import { list } from '@keystone-6/core'
import { integer, relationship } from '@keystone-6/core/fields'
import { isSignedIn, rules } from '../access'

const CartItem = list({
  access: {
    operation: {
      create: isSignedIn,
    },
    filter: {
      query: rules.canOrder,
      update: rules.canOrder,
      delete: rules.canOrder,
    },
  },
  fields: {
    quantity: integer({
      defaultValue: 1,
      validation: { isRequired: true },
    }),
    product: relationship({ ref: 'Product' }),
    user: relationship({ ref: 'User.cart' }),
  },
})

export { CartItem }

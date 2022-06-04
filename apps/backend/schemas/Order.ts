import { graphql, list } from '@keystone-6/core'
import { integer, relationship, text, virtual } from '@keystone-6/core/fields'
import formatMoney from '@sickfits/utils'
import { isSignedIn, rules } from '../access'

const Order = list({
  access: {
    operation: {
      create: isSignedIn,
      update: () => false,
      delete: () => false,
    },
    filter: {
      query: rules.canOrder,
    },
  },
  fields: {
    label: virtual({
      field: graphql.field({
        type: graphql.String,
        resolve(item: any) {
          return `${formatMoney(item.total)}`
        },
      }),
    }),
    total: integer(),
    items: relationship({ ref: 'OrderItem.order', many: true }),
    user: relationship({ ref: 'User.orders' }),
    charge: text(),
  },
})

export { Order }

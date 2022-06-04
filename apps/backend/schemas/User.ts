import { list } from '@keystone-6/core'
import { password, relationship, text } from '@keystone-6/core/fields'
import { permissions, rules } from '../access'

const User = list({
  access: {
    operation: {
      create: () => true,
      delete: permissions.canManageUsers,
    },
    filter: {
      query: rules.canManageUsers,
      update: rules.canManageUsers,
    },
  },
  ui: {
    hideDelete: args => !permissions.canManageUsers(args),
    hideCreate: args => !permissions.canManageUsers(args),
  },
  fields: {
    name: text({ validation: { isRequired: true }, isIndexed: true }),
    email: text({ validation: { isRequired: true }, isIndexed: 'unique' }),
    password: password(),
    cart: relationship({
      ref: 'CartItem.user',
      many: true,
      ui: {
        createView: { fieldMode: 'hidden' },
        itemView: { fieldMode: 'read' },
      },
    }),
    orders: relationship({ ref: 'Order.user', many: true }),
    role: relationship({
      ref: 'Role.assignedTo',
      access: {
        create: permissions.canManageUsers,
      },
    }),
    products: relationship({ ref: 'Product.user', many: true }),
  },
})

export { User }

import { list } from '@keystone-6/core'
import { password, relationship, text } from '@keystone-6/core/fields'

const User = list({
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
  },
})

export { User }

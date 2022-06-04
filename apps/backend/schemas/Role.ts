import { list } from '@keystone-6/core'
import { relationship, text } from '@keystone-6/core/fields'
import { permissionFields } from './fields'

const Role = list({
  fields: {
    name: text({ validation: { isRequired: true } }),
    ...permissionFields,
    assignedTo: relationship({
      ref: 'User.role',
      many: true,
      ui: {
        itemView: {
          fieldMode: 'read',
        },
      },
    }),
  },
})

export { Role }

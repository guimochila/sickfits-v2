import { ListAccessArgs } from './@types/customTypes'
import { Permission, permissionsList } from './schemas/fields'

export function isSignedIn({ session }: { session: ListAccessArgs }) {
  return !!session
}

const generatePermissions = Object.fromEntries(
  permissionsList.map(permission => [
    permission,
    function({ session }: ListAccessArgs) {
      return !!session?.data.role?.[permission]
    },
  ]),
) as Record<Permission, ({ session }: ListAccessArgs) => boolean>

export const permissions = {
  ...generatePermissions,
}

export const rules = {
  // Do they have the permission of canManageProducts?
  canManageProducts({ session }: ListAccessArgs) {
    if (!isSignedIn({ session })) {
      return false
    }

    if (permissions.canManageProducts({ session })) {
      return true
    }

    // If not, do they own this item?
    return { user: { id: { equals: session?.itemId } } }
  },
  canOrder({ session }: ListAccessArgs) {
    if (!isSignedIn({ session })) {
      return false
    }

    if (permissions.canManageCart({ session })) {
      return true
    }

    // If not, do they own this item?
    return { user: { id: { equals: session?.itemId } } }
  },

  canManageOrderItems({ session }: ListAccessArgs) {
    if (!isSignedIn({ session })) {
      return false
    }

    if (permissions.canManageCart(session)) {
      return true
    }

    // If not, do they own this item?
    return { order: { user: { id: { equals: session?.itemId } } } }
  },

  canReadProducts({ session }: ListAccessArgs) {
    if (isSignedIn({ session }) && permissions.canManageProducts({ session })) {
      return true
    }

    return { status: { equals: 'AVAILABLE' } }
  },

  canManageUsers({ session }: ListAccessArgs) {
    if (!isSignedIn({ session })) {
      return false
    }

    if (permissions.canManageUsers({ session })) {
      return true
    }

    // If not, do they own this item?
    return { id: { equals: session?.itemId } }
  },
}

import { CurrentSession } from './@types/customTypes'
import { permissionsList } from './schemas/fields'

export function isSignedIn({ session }: { session: string }) {
  return !!session
}

const generatePermissions = Object.fromEntries(
  permissionsList.map(permission => [
    permission,
    function({ session }: CurrentSession) {
      return !!session?.data.role?.[permission]
    },
  ]),
)

export const permissions = {
  ...generatePermissions,
}

export const rules = {
  // Do they have the permission of canManageProducts?
  canManageProducts({ session }: CurrentSession) {
    if (!isSignedIn({ session })) {
      return false
    }

    if (permissions.canManageProducts(session)) {
      return true
    }

    // If not, do they own this item?
    return { user: { id: { equals: session?.itemId } } }
  },

  canReadProducts({ session }: CurrentSession) {
    if (permissions.canManageProducts(session)) {
      return true
    }

    return { status: { equals: 'AVAILABLE' } }
  },
}

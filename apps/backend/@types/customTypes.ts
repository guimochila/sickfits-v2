import { Permission } from '../schemas/fields'

export type Session = {
  itemId: string
  listKey: string
  data: {
    name: string
    role?: {
      id: string
      name: string
    } & {
      [key in Permission]: boolean
    }
  }
}

export type ListAccessArgs = {
  itemId?: string
  session?: Session
}

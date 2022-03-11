import { config } from '@keystone-6/core'
import { createAuth } from '@keystone-6/auth'
import { statelessSessions } from '@keystone-6/core/session'
import 'dotenv/config'
import { User } from './schemas/User'
import { Product } from './schemas/Product'
import { ProductImage } from './schemas/ProductImage'
import { insertSeedData } from './seed-data'

const databaseUrl = process.env.DATABASE_URL || ''
const port = parseInt(process.env.PORT) || 4000

const sessionConfig = {
  maxAge: 60 * 60 * 24 * 30,
  secret: process.env.COOKIE_SECRET,
}

const { withAuth } = createAuth({
  listKey: 'User',
  identityField: 'email',
  secretField: 'password',
  initFirstItem: {
    fields: ['name', 'email', 'password'],
  },
  sessionData: 'id',
  passwordResetLink: {
    sendToken: async () => {
      console.log('hi')
    },
    tokensValidForMins: 60,
  },
})

export default withAuth(
  config({
    server: {
      cors: {
        origin: [process.env.FRONTEND_URL],
        credentials: true,
      },
      port,
    },
    db: {
      provider: 'sqlite',
      url: 'file:./keystone.db',
      async onConnect(keystone) {
        if (process.argv.includes('--seed-data')) {
          await insertSeedData(keystone)
        }
      },
    },
    lists: {
      User,
      Product,
      ProductImage,
    },
    ui: {
      isAccessAllowed: ({ session }) => !!session,
    },
    session: statelessSessions(sessionConfig),
  }),
)

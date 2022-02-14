import { config } from '@keystone-6/core'
import 'dotenv/config'
import { User } from './schemas/User'

const databaseUrl = process.env.DATABASE_URL || ''
const port = parseInt(process.env.PORT) || 4000

const sessionConfig = {
  maxAge: 60 * 60 * 24 * 30,
  secret: process.env.COOKIE_SECRET,
}

export default config({
  server: {
    cors: {
      origin: [process.env.FRONTEND_URL],
      credentials: true,
    },
    port,
  },
  db: {
    provider: 'postgresql',
    url: databaseUrl,
  },
  lists: {
    User,
  },
  ui: {
    isAccessAllowed: () => true,
  },
})

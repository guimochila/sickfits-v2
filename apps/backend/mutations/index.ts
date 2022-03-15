import { graphQLSchemaExtension } from '@keystone-6/core'
import addToCart from './addToCart'

// Make a fake graphql tagged template literal
const graphql = String.raw
export const extendGraphqlSchema = graphQLSchemaExtension({
  typeDefs: graphql`
    type Mutation {
      addToCart(productId: ID!): CartItem
    }
  `,
  resolvers: {
    Mutation: {
      addToCart,
    },
  },
})

import { GraphQLClient } from 'graphql-request'
import { API_ENDPOINT } from '../config'

const gqlClient = new GraphQLClient(API_ENDPOINT, {
  credentials: 'include',
  mode: 'cors',
})

export default gqlClient

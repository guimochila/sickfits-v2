import { render } from '@testing-library/react'
import { graphql } from 'msw'
import * as React from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'
import { fakeCartItem, fakeItem, fakeUser } from './testUtils'

const product = fakeItem()

export const handlers = [
  // Single Product Query mock
  graphql.query('SINGLE_PRODUCT_QUERY', (req, res, ctx) => {
    const { id } = req.variables

    if (id === product.id) {
      return res(
        ctx.data({
          product,
        }),
      )
    }

    return res(ctx.errors([{ message: 'Item not found!' }]))
  }),

  // Current User Query mock
  graphql.query('CURRENT_USER_QUERY', (req, res, ctx) => {
    const isAuthenticated = sessionStorage.getItem('is-authenticated')

    if (!isAuthenticated) {
      return res(
        ctx.data({
          authenticatedItem: fakeUser(),
        }),
      )
    }

    if (isAuthenticated === 'yesWithCartItems') {
      return res(
        ctx.data({
          authenticatedItem: fakeUser({
            cart: [fakeCartItem()],
          }),
        }),
      )
    }

    return res(
      ctx.data({
        authenticatedItem: fakeUser(),
      }),
    )
  }),

  // Pagination mock
  graphql.query('PAGINATION_QUERY', (req, res, ctx) => {
    return res(
      ctx.data({
        productsCount: 18,
      }),
    )
  }),

  // Signup Mutation mock
  graphql.mutation('SIGNUP_MUTATION', (req, res, ctx) => {
    const { name, email } = req.variables

    return res(
      ctx.data({
        createUser: {
          name,
          email,
        },
      }),
    )
  }),

  // Reset Request Mutation mock
  graphql.mutation('REQUEST_RESET_MUTATION', (req, res, ctx) => {
    const { email } = req.variables

    if (email) {
      return res(
        ctx.data({
          sendUserPasswordResetLink: true,
        }),
      )
    }

    return res(
      ctx.data({
        sendUserPasswordResetLink: null,
      }),
    )
  }),

  // Create Mutation mock
  graphql.mutation('CREATE_PRODUCT_MUTATION', (req, res, ctx) => {
    const { name, price, description } = req.variables

    if (name && price && description) {
      return res(
        ctx.data({
          createProduct: fakeItem(),
        }),
      )
    }

    return res(ctx.errors([{ message: 'Something went wrong' }]))
  }),
]

const createTestQueryClient = () =>
  new QueryClient({
    defaultOptions: {
      queries: {
        retry: false,
      },
    },
  })

export function renderWithClient(ui: React.ReactElement) {
  const testQueryClient = createTestQueryClient()
  const { rerender, ...result } = render(
    <QueryClientProvider client={testQueryClient}>{ui}</QueryClientProvider>,
  )
  return {
    ...result,
    rerender: (rerenderUi: React.ReactElement) =>
      rerender(
        <QueryClientProvider client={testQueryClient}>
          {rerenderUi}
        </QueryClientProvider>,
      ),
  }
}

export function createWrapper() {
  const testQueryClient = createTestQueryClient()
  // eslint-disable-next-line react/display-name
  return ({ children }: { children: React.ReactNode }) => (
    <QueryClientProvider client={testQueryClient}>
      {children}
    </QueryClientProvider>
  )
}

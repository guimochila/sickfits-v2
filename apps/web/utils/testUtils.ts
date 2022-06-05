import casual from 'casual'
import { PAGINATION_QUERY } from '../hooks/useProductsCount'
// seed it so we get consistent results
casual.seed(777)

const fakeItem = (): any => ({
  // __typename: 'Product',
  id: 'abc123',
  price: 5000,
  user: null,
  photo: {
    id: 'abc123',
    altText: 'dogs are best',
    image: {
      publicUrlTransformed: 'http://localhost/dog.jpg',
      id: '5e2a13ff689b2835ae71d1a7',
      filename: 'dog.jpg',
      originalFilename: 'dog.jpg',
      mimetype: 'image/jpeg',
      encoding: '7bit',
      publicUrl: 'http://localhost/dog.jpg',
    },
  },
  name: 'dogs are best',
  description: 'dogs',
  status: 'AVAILABLE',
})

const fakeUser = (overrides = {}) => ({
  __typename: 'User',
  id: '4234',
  name: casual.name,
  email: casual.email,
  permissions: ['ADMIN'],
  orders: [],
  cart: [],
  ...overrides,
})

const fakeOrderItem = () => ({
  __typename: 'OrderItem',
  id: casual.uuid,
  image: {
    image: `${casual.word}.jpg`,
  },
  name: casual.words(),
  price: 4234,
  quantity: 1,
  description: casual.words(),
})

const fakeOrder = () => ({
  __typename: 'Order',
  id: 'ord123',
  charge: 'ch_123',
  total: 40000,
  items: [fakeOrderItem(), fakeOrderItem()],
  createdAt: '2022-12-11T20:16:13.797Z',
  user: fakeUser(),
})

const fakeCartItem = (overrides = {}) => ({
  __typename: 'CartItem',
  id: 'omg123',
  quantity: 3,
  product: fakeItem(),
  user: fakeUser(),
  ...overrides,
})

// Fake LocalStorage
class LocalStorageMock {
  store: any

  constructor() {
    this.store = {}
  }

  clear() {
    this.store = {}
  }

  getItem(key: string) {
    return this.store[key] || null
  }

  setItem(key: string, value: any) {
    this.store[key] = value.toString()
  }

  removeItem(key: string) {
    delete this.store[key]
  }
}

function makePaginationMocksFor(length: number) {
  return [
    {
      request: { query: PAGINATION_QUERY },
      result: {
        data: {
          _allProductsMeta: {
            count: length,
          },
          itemsConnection: {
            __typename: 'aggregate',
            aggregate: {
              count: length,
              __typename: 'count',
            },
          },
        },
      },
    },
  ]
}

export {
  makePaginationMocksFor,
  LocalStorageMock,
  fakeItem,
  fakeUser,
  fakeCartItem,
  fakeOrder,
  fakeOrderItem,
}

import Head from 'next/head'
import Image from 'next/image'
import formatMoney from '@sickfits/utils'
import DisplayError from '../components/DisplayError'
import OrderStyles from '../components/styled/OrderStyled'
import useAllOrders from '../hooks/useAllOrders'
import styled from '@emotion/styled'
import Link from 'next/link'
import OrderItemStyles from '../components/styled/OrderItemStyles'
import { Order } from '../@types/graphql-generated'

const OrderUl = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  grid-gap: 4rem;
`

function countItemsInAnOrder(order: Order) {
  return order.items.reduce((result, item) => result + item.quantity, 0)
}

function OrdersPage() {
  const { data: orders, error, isLoading } = useAllOrders()

  if (isLoading) return <p>Loading</p>
  if (error) return <DisplayError error={error} />

  if (!orders) {
    return <p>Order Not found</p>
  }

  return (
    <OrderStyles>
      <Head>
        <title>Sick Fits - Your orders ({orders.length}) </title>
      </Head>
      <h2>You have {orders.length}</h2>
      <OrderUl>
        {orders.map((order) => (
          <OrderItemStyles key={order.id}>
            <Link href={`/order/${order.id}`} passHref>
              <a>
                <div className="order-meta">
                  <p>
                    {countItemsInAnOrder(order)} Item
                    {`${countItemsInAnOrder(order) > 1 ? 's' : ''}`}
                  </p>
                  <p>
                    {order.items.length} Product
                    {order.items.length === 1 ? '' : 's'}
                  </p>
                  <p>{formatMoney(order.total)}</p>
                </div>
                <div className="images">
                  {order.items.map((item) => (
                    <Image
                      key={item.id}
                      src={item.photo.image.publicUrlTransformed}
                      alt={item.name}
                      width={250}
                      height={300}
                    />
                  ))}
                </div>
              </a>
            </Link>
          </OrderItemStyles>
        ))}
      </OrderUl>
    </OrderStyles>
  )
}

export default OrdersPage

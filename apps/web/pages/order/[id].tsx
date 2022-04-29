import Head from 'next/head'
import Image from 'next/image'
import formatMoney from '@sickfits/utils'
import { useRouter } from 'next/router'
import DisplayError from '../../components/DisplayError'
import OrderStyles from '../../components/styled/OrderStyled'
import useSingleOrder from '../../hooks/useSingleOrder'

function SingleOrderPage() {
  const router = useRouter()
  const { id } = router.query
  const { data: order, error, isLoading } = useSingleOrder(id as string)

  if (isLoading) return <p>Loading</p>
  if (error) return <DisplayError error={error} />

  if (!order) {
    return <p>Order Not found</p>
  }

  return (
    <OrderStyles>
      <Head>
        <title>Sick Fits - {order.id} </title>
      </Head>
      <p>
        <span>Order Id:</span>
        <span>{order.id}</span>
      </p>
      <p>
        <span>Charge:</span>
        <span>{order.charge}</span>
      </p>
      <p>
        <span>Order Total:</span>
        <span>{formatMoney(order.total)}</span>
      </p>
      <p>
        <span>Item Count:</span>
        <span>{order.items.length}</span>
      </p>
      <div className="items">
        {order.items.map((item) => (
          <div className="order-item" key={item.id}>
            <Image
              src={item.photo.image.publicUrlTransformed}
              alt={item.name}
              width={100}
              height={180}
            />
            <div className="item-details">
              <h2>{item.name}</h2>
              <p>Quantity: {item.quantity}</p>
              <p>Each: {formatMoney(item.price)}</p>
              <p>Subtotal: {formatMoney(item.price * item.quantity)}</p>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </OrderStyles>
  )
}

export default SingleOrderPage

import { useLoaderData } from 'react-router-dom'
import OrderType from '../types/OrderType'

type orderProps = {
  data: OrderType
}

const OrderPage = () => {
  const order: orderProps = useLoaderData() as orderProps
  const data: OrderType = order.data

  return (
    <>
      <div>{data.id}</div>
      <div>{data.customer}</div>
      <div>{data.priority}</div>
      <ul>
        {data.cart.map((pizza) => (
          <li key={pizza.pizzaId}>{pizza.name}</li>
        ))}
      </ul>
      <div>{data.orderPrice}</div>
      <div>{data.priorityPrice}</div>
      <div>{data.status}</div>
      <div>{data.estimatedDelivery}</div>
    </>
  )
}

export default OrderPage

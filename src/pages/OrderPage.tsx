// IIDSAT
import { useLoaderData } from 'react-router-dom'
import { orderType } from '../types/orderType'

type orderProps = {
  data: orderType
}

const OrderPage = () => {
  const order: orderProps = useLoaderData() as orderProps
  const data: orderType = order.data

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

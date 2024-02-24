import { useLoaderData } from 'react-router-dom'
import OrderType from '../types/OrderType'

type orderProps = {
  data: OrderType
}

function formatOrderDeliveryTime(dateString: string) {
  const deliveryDate = new Date(dateString)

  const hours = deliveryDate.getUTCHours()
  const minutes = deliveryDate.getUTCMinutes()

  const formatTimeUnit = (value: number, unit: string) =>
    value > 0 ? `${value} ${unit}` : ''
  const formattedTime = `${formatTimeUnit(hours, 'hour')} ${formatTimeUnit(minutes, 'min')}`
  return formattedTime.trim()
}

const OrderPage = () => {
  const order: orderProps = useLoaderData() as orderProps
  const data: OrderType = order.data

  return (
    <div className="space-y-2 rounded-2xl bg-amber-950 p-4 font-mono">
      <div className="text-xl uppercase">Name: {data.customer}</div>
      <div className="text-xl uppercase">OrderId: {data.id}</div>
      <ul className="flex gap-4">
        Cart:
        {data.cart.map((pizza) => (
          <li key={pizza.pizzaId}>{pizza.name}</li>
        ))}
      </ul>
      <div>Priority: {data.priority ? 'YES' : 'NO'}</div>
      <div>Priority Price: {data.priorityPrice}</div>
      <div>Order Price: {data.orderPrice}</div>
      <div>Status: {data.status}</div>
      <div>Time: {formatOrderDeliveryTime(data.estimatedDelivery)}</div>
    </div>
  )
}

export default OrderPage

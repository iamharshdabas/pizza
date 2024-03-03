import { useLoaderData } from 'react-router-dom'
import OrderType from '../types/OrderType'
import { useState } from 'react'

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
  const api: orderProps = useLoaderData() as orderProps
  const order: OrderType = api.data
  const [isCopied, setIsCopied] = useState(false)

  const handleCopy = () => {
    navigator.clipboard.writeText(order.id).then(() => setIsCopied(!isCopied))
  }

  return (
    <div className="mx-auto max-w-md rounded-2xl bg-stone-900 p-4">
      <div className="text-xl font-bold">Hi, {order.customer}</div>
      <div>
        Your order id is{' '}
        <button
          onClick={handleCopy}
          className="rounded-2xl bg-stone-800 px-4 py-1 font-mono text-lg font-bold tracking-widest shadow-xl"
        >
          {order.id}
        </button>{' '}
        {isCopied ? '(copied)' : '(click to copy)'}
      </div>
      <div className="py-8">
        <p className="opacity-80">Your cart order contains</p>
        <ul className="flex flex-wrap gap-4">
          {order.cart.map((pizza) => (
            <li
              className="rounded-2xl bg-stone-800 px-4 py-1 text-lg shadow-lg"
              key={pizza.pizzaId}
            >
              {pizza.quantity} {pizza.name}
            </li>
          ))}
        </ul>
      </div>
      <div className="text-xl font-bold">Total Price: ${order.orderPrice}</div>
      {order.priority && (
        <div className="text-lg opacity-90">
          Your order is Priotized at the price of{' '}
          <span className="font-bold">${order.priorityPrice}</span>
        </div>
      )}
      <div className="pt-4">
        Your order is <span className="text-lg font-bold">{order.status}</span>
      </div>
      <div>
        Will be delivered at{' '}
        <span className="text-lg font-bold">
          {formatOrderDeliveryTime(order.estimatedDelivery)}
        </span>
      </div>
    </div>
  )
}

export default OrderPage

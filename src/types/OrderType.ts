import CartPizzaType from './CartPizzaType'

type OrderType = {
  cart: CartPizzaType[]
  customer: string
  estimatedDelivery: string
  id: string
  orderPrice: number
  priority: boolean
  priorityPrice: number
  status: string
}

export default OrderType

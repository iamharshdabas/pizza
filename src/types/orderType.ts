import { cartPizzaType } from './cartPizzaType'

export type orderType = {
  cart: cartPizzaType[]
  customer: string
  estimatedDelivery: string
  id: string
  orderPrice: number
  priority: boolean
  priorityPrice: number
  status: string
}

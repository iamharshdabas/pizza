import { cartPizzaType } from './cartPizzaType'

export type newOrderType = {
  address: string
  cart: cartPizzaType[]
  customer: string
  phone: string
  priority: boolean
}

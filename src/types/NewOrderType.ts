import CartPizzaType from './CartPizzaType'

type NewOrderType = {
  address: string
  cart: CartPizzaType[]
  customer: string
  phone: string
  priority: boolean
}

export default NewOrderType

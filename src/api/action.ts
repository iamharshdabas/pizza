import { redirect } from 'react-router-dom'
import NewOrderType from '../types/NewOrderType'
import OrderType from '../types/OrderType'
import { createOrder } from './restaurantApi'
import store from '../redux/store'
import { clearCart } from '../redux/cartSlice'

const isNumericPhoneNumber = (phoneNumber: string): boolean => {
  const numericRegex = /^[0-9]+$/
  return numericRegex.test(phoneNumber)
}

// FIXME:
export const newOrderAction = async ({ request }) => {
  const formData = await request.formData()
  const data = Object.fromEntries(formData)

  const order: NewOrderType = {
    address: data.address,
    cart: JSON.parse(data.cart),
    customer: data.customer,
    phone: data.phone,
    priority: data.priority === 'on',
  }

  // NOTE: there is a better way to check for errors.
  // use react-router-dom's actions to return to errors object and fetch it in the component
  if (!isNumericPhoneNumber(order.phone)) {
    alert('Please enter valid phone number')
    return null
  }

  const newOrder = await createOrder(order)
  const newOrderData: OrderType = newOrder.data

  store.dispatch(clearCart())

  return redirect(`/order/${newOrderData.id}`)
}

import { redirect } from 'react-router-dom'
import { createOrder } from './restaurantApi'
import { orderType } from '../types/orderType'
import { newOrderType } from '../types/newOrderType'

const isNumericPhoneNumber = (phoneNumber: string): boolean => {
  const numericRegex = /^[0-9]+$/
  return numericRegex.test(phoneNumber)
}

// FIXME:
export const newOrderAction = async ({ request }) => {
  const formData = await request.formData()
  const data = Object.fromEntries(formData)

  const order: newOrderType = {
    address: data.address,
    cart: JSON.parse(data.cart),
    customer: data.customer,
    phone: data.phone,
    priority: data.priority === 'on',
  }

  if (!isNumericPhoneNumber(order.phone)) {
    alert('Please enter valid phone number')
    return null
  }

  const newOrder = await createOrder(order)
  const newOrderData: orderType = newOrder.data

  return redirect(`/order/${newOrderData.id}`)
}

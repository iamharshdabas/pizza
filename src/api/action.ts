import { redirect } from 'react-router-dom'
import { createOrder } from './restaurantApi'
import { orderType } from '../types/orderType'
import { newOrderType } from '../types/newOrderType'

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

  const newOrder = await createOrder(order)
  const newOrderData: orderType = newOrder.data

  return redirect(`/order/${newOrderData.id}`)
}

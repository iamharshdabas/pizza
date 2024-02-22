import { paramsType } from '../types/paramsType'
import { getMenu, getOrder } from './restaurantApi'

export const menuLoader = async () => {
  const menu = await getMenu()
  return menu.data
}

type orderLoaderType = {
  params: paramsType
}

export const orderLoader = async ({ params }: orderLoaderType) => {
  const order = await getOrder(params.orderId)
  return order
}

import { getMenu, getOrder } from './restaurantApi'

export const menuLoader = async () => {
  const menu = await getMenu()
  return menu.data
}

type OrderLoaderType = {
  params: {
    orderId: string
  }
}

export const orderLoader = async ({ params }: OrderLoaderType) => {
  const order = await getOrder(params.orderId)
  return order
}

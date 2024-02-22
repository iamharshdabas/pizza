import { getMenu } from './restaurantApi'

export const menuLoader = async () => {
  const menu = await getMenu()
  return menu
}

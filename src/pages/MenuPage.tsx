import { useLoaderData } from 'react-router-dom'
import MenuItem from '../containers/MenuItem'
import PizzaType from '../types/Pizza'

const MenuPage = () => {
  const menu: PizzaType[] = useLoaderData() as PizzaType[]

  return (
    <ul>
      {menu.map((pizza) => (
        <MenuItem pizza={pizza} key={pizza.id} />
      ))}
    </ul>
  )
}

export default MenuPage

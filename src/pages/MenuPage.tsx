import { useLoaderData } from 'react-router-dom'
import MenuItem from '../containers/MenuItem'
import { pizzaType } from '../types/pizza'

const MenuPage = () => {
  const menu: pizzaType[] = useLoaderData() as pizzaType[]

  return (
    <ul>
      {menu.map((pizza) => (
        <MenuItem pizza={pizza} key={pizza.id} />
      ))}
    </ul>
  )
}

export default MenuPage

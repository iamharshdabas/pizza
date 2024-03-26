import { useLoaderData } from 'react-router-dom'
import CartFooter from '../components/CartFooter'
import MenuItem from '../containers/MenuItem'
import PizzaType from '../types/Pizza'

const MenuPage = () => {
  const menu: PizzaType[] = useLoaderData() as PizzaType[]

  return (
    <>
      <CartFooter />
      <ul className="my-8 grid grid-cols-1 gap-8 lg:grid-cols-2">
        {menu.map((pizza) => (
          <MenuItem pizza={pizza} key={pizza.id} />
        ))}
      </ul>
    </>
  )
}

export default MenuPage

import { pizzaType } from '../types/pizza'

type Props = {
  pizza: pizzaType
}

const MenuItem = ({ pizza }: Props) => {
  return (
    <li>
      <img src={pizza.imageUrl} alt={pizza.name} />
      <h1>{pizza.name}</h1>
      <h2>{pizza.ingredients}</h2>
      <h3>{pizza.unitPrice}</h3>
    </li>
  )
}

export default MenuItem

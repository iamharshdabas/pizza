import PizzaType from '../types/Pizza'

type Props = {
  pizza: PizzaType
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

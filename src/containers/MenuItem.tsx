import PizzaType from '../types/Pizza'

type Props = {
  pizza: PizzaType
}

const MenuItem = ({ pizza }: Props) => {
  return (
    <li className="grid grid-cols-3 overflow-hidden rounded-2xl bg-amber-950">
      <div className="w-32">
        <img src={pizza.imageUrl} alt={pizza.name} />
      </div>

      <div className="col-span-2">
        <h1 className="text-xl font-bold">{pizza.name}</h1>
        <ul className="flex flex-wrap">
          {pizza.ingredients.map((child) => (
            <li className="pr-2 opacity-80">{child}</li>
          ))}
        </ul>
        <h3>$ {pizza.unitPrice}</h3>
      </div>
    </li>
  )
}

export default MenuItem

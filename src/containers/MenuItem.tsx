import PizzaType from '../types/Pizza'

type Props = {
  pizza: PizzaType
}

const MenuItem = ({ pizza }: Props) => {
  return (
    <li className="relative overflow-hidden rounded-xl border border-gray-600 sm:static sm:flex">
      <div>
        <img className="mx-auto" src={pizza.imageUrl} alt={pizza.name} />
      </div>

      <div className="absolute bottom-0 flex w-full items-center justify-between bg-black px-4 py-1 sm:static sm:flex-col">
        <div>
          <h1 className="text-xl font-bold">{pizza.name}</h1>
          <ul className="flex flex-wrap">
            {pizza.ingredients.map((child) => (
              <li className="pr-2 opacity-80">{child}</li>
            ))}
          </ul>
        </div>
        <div className="mt-2">
          <button className="rounded-xl border border-amber-600 px-4 py-2">
            Add to Cart
            <span className="text-amber-600"> ${pizza.unitPrice}</span>
          </button>
        </div>
      </div>
    </li>
  )
}

export default MenuItem

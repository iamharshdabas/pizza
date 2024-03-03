import { useDispatch } from 'react-redux'
import { addItem } from '../redux/cartSlice'
import CartPizzaType from '../types/CartPizzaType'
import PizzaType from '../types/Pizza'
import { useState } from 'react'

type Props = {
  pizza: PizzaType
}

const MenuItem = ({ pizza }: Props) => {
  const dispatch = useDispatch()
  const [quantity, setQuantity] = useState(1)

  const handleDecrement = () => {
    if (quantity <= 1) return
    setQuantity((quantity) => (quantity -= 1))
  }

  const handleIncrement = () => {
    setQuantity((quantity) => (quantity += 1))
  }

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()
    const newItem: CartPizzaType = {
      name: pizza.name,
      pizzaId: pizza.id,
      quantity: quantity,
      unitPrice: pizza.unitPrice,
      totalPrice: pizza.unitPrice * quantity,
    }
    dispatch(addItem(newItem))
  }

  return (
    <li className="flex flex-col overflow-hidden rounded-xl border border-gray-600 sm:flex-row">
      <div>
        <img className="mx-auto" src={pizza.imageUrl} alt={pizza.name} />
      </div>

      <div className="flex items-center justify-between bg-black p-4 sm:flex-col sm:items-start">
        <div>
          <h1 className="pb-1 text-xl font-bold">{pizza.name}</h1>
          <ul className="flex flex-wrap">
            {pizza.ingredients.map((child) => (
              <li className="pr-2 opacity-80">{child}</li>
            ))}
          </ul>
        </div>
        <div className="mt-2">
          <div className="pb-4">
            <button
              className="rounded-2xl bg-stone-900 px-2 text-lg"
              onClick={handleDecrement}
            >
              -
            </button>
            <span className="mx-2 rounded-2xl bg-amber-600 px-2 text-black">
              {quantity}
            </span>
            <button
              className="rounded-2xl bg-stone-900 px-2 text-lg"
              onClick={handleIncrement}
            >
              +
            </button>
          </div>
          <button
            className="rounded-xl border border-amber-600 px-4 py-2 hover:bg-stone-900"
            onClick={handleClick}
          >
            Add to Cart
            <span className="text-amber-600"> ${pizza.unitPrice}</span>
          </button>
        </div>
      </div>
    </li>
  )
}

export default MenuItem

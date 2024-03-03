import { useDispatch, useSelector } from 'react-redux'
import CartPizzaType from '../types/CartPizzaType'
import {
  decrementItem,
  getQuantity,
  incrementItem,
  removeItem,
} from '../redux/cartSlice'

type Props = {
  pizza: CartPizzaType
}

const CartItem = ({ pizza }: Props) => {
  const dispatch = useDispatch()
  const quantity = useSelector(getQuantity(pizza.pizzaId))

  const handleDecrement = () => {
    if (quantity <= 1) return
    dispatch(decrementItem(pizza.pizzaId))
  }

  const handleIncrement = () => {
    dispatch(incrementItem(pizza.pizzaId))
  }

  const handleDelete = () => {
    dispatch(removeItem(pizza.pizzaId))
  }

  return (
    <li className="flex items-center justify-between rounded-2xl p-4 hover:bg-stone-800">
      <h1 className="px-2 text-lg font-bold">{pizza.name}</h1>
      <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
        <div>
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
          onClick={handleDelete}
          className="rounded-2xl border border-amber-600 px-4 py-2 hover:bg-amber-600 hover:text-black"
        >
          Remove Pizza
        </button>
      </div>
    </li>
  )
}

export default CartItem

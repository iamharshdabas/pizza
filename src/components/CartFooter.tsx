import { useSelector } from 'react-redux'
import { getTotalItems, getTotalPrice } from '../redux/cartSlice'
import { useNavigate } from 'react-router-dom'

const CartFooter = () => {
  const totalItems = useSelector(getTotalItems)
  const totalPrice = useSelector(getTotalPrice)
  const navigate = useNavigate()

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()
    navigate('/cart')
  }

  return (
    <div className="flex items-center justify-between rounded-2xl bg-stone-900 p-4">
      <div>
        <span>{totalItems} Pizzas</span>
        <div className="inline">
          <span className="opacity-80"> for </span>
          <span className="text-lg font-bold">${totalPrice}</span>
        </div>
      </div>
      <button
        className="rounded-2xl border border-amber-600 px-4 py-1 hover:bg-amber-600 hover:text-black"
        onClick={handleClick}
      >
        Open Cart
      </button>
    </div>
  )
}

export default CartFooter

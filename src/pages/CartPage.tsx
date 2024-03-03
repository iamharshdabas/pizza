import { useSelector } from 'react-redux'
import { getCart, getTotalPrice } from '../redux/cartSlice'
import { useNavigate } from 'react-router-dom'
import CartItem from '../containers/CartItem'

import React from 'react'

type Props = {
  navigateToMenu: React.MouseEventHandler<HTMLButtonElement>
}

const BackToMenu = ({ navigateToMenu }: Props) => {
  return (
    <>
      <button
        className="rounded-2xl border border-amber-600 px-4 py-2 hover:bg-amber-600 hover:text-black"
        onClick={navigateToMenu}
      >
        Back to Menu
      </button>
    </>
  )
}

const CartPage = () => {
  const navigate = useNavigate()
  const cart = useSelector(getCart)
  const totalPrice = useSelector(getTotalPrice)

  const navigateToMenu = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()
    navigate('/menu')
  }

  const orderNow = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()
    navigate('/order/new')
  }

  if (cart.length === 0) {
    return (
      <div className="mx-auto rounded-2xl bg-stone-900 text-lg">
        <h1 className="p-4">Threre is nothing in the cart</h1>
        <div className="p-4">
          <BackToMenu navigateToMenu={navigateToMenu} />
        </div>
      </div>
    )
  }

  return (
    <div className="mx-auto rounded-2xl bg-stone-900">
      <div className="flex items-center justify-between p-4">
        <BackToMenu navigateToMenu={navigateToMenu} />
        <button
          onClick={orderNow}
          className="rounded-2xl bg-amber-600 px-4 py-2 text-black"
        >
          Order Now for ${totalPrice}
        </button>
      </div>
      <ul className="space-y-4">
        {cart.map((pizza) => (
          <CartItem key={pizza.pizzaId} pizza={pizza} />
        ))}
      </ul>
    </div>
  )
}

export default CartPage

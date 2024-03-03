import { useSelector } from 'react-redux'
import { getCart } from '../redux/cartSlice'
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
        className="m-4 rounded-2xl bg-amber-600 px-4 py-2 text-black"
        onClick={navigateToMenu}
      >
        Back to Menu ?
      </button>
    </>
  )
}

const CartPage = () => {
  const navigate = useNavigate()
  const cart = useSelector(getCart)

  const navigateToMenu = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()
    navigate('/menu')
  }

  if (cart.length === 0) {
    return (
      <div className="mx-auto rounded-2xl bg-stone-900 text-lg">
        <h1 className="p-4">Threre is nothing in the cart</h1>
        <BackToMenu navigateToMenu={navigateToMenu} />
      </div>
    )
  }

  return (
    <div className="mx-auto rounded-2xl bg-stone-900">
      <BackToMenu navigateToMenu={navigateToMenu} />
      <ul className="space-y-4">
        {cart.map((pizza) => (
          <CartItem key={pizza.pizzaId} pizza={pizza} />
        ))}
      </ul>
    </div>
  )
}

export default CartPage

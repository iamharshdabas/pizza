import { createSlice } from '@reduxjs/toolkit'
import fakeCart from '../fakeCart'
import CartPizzaType from '../types/CartPizzaType'

type State = {
  cart: CartPizzaType[]
}
type AddItemAction = {
  payload: CartPizzaType
}
type RemoveItemAction = {
  payload: number
}
type IncrementItemAction = {
  payload: number
}
type DecrementItemAction = {
  payload: number
}

const initialState: State = {
  cart: [],
  // cart: fakeCart,
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    // TODO: add alert if item already exists
    addItem(state: State, action: AddItemAction) {
      state.cart.push(action.payload)
    },
    removeItem(state: State, action: RemoveItemAction) {
      state.cart.filter((child) => child.pizzaId !== action.payload)
    },
    incrementItem(state: State, action: IncrementItemAction) {
      const item = state.cart.find((child) => child.pizzaId === action.payload)
      if (!item) return
      item.quantity++
      item.totalPrice = item.quantity * item.unitPrice
    },
    decrementItem(state: State, action: DecrementItemAction) {
      const item = state.cart.find((child) => child.pizzaId === action.payload)
      if (!item) return
      item.quantity--
      item.totalPrice = item.quantity * item.unitPrice
    },
    clearCart(state: State) {
      state.cart = []
    },
  },
})

export const { addItem, removeItem, incrementItem, decrementItem, clearCart } =
  cartSlice.actions

export default cartSlice.reducer

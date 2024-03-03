import { createSlice } from '@reduxjs/toolkit'
import CartPizzaType from '../types/CartPizzaType'

type State = {
  cart: CartPizzaType[]
}
type RootState = {
  cart: State
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
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem(state: State, action: AddItemAction) {
      const itemExists = state.cart.find(
        (child) => child.pizzaId == action.payload.pizzaId
      )
      if (itemExists != undefined) return alert('Item is already in the cart')
      state.cart.push(action.payload)
    },

    removeItem(state: State, action: RemoveItemAction) {
      state.cart = state.cart.filter(
        (child) => child.pizzaId !== action.payload
      )
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

const getTotalItems = (state: RootState) => {
  return state.cart.cart.reduce((acc, cur) => acc + cur.quantity, 0)
}

const getTotalPrice = (state: RootState) => {
  return state.cart.cart.reduce((acc, cur) => acc + cur.totalPrice, 0)
}

const getCart = (state: RootState) => {
  return state.cart.cart
}

const getQuantity = (id: number) => (state: RootState) => {
  const item = state.cart.cart.find((child) => child.pizzaId === id)
  return item?.quantity
}

export const { addItem, removeItem, incrementItem, decrementItem, clearCart } =
  cartSlice.actions

export { getTotalItems, getTotalPrice, getCart, getQuantity }

export default cartSlice.reducer

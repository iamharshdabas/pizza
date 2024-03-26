import { useSelector } from 'react-redux'
import { Form, useNavigation } from 'react-router-dom'
import { getCart, getTotalPrice } from '../redux/cartSlice'
import { useState } from 'react'

const NewOrderPage = () => {
  const navigation = useNavigation()
  const isSubmitting = navigation.state === 'submitting'
  const cart = useSelector(getCart)
  const totalPrice = useSelector(getTotalPrice)
  const [priority, setPriority] = useState(false)

  const handlePriorityChange = () => {
    setPriority(!priority)
  }

  const handlePrice = () => {
    let price = totalPrice
    if (priority) {
      price += totalPrice * 0.2
    }

    return price
  }

  return (
    <Form
      className="mx-auto max-w-sm space-y-4 rounded-2xl bg-stone-900 p-4"
      method="POST"
    >
      <div className="flex flex-col gap-4">
        <label className="text-xl">Name</label>
        <input
          className="max-w-sm rounded-xl bg-stone-800 px-4 py-2"
          type="text"
          name="customer"
          required
        />
      </div>
      <div className="flex flex-col gap-4">
        <label className="text-xl">Phone number</label>
        <input
          className="max-w-sm rounded-xl bg-stone-800 px-4 py-2"
          type="tel"
          name="phone"
          required
        />
      </div>
      <div className="flex flex-col gap-4">
        <label className="text-xl">Address</label>
        <input
          className="max-w-sm rounded-xl bg-stone-800 px-4 py-2"
          type="text"
          name="address"
          required
        />
      </div>
      <div className="space-x-4">
        <input
          className="rounded-xl"
          type="checkbox"
          checked={priority}
          onChange={handlePriorityChange}
          name="priority"
        />
        <label className="text-xl">Prioritize order</label>
        <p className="inline italic opacity-80">+20% extra charges</p>
      </div>
      <input type="hidden" name="cart" value={JSON.stringify(cart)} />
      <button
        className="rounded-xl bg-amber-600 px-4 py-2 font-bold uppercase text-stone-900"
        disabled={isSubmitting}
      >
        {isSubmitting ? 'Placing Order' : `Order Now for &${handlePrice()}`}
      </button>
    </Form>
  )
}

export default NewOrderPage

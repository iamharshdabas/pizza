import { Form, useNavigation } from 'react-router-dom'

const fakeCart = [
  {
    name: 'Margherita',
    pizzaId: 1,
    quantity: 2,
    totalPrice: 15.99,
    unitPrice: 7.99,
  },
  {
    name: 'Pepperoni',
    pizzaId: 2,
    quantity: 1,
    totalPrice: 12.49,
    unitPrice: 12.49,
  },
  {
    name: 'Vegetarian',
    pizzaId: 3,
    quantity: 3,
    totalPrice: 22.5,
    unitPrice: 7.5,
  },
]

const NewOrderPage = () => {
  const navigation = useNavigation()
  const isSubmitting = navigation.state === 'submitting'

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
        <label className="text-xl">Prioritize order ?</label>
        <input className="rounded-xl" type="checkbox" name="priority" />
      </div>
      <input type="hidden" name="cart" value={JSON.stringify(fakeCart)} />
      <button
        className="rounded-xl bg-amber-600 px-4 py-2 font-bold uppercase text-stone-900"
        disabled={isSubmitting}
      >
        {isSubmitting ? 'Placing Order' : 'Order Now'}
      </button>
    </Form>
  )
}

export default NewOrderPage

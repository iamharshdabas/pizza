import { Form } from 'react-router-dom'

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
  return (
    <Form method="POST">
      <div>
        <label>Name</label>
        <input type="text" name="customer" required />
      </div>
      <div>
        <label>Phone number</label>
        <input type="tel" name="phone" required />
      </div>
      <div>
        <label>Address</label>
        <input type="text" name="address" required />
      </div>
      <div>
        <label>Priority</label>
        <input type="checkbox" name="priority" />
      </div>
      <input type="hidden" name="cart" value={JSON.stringify(fakeCart)} />
      <button>Order</button>
    </Form>
  )
}

export default NewOrderPage

import NewOrderType from '../types/NewOrderType'

const BASE_URL = 'https://react-fast-pizza-api.onrender.com/api'

export const getMenu = async () => {
  const res = await fetch(`${BASE_URL}/menu`)
  if (!res.ok) throw Error('Error during fetching menu')

  const data = await res.json()
  return data
}

export const getOrder = async (id: string) => {
  const res = await fetch(`${BASE_URL}/order/${id}`)
  if (!res.ok) throw Error('Error during fetching order')

  const data = await res.json()
  return data
}

export const createOrder = async (newOrder: NewOrderType) => {
  const res = await fetch(`${BASE_URL}/order/`, {
    method: 'POST',
    body: JSON.stringify(newOrder),
    headers: {
      'Content-Type': 'application/json',
    },
  })
  if (!res.ok) throw Error()

  const data = await res.json()
  return data
}

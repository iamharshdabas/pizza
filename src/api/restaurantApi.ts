const BASE_URL = 'https://react-fast-pizza-api.onrender.com/api'

export const getMenu = async () => {
  const res = await fetch(`${BASE_URL}/menu`)
  if (!res.ok) throw Error('Error during fetching menu')

  const data = await res.json()
  return data
}

import { useLoaderData } from 'react-router-dom'

const MenuPage = () => {
  const menu = useLoaderData()
  console.log(menu)

  return <div>MenuPage</div>
}

export default MenuPage

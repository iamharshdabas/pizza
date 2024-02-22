import { NavLink } from 'react-router-dom'

const routes = [
  { path: '/menu', name: 'menu' },
  { path: '/cart', name: 'cart' },
]

const NavBar = () => {
  return (
    <ul>
      {routes.map((route) => (
        <li key={route.name}>
          <NavLink to={route.path}>{route.name}</NavLink>
        </li>
      ))}
    </ul>
  )
}

export default NavBar

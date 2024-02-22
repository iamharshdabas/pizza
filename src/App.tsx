import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import CartPage from './pages/CartPage'
import HomePage from './pages/HomePage'
import MenuPage from './pages/MenuPage'
import OrderPage from './pages/OrderPage'
import NewOrderPage from './pages/NewOrderPage'
import AppLayout from './containers/AppLayout'

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      { path: '/', element: <HomePage /> },
      { path: '/menu', element: <MenuPage /> },
      { path: '/cart', element: <CartPage /> },
      { path: '/order/new', element: <NewOrderPage /> },
      { path: '/order/:orderID', element: <OrderPage /> },
    ],
  },
])

const App = () => {
  return <RouterProvider router={router} />
}

export default App

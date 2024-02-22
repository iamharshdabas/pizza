import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { menuLoader } from './api/loader'
import AppLayout from './containers/AppLayout'
import CartPage from './pages/CartPage'
import HomePage from './pages/HomePage'
import MenuPage from './pages/MenuPage'
import NewOrderPage from './pages/NewOrderPage'
import OrderPage from './pages/OrderPage'

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      { path: '/', element: <HomePage /> },
      { path: '/menu', element: <MenuPage />, loader: menuLoader },
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

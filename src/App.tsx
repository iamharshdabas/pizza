import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { menuLoader, orderLoader } from './api/loader'
import Error from './components/Error'
import AppLayout from './containers/AppLayout'
import CartPage from './pages/CartPage'
import HomePage from './pages/HomePage'
import MenuPage from './pages/MenuPage'
import NewOrderPage from './pages/NewOrderPage'
import OrderPage from './pages/OrderPage'

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: '/',
        element: <HomePage />,
        errorElement: <Error />,
      },
      {
        path: '/menu',
        element: <MenuPage />,
        loader: menuLoader,
        errorElement: <Error />,
      },
      {
        path: '/cart',
        element: <CartPage />,
        errorElement: <Error />,
      },
      {
        path: '/order/new',
        element: <NewOrderPage />,
        errorElement: <Error />,
      },
      {
        path: '/order/:orderId',
        element: <OrderPage />,
        loader: orderLoader, // FIXME:
        errorElement: <Error />,
      },
    ],
  },
])

const App = () => {
  return <RouterProvider router={router} />
}

export default App

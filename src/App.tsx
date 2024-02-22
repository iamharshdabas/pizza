import { RouterProvider, createBrowserRouter } from 'react-router-dom'

const router = createBrowserRouter([
  { path: '/' },
  { path: '/menu' },
  { path: '/cart' },
  { path: '/order/new' },
  { path: '/order/:orderID' },
])

const App = () => {
  return <RouterProvider router={router} />
}

export default App

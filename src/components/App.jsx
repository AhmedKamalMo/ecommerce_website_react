import { Provider } from 'react-redux'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import store from '../../store/store'
import About from './About/About'
import Favorites from './Favorites/Favorites'
import Home from './Home/Home'
import Layout from './layout/layout'
import Login from './login/login'
import Product from './Product/product '
import ProductDetails from './productDetails/ProductDetails'
import ProtectedRoute from './ProtectedRoute/ProtectedRoute'
import Sign from './Sign-up/Sign-up'
function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        {
          index: true,
          element: <Home />
        },
        {
          path: "/products",
          element: <Product />
        },
        {
          path: "/Home",
          element: <Home />
        },
        {
          path: "/About",
          element: <About />
        },
        {
          path: "/Details/:id",
          element: <ProductDetails />
        },
      ]
    },
    {
      path: "/Favorites",
      element: <ProtectedRoute />,
      children: [{
        index: true,
        element: <Favorites />
      }]
    },
    {
      path: "/login",
      element: <Login />
    },
    {
      path: "/registration",
      element: <Sign />
    },
  ])
  return (
    <div>
      <Provider store={store} >

        <RouterProvider router={router} />
      </Provider>
    </div>
  )

}

export default App

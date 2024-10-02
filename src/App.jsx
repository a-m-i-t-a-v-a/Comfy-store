import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import HomeLayout from './components/HomeLayout'
import Error from './components/Error'
import Login, { loginAction } from './components/Login'
import Register, { registerAction } from './components/Register'
import Landing from './components/Landing'
import Products, { productsLoader } from './components/Products'
import SingleProduct, { singleProductLoader } from './components/SingleProduct'
import Cart from './components/Cart'
import About from './components/About'
import Checkout, { checkoutPageLoader } from './components/Checkout'
import Orders, { orderLoader } from './components/Orders'
import ErrorElement from './components/UI/ErrorElement'

//loaders
import { loader as landingLoader } from './components/Landing'
import store from './store'
import { checkoutFormAction } from './components/UI/CheckoutForm'
//actions

const router=createBrowserRouter([
  {
    path:'/',
    element:<HomeLayout/>,
    errorElement:<Error/>,
    children:[
      {
        index:true,
        element:<Landing/>,
        errorElement:<ErrorElement/>,
        loader:landingLoader
      },
      {
        path:'products',
        element:<Products/>,
        loader:productsLoader
      },
      {
        path:'products/:id',
        element:<SingleProduct/>,
        loader:singleProductLoader
      },
      {
        path:'cart',
        element:<Cart/>
      },
      {
        path:'about',
        element:<About/>
      },
      {
        path:'checkout',
        element:<Checkout/>,
        loader:checkoutPageLoader(store),
        action:checkoutFormAction(store)
      },
      {
        path:'orders',
        element:<Orders/>,
        loader:orderLoader(store)
      }
    ]
  },
  {
    path:'/login',
    element:<Login/>,
    errorElement:<Error/>,
    action:loginAction(store)
  },
  {
    path:'/register',
    element:<Register/>,
    errorElement:<Error/>,
    action:registerAction
  }
])

function App() {

  return (
    <RouterProvider router={router}/>
  )
}

export default App

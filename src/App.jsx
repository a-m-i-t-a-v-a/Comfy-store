import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import HomeLayout from './components/HomeLayout'
import Error from './components/Error'
import Login from './components/Login'
import Register from './components/Register'
import Landing from './components/Landing'
import Products, { productsLoader } from './components/Products'
import SingleProduct, { singleProductLoader } from './components/SingleProduct'
import Cart from './components/Cart'
import About from './components/About'
import Checkout from './components/Checkout'
import Orders from './components/Orders'
import ErrorElement from './components/UI/ErrorElement'

//loaders
import { loader as landingLoader } from './components/Landing'
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
        element:<Checkout/>
      },
      {
        path:'orders',
        element:<Orders/>
      }
    ]
  },
  {
    path:'/login',
    element:<Login/>,
    errorElement:<Error/>
  },
  {
    path:'/register',
    element:<Register/>,
    errorElement:<Error/>
  }
])

function App() {

  return (
    <RouterProvider router={router}/>
  )
}

export default App

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import HomeLayout from './components/HomeLayout'
import Error from './components/Error'
import Login from './components/Login'
import Register from './components/Register'
import Landing from './components/Landing'
import Products from './components/Products'
import SingleProduct from './components/SingleProduct'
import Cart from './components/Cart'
import About from './components/About'
import Checkout from './components/Checkout'
import Orders from './components/Orders'

const router=createBrowserRouter([
  {
    path:'/',
    element:<HomeLayout/>,
    errorElement:<Error/>,
    children:[
      {
        index:true,
        element:<Landing/>
      },
      {
        path:'products',
        element:<Products/>
      },
      {
        path:'products/:id',
        element:<SingleProduct/>
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

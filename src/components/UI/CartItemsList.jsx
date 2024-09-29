import { useSelector } from "react-redux"
import CartItem from "./CartItem"

const CartItemsList = () => {
  const cartItems=useSelector(state=>state.cart.cartItems)
  console.log(cartItems)
  return (
    <>
     {cartItems.map((item)=>(
        <CartItem key={item.cartID} cartItem={item}/>
     ))} 
    </>
  )
}

export default CartItemsList

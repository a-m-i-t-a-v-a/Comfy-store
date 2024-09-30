/* eslint-disable react-refresh/only-export-components */
import { useSelector } from "react-redux"
import SectionTitle from "./UI/SectionTitle"
import CheckoutForm from "./UI/CheckoutForm"
import CartTotals from "./UI/CartTotals"
import { toast } from "react-toastify"
import { redirect } from "react-router-dom"

export const checkoutPageLoader=(store)=>()=>{
  try{
    const user=store.getState().user.user
    if(!user){
      toast.warn('No user')
      return redirect('/login')
    }
    console.log(user)
  }catch(err){
    console.log(err)
  }
  return null;
}

const Checkout = () => {
  const cartTotal=useSelector(store=>store.cart.cartTotal)
  if(cartTotal===0){
    return <SectionTitle text='Your cart is empty'/>
  }
  return (
    <>
      <SectionTitle text='place your order'/>
      <div className="mt-8 grid gap-8 md:grid-cols-2 items-start">
        <CheckoutForm/>
        <CartTotals/>
      </div>
    </>
  )
}

export default Checkout

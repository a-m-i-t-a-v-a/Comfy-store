/* eslint-disable react-refresh/only-export-components */

import { Form, redirect } from "react-router-dom";
import FormInput from "./FormInput";
import SubmitBtn from "./SubmitBtn";
import { customFetch, formatPrice } from "../../utils/helper";
import { clearCart } from "../../features/cart/cartSlice";
import { toast } from "react-toastify";

export const checkoutFormAction=(store)=>async({request})=>{
    const formData=await request.formData();
    const {name,address}=Object.fromEntries(formData);
    const user=store.getState().user.user;
    const {cartItems,orderTotal,numItemsInCart}=store.getState().cart;
    const info={
        name,
        address,
        chargeTotal:orderTotal,
        orderTotal:formatPrice(orderTotal),
        cartItems,
        numItemsInCart
    };
    try{
        const response=await customFetch.post('/orders',{data:info},{
            headers:{
                Authorization:`Bearer ${user.token}`
            }
        })
        if(!response.ok){
            return `SOMEthing went wrong`
        }
        store.dispatch(clearCart())
        toast.success('Order placed successfully')
        return redirect('/orders')
    }catch(err){
        const errMsg=err?.response?.data?.error?.message || 'error in placing the order'
        if(err.response.status===401) return redirect('/login')
        toast.error(errMsg)
    }
    return null;
}

const CheckoutForm = () => {
  return (
    <Form method='POST' className="flex flex-col gap-y-4">
        <h4 className="font-medium text-xl capitalize">Shipping Information</h4>
        <FormInput label='first name' name='name' type='text'/>
        <FormInput label='address' name='address' type='text'/>
        <div className="mt-4">
            <SubmitBtn text='place your order'/>
        </div>
    </Form>
  )
}

export default CheckoutForm

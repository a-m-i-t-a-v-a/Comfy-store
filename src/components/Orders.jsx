import { redirect, useLoaderData } from "react-router-dom";
import { toast } from "react-toastify";
import { customFetch } from "../utils/helper";
import SectionTitle from "./UI/SectionTitle";
import OrdersList from "./UI/OrdersList";
import PaginationContainer from "./UI/PaginationContainer";

/* eslint-disable react-refresh/only-export-components */
export const orderLoader=(store)=>async({request})=>{
  const user=store.getState().user.user;
  if(!user){
    toast.warn('you must be logged in to view the orders')
    return redirect('/login')
  }
  const params=Object.fromEntries([...new URL(request.url).searchParams.entries()]);
  try{
    const response=await customFetch.get('/orders',{
      params,
      headers:{
        Authorization:`Bearer ${user.token}`
      }
    })
    return {
      orders:response.data.data,
      meta:response.data.meta
    }
  }catch(err){
    const errMsg=err?.response?.data?.error?.message || 'error in fetching the order'
    if(err.response.status===401) return redirect('/login')
    toast.error(errMsg)
  }
}

const Orders = () => {
  const {meta}=useLoaderData();
  if(meta.pagination.total<1){
    return <SectionTitle text="please make an order"/>
  }
  console.log(`Orders meta ${meta.pagination}`)
  return (
    <>
      <SectionTitle text="Your orders"/>
      <OrdersList/>
      <PaginationContainer/>
    </>
  )
}

export default Orders

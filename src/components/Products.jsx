/* eslint-disable react-refresh/only-export-components */
import { customFetch } from "../utils/helper"
import Filter from "./UI/Filter"
import PaginationContainer from "./UI/PaginationContainer"
import ProductsContainer from "./UI/ProductsContainer"

const url='/products'

const allProductsQuery=(queryParams)=>{
  const {search,category,company,sort,price,shipping,page}=queryParams;

  return {
    queryKey:[
      'products',
      search ?? '',
      category ?? 'all',
      company ?? 'all',
      sort ?? 'a-z',
      price ?? 100000,
      shipping ?? false,
      page ?? 1
    ],
    queryFn:()=>customFetch(url,{
        params:queryParams
      })
  }
}

export const productsLoader=(queryClient)=>async({request})=>{
  const params=Object.fromEntries([...new URL(request.url).searchParams.entries()]);
  const response=await queryClient.ensureQueryData(allProductsQuery(params))
  const products=response?.data?.data || [];
  const meta=response?.data?.meta || {}
  return {products,meta,params}
}

const Products = () => {
  return (
    <>
      <Filter/>
      <ProductsContainer/>
      <PaginationContainer/>
    </>
  )
}

export default Products

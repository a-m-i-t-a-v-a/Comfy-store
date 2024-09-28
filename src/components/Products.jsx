/* eslint-disable react-refresh/only-export-components */
import { customFetch } from "../utils/helper"
import Filter from "./UI/Filter"
import PaginationContainer from "./UI/PaginationContainer"
import ProductsContainer from "./UI/ProductsContainer"

const url='/products'

export const productsLoader=async({request})=>{
  const params=Object.fromEntries([...new URL(request.url).searchParams.entries()]);
  const response=await customFetch(url,{params});
  const products=response.data.data;
  const meta=response.data.meta
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

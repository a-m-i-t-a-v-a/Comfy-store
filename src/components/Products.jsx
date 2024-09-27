/* eslint-disable no-unused-vars */
import { customFetch } from "../utils/helper"
import Filter from "./UI/Filter"
import PaginationContainer from "./UI/PaginationContainer"
import ProductsContainer from "./UI/ProductsContainer"

const url='/products'

export const productsLoader=async({request})=>{
  const response=await customFetch(url);
  const products=response.data.data;
  const meta=response.data.meta
  return {products,meta}
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

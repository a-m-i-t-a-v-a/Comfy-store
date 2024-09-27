/* eslint-disable react-refresh/only-export-components */
import { customFetch } from "../utils/helper"
import FeaturedProducts from "./UI/FeaturedProducts";
import Hero from "./UI/Hero"

const url='/products?featured=true'

export const loader=async()=>{
  const response =await customFetch.get(url);
  const products=response.data.data
  return {products}
}

const Landing = () => {
  return (
    <div className="text-4xl">
      <Hero/>
      <FeaturedProducts/>
    </div>
  )
}

export default Landing

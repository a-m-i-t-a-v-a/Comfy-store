import { Link } from "react-router-dom"
import { carouselImages } from "../../utils/helper"

const Hero = () => {
  return (
    <div className="grid lg:grid-cols-2 gap-24 items-center">
      <div>
        <h1 className="max-w-2xl text-4xl font-bold tracking-tight sm:text-6xl">We are changing the way people shop</h1>
        <p className="mt-8 max-w-xl text-lg leading-8">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo quam autem officiis reiciendis 
            iure amet soluta suscipit ipsa, a totam possimus! Niure amet soluta suscipit ipsa, a totam possimus!
            Tiure amet soluta suscipit ipsa, a totam possimus! Diure amet soluta suscipit ipsa, a totam possimus!</p>
        <div className="mt-10">
            <Link to='/products' className="btn btn-primary">Our Products</Link>
        </div>
      </div>
      <div className="hidden h-[28rem] lg:carousel carousel-center p-4 space-x-4 bg-neutral rounded-box">
        {carouselImages.map((image)=>{
            return <div key={image} className="carousel-item">
                <img src={image} className="rounded-box h-full w-80 object-cover" alt={image}/>
            </div>
        })}
      </div>
    </div>
  )
}

export default Hero

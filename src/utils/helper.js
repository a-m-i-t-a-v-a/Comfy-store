import axios from 'axios'
import hero1 from '../assets/hero1.webp'
import hero2 from '../assets/hero2.webp'
import hero3 from '../assets/hero3.webp'
import hero4 from '../assets/hero4.webp'

export const carouselImages=[hero1,hero2,hero3,hero4]

export const links=[
    {id:1,url:'/',text:'home'},
    {id:2,url:'about',text:'about'},
    {id:3,url:'products',text:'products'},
    {id:4,url:'cart',text:'cart'},
    {id:5,url:'checkout',text:'checkout'},
    {id:6,url:'orders',text:'orders'},
]

export const themes={
    corporate:'corporate',
    luxury:'luxury'
}

const productionUrl='https://strapi-store-server.onrender.com/api'

export const customFetch=axios.create({
    baseURL:productionUrl,
})

export const formatPrice=(price)=>{
    const dollarsAmount=new Intl.NumberFormat('en-US',{
        style:'currency',
        currency:'USD'
    }).format((price/100).toFixed(2))
    return dollarsAmount
}
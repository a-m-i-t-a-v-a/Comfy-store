import { Outlet } from "react-router-dom"
import Header from "./UI/Header"
import Navbar from "./UI/Navbar"

const HomeLayout = () => {
  return (
    <>
      <Header/>
      <Navbar/>
      <section className="align-element py-20 mt-8">
        <Outlet/>
      </section>
    </>
  )
}

export default HomeLayout

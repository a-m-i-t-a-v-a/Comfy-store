import { Outlet, useNavigation } from "react-router-dom"
import Header from "./UI/Header"
import Navbar from "./UI/Navbar"
import Loading from "./UI/Loading"

const HomeLayout = () => {
  const navigation=useNavigation()
  const isPageLoading=navigation.state==='loading'
  return (
    <>
      <Header/>
      <Navbar/>
      {isPageLoading ? <Loading/> : 
      <section className="align-element py-20 mt-8">
        <Outlet/>
      </section>}
    </>
  )
}

export default HomeLayout

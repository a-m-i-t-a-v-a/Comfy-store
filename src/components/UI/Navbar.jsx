import { NavLink } from "react-router-dom"
import { FaBarsStaggered } from "react-icons/fa6";
import { BsCart3, BsMoonFill, BsSunFill } from "react-icons/bs";
import NavLinks from "./NavLinks";
import { useEffect, useState } from "react";
import { themes } from "../../utils/helper";
import { useSelector } from "react-redux";

const getThemeFromLocalStorage=()=>{
    return localStorage.getItem('theme') || themes.corporate
}

const Navbar = () => {
  const [theme,setTheme]=useState(getThemeFromLocalStorage());

  const handleTheme=()=>{
    const {corporate,luxury}=themes;
    const newTheme=theme===corporate ? luxury : corporate;
    setTheme(newTheme)
  }
  useEffect(()=>{
    document.documentElement.setAttribute('data-theme',theme);
    localStorage.setItem('theme',theme)
  },[theme])

  const numItemsInCart=useSelector(state=>Number(state.cart.numItemsInCart) || 0)
  console.log(Number(numItemsInCart))

  return (
    <nav className="bg-base-200 w-full fixed top-12 left-0">
      <div className="navbar align-element">
        <div className="navbar-start">
            <NavLink to='/' className="hidden lg:flex btn btn-primary text-3xl items-center">C</NavLink>
            {/*Dropdown */}
            <div className="dropdown">
                <label tabIndex={0} className="btn btn-ghost lg:hidden">
                    <FaBarsStaggered className="h-6 w-6"/>
                </label>
                <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] shadow-md bg-base-200 rounded-box w-52">
                    <NavLinks/>
                </ul>
            </div>
        </div>
        <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal">
                <NavLinks/>
            </ul>
        </div>
        <div className="navbar-end">
            {/*THEME */}
            <label className="swap swap-rotate">
                <input type="checkbox" onChange={handleTheme}/>
                {/*light */}
                <BsSunFill className="swap-on h-4 w-4"/>
                {/*dark */}
                <BsMoonFill className="swap-off h-4 w-4"/>
            </label>
            {/*CART */}
            <NavLink to='/cart' className='btn btn-ghost btn-circle btn-md ml-4'>
                <div className="indicator">
                    <BsCart3 className="h-6 w-6"/>
                    <span className="badge badge-sm badge-primary indicator-item">
                      {numItemsInCart}
                    </span>
                </div>
            </NavLink>
        </div>
      </div>
    </nav>
  )
}

export default Navbar

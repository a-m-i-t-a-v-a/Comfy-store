import { NavLink } from "react-router-dom"
import { FaBarsStaggered } from "react-icons/fa6";
import { BsCart3 } from "react-icons/bs";
import NavLinks from "./NavLinks";
const Navbar = () => {
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
            {/*CART */}
            <NavLink to='/cart' className='btn btn-ghost btn-circle btn-md ml-4'>
                <div className="indicator">
                    <BsCart3 className="h-6 w-6"/>
                    <span className="badge badge-sm badge-primary indicator-item">5</span>
                </div>
            </NavLink>
        </div>
      </div>
    </nav>
  )
}

export default Navbar

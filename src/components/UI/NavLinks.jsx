import { NavLink } from "react-router-dom";
import {links} from "../../utils/helper"
import { useSelector } from "react-redux";

const NavLinks = () => {
  const user=useSelector(state=>state.user.user)
  return (
    <>
      {links.map((link)=>{
        const {id,url,text}=link;
        if((url==='checkout' || url==='orders') && !user) return null
        return (
            <li key={id}>
                <NavLink className='capitalize' to={url}>
                    {text}
                </NavLink>
            </li>
        )
      })}
    </>
  )
}

export default NavLinks

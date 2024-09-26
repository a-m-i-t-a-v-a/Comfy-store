import { NavLink } from "react-router-dom";
import links from "../../utils/helper"

const NavLinks = () => {
  return (
    <>
      {links.map((link)=>{
        const {id,url,text}=link;
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

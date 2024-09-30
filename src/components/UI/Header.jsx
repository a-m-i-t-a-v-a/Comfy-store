import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { logoutUser } from "../../features/user/userSlice";
import { clearCart } from "../../features/cart/cartSlice";

const Header = () => {
  const navigate=useNavigate();
  const dispatch=useDispatch();
  const user=useSelector((state)=>state.user.user)

  const handleLogoutUser=()=>{
    dispatch(logoutUser());
    dispatch(clearCart())
    navigate('/')
  }

  return (
    <header className="bg-neutral w-full fixed top-0 left-0 py-2 text-neutral-content">
      <div className="align-element flex justify-center sm:justify-end">
        {/*USER */}
        {user ? <div className="flex gap-x-2 sm:gap-x-8 items-center">
          <p className="text-xs sm:text-sm">Hello {user.username}</p>
          <button className="btn btn-xs btn-outline btn-primary" onClick={handleLogoutUser}>Logout</button>
        </div>:(
          <div className="flex gap-x-6 justify-center items-center">
            <Link to='/login' className="link link-hover text-sm">Login / Guest</Link>
            <Link to='/register'>Register</Link>
          </div>
        )}
      </div>
    </header>
  );
}

export default Header;


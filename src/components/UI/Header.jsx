import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-neutral w-full fixed top-0 left-0 py-2 text-neutral-content">
      <div className="align-element flex justify-center sm:justify-end">
        {/*USER */}
        {/*LINKS */}
        <div className="flex gap-x-6 justify-center items-center">
          <Link to='/login' className="link link-hover text-sm">Login / Guest</Link>
          <Link to='/register'>Register</Link>
        </div>
      </div>
    </header>
  );
}

export default Header;


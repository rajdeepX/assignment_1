import { IoHeartOutline } from "react-icons/io5";
import logo from "../assets/images/logo-white.svg";
import { HiOutlineMagnifyingGlass } from "react-icons/hi2";
import { HiOutlineMenuAlt4 } from "react-icons/hi";

const Navbar = () => {
  return (
    <nav>
      <div className="logo-container">
        <a href="#" className="logo">
          <img src={logo} alt="logo" />
        </a>
      </div>
      <div className="nav-list-container">
        <ul className="nav-list">
          <li className="nav-link">
            <HiOutlineMagnifyingGlass />
          </li>
          <li className="nav-link">
            <IoHeartOutline />
          </li>
          <li className="nav-link">
            <p className="cart-text">Cart</p>
          </li>
          <li className="nav-link">
            <HiOutlineMenuAlt4 />
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

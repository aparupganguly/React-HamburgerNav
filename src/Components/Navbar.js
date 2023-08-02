import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "../Styles/main.css";
import Hamburger from "hamburger-react";
const Navbar = () => {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  return (
    <header>
      <h1>Logo</h1>
      <nav ref={navRef}>
        <a href='/#'>About</a>
        <a href='/#'>Services</a>
        <a href='/#'>Works</a>
        <a href='/#'>Clients</a>
        <a href='/#'>Contact</a>
        {/* <Hamburger
					className="nav-btn nav-close-btn"
					onClick={showNavbar}>
				</Hamburger> */}
      </nav>
      <button className='nav-btn' onClick={showNavbar}>
        <Hamburger />
      </button>
    </header>
  );
};

export default Navbar;

import LOGO from "../../assets/logo.png";
import LOGODARK from "../../assets/logo_dark.png";
import BURGER from "../../assets/burger.svg";
import BURGERDARK from "../../assets/burger_dark.png";
import { NavLink } from "react-router-dom";
import "./header.css"
import MobileMenu from "../MobileMenu";
import { useState } from "react";




const Header = ({ isLight, setIsLight }) => {

    const [menuOpen, setMenuOpen] = useState(false)

    const handleMenu = () => {
        setMenuOpen(!menuOpen)
    }


    return (
        <header className="header">

            <img className="logo1" src={isLight ? LOGODARK : LOGO} alt="theme" onClick={setIsLight} />
            <p className="tooltip">Сhange  theme to {isLight ? "darck" : "ligth"}  </p>
            <nav className="nav">
                <NavLink to="/" className='nav-item'>
                    <p>Home</p>
                </NavLink>
                <NavLink to="/about" className='nav-item'>
                    <p>About Me</p>
                </NavLink>
                <NavLink to="/portfolio" className='nav-item'>
                    <p>Portfolio</p>
                </NavLink>
                <NavLink to="/services" className='nav-item'>
                    <p>Services</p>
                </NavLink>
            </nav>

            <div >
                <NavLink to="/contact" className="main-btn header-btn" >
                Contact Me
            </NavLink></div>
            <div onClick={handleMenu} className="burger" >
                <img src={BURGER} />
            </div>
            <div onClick={handleMenu} className="burger-dark" type="button" >
                <img src={BURGERDARK} />
            </div>

            {menuOpen && <MobileMenu handleMenu={handleMenu} />}
        </header>
    );
}

export default Header;
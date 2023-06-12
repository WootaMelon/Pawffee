import { Link } from 'react-router-dom'
import { useState } from 'react'
export function Navbar() {

    const [isOpen, setIsOpen] = useState(false)
    const [isHidden, setIsHidden] = useState(true)
    const [activeLink, setActiveLink] = useState("");


    const toggleBurger = () => {
        setIsOpen(!isOpen)
        setIsHidden(!isHidden)
        document.body.classList.toggle('no-scroll')
    }

    return <>
        <nav className='nav' id='navbar'>
            <Link to="/">
                <img src="Logo.png" alt="Logo" className="navLogo" />
            </Link>
            <ul className="navLinks">
                <li className={activeLink === "Menu" ? "activeLink" : ""} onClick={() => setActiveLink("Menu")}><Link to="/menu">Menu</Link></li>
                <li className={activeLink === "Reviews" ? "activeLink" : ""} onClick={() => setActiveLink("Reviews")}><Link to="/reviews">Reviews</Link></li>
                <li className={activeLink === "Store" ? "activeLink" : ""} onClick={() => setActiveLink("Store")}><Link to="/store">Store</Link></li>
                <li className={activeLink === "Adopt" ? "activeLink" : ""} onClick={() => setActiveLink("Adopt")}><Link to="/adopt">Adopt</Link></li>
                <li className={activeLink === "Profile" ? "activeLink" : ""} onClick={() => setActiveLink("Profile")}><Link to="/profile">Profile</Link></li>
            </ul>
            <button type="button" className={isOpen ? 'hamburger open' : 'hamburger'} onClick={() => toggleBurger()} id="menu-btn">
                <span className="hamburger-top"></span>
                <span className="hamburger-middle"></span>
                <span className="hamburger-bottom"></span>
            </button>
            <div className={isHidden ? "mobile-menu hidden" : "mobile-menu "} id="menu">
                <ul onClick={() => toggleBurger()}>
                    <li><Link to="/menu">Menu</Link></li>
                    <li><Link to="/reviews">Reviews</Link></li>
                    <li><Link to="/store">Store</Link></li>
                    <li><Link to="/adopt">Adopt</Link></li>
                    <li><Link to="/profile">Profile</Link></li>
                </ul>

                <div className="mobile-menu-bottom">

                    <div>
                        <button className="navButton-mobile">contact us</button>
                    </div>
                </div>
            </div>
            <button className="navButton">contact us</button>

        </nav >

    </>
}
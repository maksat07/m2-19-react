import { useState } from 'react';
import {Link, NavLink,  } from 'react-router-dom'

import  './navbar.scss';
import menuIcon from '../../images/menu.svg'



function Navbar() {

  const[menuActive, setMenuActive] = useState(false);

  const showMenu =() => {
      setMenuActive(!menuActive)
  };

  const menuItems = [
    {
      id: 1,
      menu: "home",
      link: "/"
    },
    {
      id: 2,
      menu: "about",
      link: "about"
    },
    {
      id: 3,
      menu: "blog",
      link: "blog"
    },
    {
      id: 4,
      menu: "contact",
      link: "contact"
    }
  ]

  return (
    <nav className="navbar">
      <div className="container navbar__container">
        <Link to="/" className='navbar__logo'>
          Maksat
        </Link>
        <button onClick={showMenu} className='navbar__toggle'>
          <img src={menuIcon} alt="kdkd" />
        </button>
        <div className={menuActive ? "navbar__menu navbar__menu--show" : "navbar__menu"}>

        {menuItems.map((menuItem) => {
           return (
             <NavLink
              onClick={showMenu} 
              to={menuItem.link} 
              className='navbar__menu-link'
              key={menuItem.id}
              >
              {menuItem.menu}
                </NavLink>

           );
          })}
          {/* <NavLink onClick={showMenu} to="/" className='navbar__menu-link active'>Home</NavLink>
          <NavLink onClick={showMenu} to="/about" className='navbar__menu-link'>About</NavLink>
          <NavLink onClick={showMenu} to="/services" className='navbar__menu-link'>Services</NavLink>
          <NavLink onClick={showMenu} to="/contact" className='navbar__menu-link'>Contacts</NavLink>
          <NavLink onClick={showMenu} to="/gallery" className='navbar__menu-link'>Gallery</NavLink>
          <NavLink onClick={showMenu} to="/testimonials" className='navbar__menu-link'>Testimonials</NavLink> */}
        </div>
      </div>
    </nav>
  )
}

export default Navbar
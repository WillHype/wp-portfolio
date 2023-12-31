import React, { useState } from 'react';
import { stack as Menu } from 'react-burger-menu';
import { Link } from 'react-scroll';
import './burgermenu.css';

const BurgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => {
    setIsOpen(false);
  };

  const handleStateChange = (state) => {
    setIsOpen(state.isOpen);
  };
  

  return (
    <Menu className='mobMenu' isOpen={isOpen} onStateChange={handleStateChange} right>
      <Link
        className="menu-item"
        activeClass="active"
        to="hero"
        spy={true}
        smooth={true}
        offset={-100}
        duration={500}
        onClick={closeMenu}
      >
        Accueil
      </Link>
      <Link
        className="menu-item"
        activeClass="active"
        to="skills"
        spy={true}
        smooth={true}
        offset={-50}
        duration={500}
        onClick={closeMenu}
      >
        Compétences
      </Link>
      <Link
        className="menu-item"
        activeClass="active"
        to="works"
        spy={true}
        smooth={true}
        offset={-50}
        duration={500}
        onClick={closeMenu}
      >
        Portfolio
      </Link>
      <Link
        className="menu-item"
        activeClass="active"
        to="contactPage"
        spy={true}
        smooth={true}
        offset={-50}
        duration={500}
        onClick={closeMenu}
      >
        Contact
      </Link>
    </Menu>
  );
};

export default BurgerMenu;

import React from "react";
import './navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMessage } from "@fortawesome/free-solid-svg-icons";
import {Link} from 'react-scroll';
import BurgerMenu from "../BurgerMenu/burgermenu";

const Navbar = () => {
    return(
        <nav className="navbar">
            <div className="menu">
                <Link className="menuListItem"
                activeClass="active" 
                to="hero" 
                spy={true} 
                smooth={true} 
                offset={-100} 
                duration={500}>Accueil</Link>
                <Link className="menuListItem"
                activeClass="active" 
                to="skills" 
                spy={true} 
                smooth={true} 
                offset={-50} 
                duration={500}>Compétences</Link>
                <Link className="menuListItem"
                activeClass="active" 
                to="works" 
                spy={true} 
                smooth={true} 
                offset={40} 
                duration={500}>Portfolio</Link>
                
            </div>
            <BurgerMenu />
            <button className="menuBtn" onClick={() => document.getElementById('contact').scrollIntoView({behavior:'smooth'})}>
                <FontAwesomeIcon icon={faMessage} className="menuImg"/>Contactez moi
            </button>
        </nav>
    )
}

export default Navbar
import React from "react";
import './hero.css';
import background from '../../assets/image.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-scroll";

const Hero = () => {
    return(
        <section id="hero">
            <div className="heroContent">
                <span className="hello">Bonjour,</span>
                <span className="introText">Je suis <span className="introName">Willy</span> <br />Développeur Front-end</span>
                <p className="introPara">Je suis développeur Front-end junior basé en île-de-France ayant <br /> de l'expérience en Design et Web</p>
                <Link><button className="btn"><FontAwesomeIcon icon={faBriefcase} className="btnImg"/>Discutons</button></Link>
            </div>
            <img src={background} alt="profil" className="bg" />
        </section>
    )
}

export default Hero;
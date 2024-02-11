import React from "react";
import './hero.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";


const Hero = () => {
    const redirection = () => {
        window.open("https://www.linkedin.com/in/willy-pochot-a48678297/" , "_blank");
      };
    return(
        <section id="hero">
            <div className="heroContent">
                <span className="hello">Bonjour,</span>
                <span className="introText">Je suis <span className="introName">Willy</span> <br />Développeur Front-end</span>
                <p className="introPara">Je suis développeur Front-end junior basé en île-de-France ayant <br /> de l'expérience en Design et Web</p>
                <button className="btn" onClick={redirection}><FontAwesomeIcon icon={faBriefcase} className="btnImg"/>Discutons</button>
            </div>
        </section>
    )
}

export default Hero;
import React from "react";
import './hero.css';



const Hero = () => {

    return(
        <section id="hero">
            <div className="heroContent">
                <span className="hello">Bonjour,</span>
                <span className="introText">Je suis <span className="introName">Willy</span> <br />Développeur Front-end</span>
                <p className="introPara">Je suis développeur Front-end junior basé en île-de-France ayant <br /> de l'expérience en Design et Web</p>
            </div>
        </section>
    )
}

export default Hero;
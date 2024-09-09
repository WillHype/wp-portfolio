import React from "react";
import './hero.css';
import photoProfil from '../../assets/profilpic.png';



const Hero = () => {

    return(
        <section id="hero">
            <div className="heroContent">
                <span className="hello">Bonjour,</span>
                <span className="introText">Je suis <span className="introName">Willy</span> <br /></span>
                <p className="introPara">Je suis UI Designer & intégrateur Web basé en île-de-France ayant <br /> de l'expérience en Design et Web</p>
            </div>
            <div>
                <img src={photoProfil} alt="photo de profil" className="profilPic"/>
            </div>
        </section>
    )
}

export default Hero;
import React from "react";
import './skills.css'

//icons
import ai from '../../assets/adobe-ai.svg';
import id from '../../assets/adobe-id.svg';
import ps from '../../assets/adobe-ps.svg';
import xd from '../../assets/adobe-xd.svg';
import css3 from '../../assets/css3.svg';
import figma from '../../assets/figma.svg';
import html5 from '../../assets/html5.svg';
import js from '../../assets/javascript.svg';
import reactjs from '../../assets/reactjs.svg';
import sass from '../../assets/sass.svg';

const Skills = () => {
    return(
        <section id="skills">
            <h1 className="skillTitle">Ce que je fais</h1>
            <p className="skillDescription">Développeur Front-end junior, je souhaite renforcer mes compétences sur React JS pour en devenir un spécialiste. Apprenons ensemble et collaborons ! </p>
            <div className="skillBars">
                <div className="skillBar">
                    <div className="skillBarText">
                        <h2>Front-end</h2>
                        <p>Mon apprentissage du Web était centré sur ces technologies, néanmoins je saurais m'adapter aux autres technologies en fonction des projets.</p>
                    </div>
                    <div className="techIconsContainer">
                        <ul>
                            <li><img src={html5} alt="html 5 icon" className="skillBarIcon" /></li>
                            <li><img src={css3} alt="css3 icon" className="skillBarIcon" /></li>
                            <li><img src={js} alt="javascript icon" className="skillBarIcon" /></li>
                            <li><img src={sass} alt="sass icon" className="skillBarIcon" /></li>
                            <li><img src={reactjs} alt="react js icon" className="skillBarIcon" /></li>
                        </ul>
                    </div>
                    
                </div>
                <div className="skillBar">
                    <div className="skillBarText">
                        <h2>Design</h2>
                        <p>La force de mon bachelor en édition et communication numérique était le panel de technologies diverses et variées que j'ai pu aborder au cours de mon parcours. Mon affinité s'est portée naturellement vers le graphisme web.</p>
                    </div>
                    <div className="techIconsContainer">
                        <ul>
                            <li><img src={ps} alt="photoshop icon" className="skillBarIcon" /></li>
                            <li><img src={ai} alt="illustrator icon" className="skillBarIcon" /></li>
                            <li><img src={id} alt="indesign icon" className="skillBarIcon" /></li>
                            <li><img src={xd} alt="adobe xd icon" className="skillBarIcon" /></li>
                            <li><img src={figma} alt="figma icon" className="skillBarIcon" /></li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Skills;
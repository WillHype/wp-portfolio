import React from "react";
import './works.css';
import projectData from '../../data/projectsData.json';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import Technos from "./Technos/technos";
// import { faHtml5, faCss3, faJs, faSass } from "@fortawesome/free-brands-svg-icons";


const Works = () => {
    
    // const getIconForTechnology = (technology) => {
    //     switch (technology) {
    //         case "HTML":
    //             return <FontAwesomeIcon icon={faHtml5} />;
    //         case "CSS":
    //             return <FontAwesomeIcon icon={faCss3} />;
    //         case "JavaScript":
    //             return <FontAwesomeIcon icon={faJs} />;
    //         case "Sass":
    //             return <FontAwesomeIcon icon={faSass} />;
            
    //         default:
    //             return null;
    //     }
    // };
    

    return(
        <section id="works">
            <h2 className="worksTitle">Mon portfolio</h2>
            <p className="worksDescription">Riche d'un parcours varié, mon portfolio présente avant tout mes compétences développées 
            au cours de ma formation au sein d'OpenClassroom, néanmoins n'hésitez pas à consulter mon book digital.</p>
            <div className="worksThumbs">
                {projectData.map((project, index) => (
                <div key={index} className="workItem">
                    <img src={process.env.PUBLIC_URL + '/' + project.image} alt={project.name} className="worksImg" />
                    <div className="layer">
                        <h3>{project.name}</h3>
                        <p>{project.description}</p>
                        {/* <div className="technologies">
                        <h4>Technologies :</h4>
                        <div className="technology-icons">
                            {project.technologies.map((tech, techIndex) => (
                                <span key={techIndex}>
                                    {getIconForTechnology(tech)} {tech}
                                </span>
                            ))}
                        </div>
                    </div> */}
                    <a href={project.demoLink}><FontAwesomeIcon icon={faArrowUpRightFromSquare} style={{color: "#7451eb",}} /></a>
                    </div>
                    <div className="technologies">
                    <Technos technologies={project.technologies} /> 
                    </div>
                </div>
        ))}
            </div>
        </section>
    );
}

export default Works;
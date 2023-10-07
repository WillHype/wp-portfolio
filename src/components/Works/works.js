import React from "react";
import './works.css';
import projectData from '../../data/projectsData.json';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";


const Works = () => {
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
                        <a href={project.demoLink}><FontAwesomeIcon icon={faArrowUpRightFromSquare} style={{color: "#7451eb",}} /></a>
                    </div>
                </div>
        ))}
            </div>
        </section>
    );
}

export default Works;
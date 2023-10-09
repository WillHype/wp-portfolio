import React, { useState } from "react";
import './about.css';
import aboutimg from '../../assets/ab-image.png';

const About = () => {

    const [activeTab, setActiveTab] = useState('competences');
    const changeTab = (tabId) => {
        setActiveTab(tabId);
      };

    return(
        <section id="about">
            <div className="container">
                <div className="about-row">
                    <div className="about-col-1">
                    <img src={aboutimg} alt="2e profil souriant" className="aboutJpg" />
                    </div>
                        
                    <div className="about-col-2">
                    <h2 className="aboutTitle">A propos de moi</h2>
                        <p className="aboutDescription">Ayant commencé par une formation généraliste en multimédia, 
                        j'ai souhaité monter en compétence afin de compléter mon profil</p>
                        <div className="tab-titles">
                            <p className={`tab-links ${activeTab === 'competences' ? 'active-link' : ''}`} onClick={() => changeTab('competences')}>Compétences</p>
                            <p className={`tab-links ${activeTab === 'experiences' ? 'active-link' : ''}`} onClick={() => changeTab('experiences')}>Expériences</p>
                            <p className={`tab-links ${activeTab === 'formations' ? 'active-link' : ''}`} onClick={() => changeTab('formations')}>Formations</p>
                        </div>
                        <div className={`tab-contents ${activeTab === 'competences' ? 'active-tab' : ''}`} id="competences">
                            <ul>
                                <li>Graphisme Web<span><br />Design d'interface, composition</span></li>
                                <li>Développement front-end<span><br />Intégration responsive, (HTML, CSS, SASS, JavaScript, 
                                React & Redux), <br />versioning via web Git & GitHub </span></li>
                                <li>Gestion de projet<span><br />Planification</span></li>
                            </ul>
                        </div>
                        <div className={`tab-contents ${activeTab === 'experiences' ? 'active-tab' : ''}`} id="experiences">
                        <div className="experience-list">
                            <ul>
                                <li><span>2022</span><br />Assistant informatique de proximité à la Direction générale des entreprises</li>
                                <li><span>2021 - 2022</span><br />Technicien de proximité en systèmes d'information au Conseil supérieur de la magistrature</li>
                                <li><span>2019</span><br />Graphiste/Webdesigner à MAXIBURO (Groupe Bruneau)</li>
                                <li><span>2015-2018</span><br />Freelance</li>
                                <li><span>2015</span><br />Graphiste chez Urban Locker</li>
                                <li><span>2014 - 2015</span><br />Consultant digital pour MyWebSpot</li>
                                <li><span>2012 - 2014</span><br />Chef de projet junior chez Naïve Records</li>
                                <li><span>2012</span><br />Assistant directeur artistique chez Gong Média</li>
                            </ul>
                            </div>
                        </div>
                        <div className={`tab-contents ${activeTab === 'formations' ? 'active-tab' : ''}`} id="formations">
                            <ul>
                                <li><span>2023</span><br />Formation Développeur Intégrateur Web chez <a href="https://openclassrooms.com/fr/paths/594-integrateur-web" target="_blank" className="aboutLink">OpenClassRooms</a> </li>
                                <li><span>2011-2014</span><br />Bachelor édition et communication numériques à IESA Multimédia</li>
                            </ul>
                        </div>
                    </div>        
                </div>
            </div>

        </section>
    )
}

export default About;
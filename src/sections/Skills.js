import webdesign from "../img/icons/webdesign-icon.svg";
import workflow from "../img/icons/workflow-icon.svg";
import seo from "../img/icons/seo-icon.svg";
import scrum from "../img/icons/scrum-icon.svg";
import Doigt from "../img/finger-pixel.svg";
import { Parallax } from "react-scroll-parallax";

import './Skills.scss';

const Skills = () => {


    return (
        <section className="skills" id="skills">

            <div className="skills_title">
                <h2>J'ai plus <br className="hidden-mobile"/> d'une corde <br className="hidden-mobile"/> à mon arc .</h2>
            </div>

            <div className="skills_container">

                <div className="skills_container-bloc">
                    <p className="title">[ Front-End ]</p>
                    <p className="text">J'aime contribuer au développement technique et <br/>créatif d'interfaces utilisateur.</p>
                    <div className="skills_container-bloc--list">
                        <p className="bouton">Html</p>
                        <p className="bouton">Css | Scss</p>
                        <p className="bouton">Javavscript</p>
                        <p className="bouton">React</p>
                        <p className="bouton">Angular</p>
                        <p className="bouton">Next</p>
                        <p className="bouton">Php</p>
                        <p className="bouton">Jest</p>
                    </div>
                </div>

                <div className="skills_container-bloc">
                    <p className="title">[ Back-End ]</p>
                    <p className="text">Je sais connecter des API restful en React avec mongoDB et Express.</p>
                    <div className="skills_container-bloc--list">
                        <p className="bouton">Node</p>
                        <p className="bouton">Express</p>
                        <p className="bouton">MongoDB</p>
                    </div>
                </div>

                {/* <Parallax translateY={['0px', '450px']} >
                    <figure className="skills_container-img">
                        <img src={Doigt} alt="Emoji pointe du doigt"></img>
                    </figure>
                </Parallax> */}
            </div>

            <div className="skills_domain">
                <div className="skills_domain-container">

                    <div className="bloc">
                        <figure className="bloc-icon">
                            <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect x="9.71289" y="9.5" width="45" height="45"  strokeWidth="5"/>
                                <rect x="46.5" y="2.5" width="15" height="15" strokeWidth="5"/>
                                <rect x="46.5" y="46.5" width="15" height="15" strokeWidth="5"/>
                                <rect x="2.5" y="46.5" width="15" height="15" strokeWidth="5"/>
                                <rect x="2.5" y="2.5" width="15" height="15" strokeWidth="5"/>
                            </svg>
                        </figure>
                        <div className="bloc-content">
                            <div className="bloc-content--title">
                                <h3>Web <br/> design</h3>
                            </div>
                            <div className="bloc-content--list">
                                <div>
                                    <p>Adobe XD</p>
                                    <p>Illustrator</p>
                                    <p>Photoshop</p>
                                    <p>Figma</p>
                                </div>
                            </div>
                        </div> 
                    </div>
    
                
                    <div className="bloc">
                        <figure className="bloc-icon">
                            <svg width="61" height="61" viewBox="0 0 61 61" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M3 30.4707L30.4708 44.2061L58 30.4707" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M3 44.2061L30.4708 57.9415L58 44.2061" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round"/>
                                <path fillRule="evenodd" clipRule="evenodd" d="M3 17.2745L30.4983 30.4708L58 17.2745L30.4983 3L3 17.2745Z" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </figure>
                        <div className="bloc-content">
                            <div className="bloc-content--title">
                                <h3>Work <br/> flow</h3>
                            </div>
                            <div className="bloc-content--list">
                                <div>
                                    <p>Git</p>
                                    <p>Docker</p>
                                    <p>FileZilla</p>
                                    <p>Render</p>
                                </div>
                            </div>
                        </div>
                    </div>
                
                
                    <div className="bloc txt">
                        <p>
                            Au cours de mes études et expériences, j'ai élargi mes compétences autour du 
                            développement web, en équipe ou de manière autonomie. 
                        </p>
                    </div>
            
            
                    <div className="bloc projet">
                        <div>
                            <p>50+</p>
                            <p>Projets réalisés</p>
                        </div>       
                    </div>
                
                
                    <div className="bloc methode">
                        <figure className="bloc-icon">
                            <svg width="102" height="64" viewBox="0 0 102 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M11 54L40 20.5L62 41L96.5 8.5" strokeWidth="5"/>
                                <path d="M89 2.5H86.5V5V13V15.5H89H97H99.5V13V5V2.5H97H89Z" strokeWidth="5"/>
                                <rect x="33.5" y="15.5" width="13" height="13" strokeWidth="5"/>
                                <path d="M58.5 35H56V37.5V45.5V48H58.5H66.5H69V45.5V37.5V35H66.5H58.5Z" strokeWidth="5"/>
                                <rect x="2.5" y="48.5" width="13" height="13" strokeWidth="5"/>
                            </svg>
                        </figure>
                        <div className="bloc-content">
                            <div className="bloc-content--title">
                                <h3>Seo <br/> strategy</h3>
                            </div>
                            <div className="bloc-content--list">
                                <div>
                                    <p>Google Analytics</p>
                                    <p>Google Search Console</p>
                                    <p>Balises sémantiques</p>
                                    <p>Meta</p>
                                </div>
                            </div>
                        </div>
                    </div>
        
        
                    <div className="bloc optimisation">
                        <figure className="bloc-icon">
                            <svg width="55" height="55" viewBox="0 0 55 55" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <line x1="47.5" y1="29" x2="47.5" y2="45" strokeWidth="5"/>
                                <rect x="20.5" y="2.5" width="14" height="14" strokeWidth="5"/>
                                <rect x="22.5" y="42.5" width="10" height="10" strokeWidth="5"/>
                                <rect x="2.5" y="42.5" width="10" height="10" strokeWidth="5"/>
                                <rect x="42.5" y="42.5" width="10" height="10" strokeWidth="5"/>
                                <line x1="27.5" y1="14" x2="27.5" y2="45" strokeWidth="5"/>
                                <line x1="7.5" y1="29" x2="7.5" y2="40" strokeWidth="5"/>
                                <line x1="5" y1="26.5" x2="50" y2="26.5" strokeWidth="5"/>
                            </svg>
                        </figure>
                        <div className="bloc-content">
                            <div className="bloc-content--title">
                                <h3>Scrum <br/> method</h3>
                            </div>
                            <div className="bloc-content--list">
                                <div>
                                    <p>Agile</p>
                                    <p>Mêlée</p>
                                    <p>Post-it</p>
                                </div>
                            </div>
                        </div>
                    </div>
                   
                </div>  
            </div>
        </section> 
    ) 
}

export default Skills;
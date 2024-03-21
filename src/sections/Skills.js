import Doigt from "../img/finger.png";
import IconConcept from "../img/icon-concept.svg";
import IconArtDirection from "../img/icon-art-direction.svg";
import IconUxUi from "../img/icon-ux-ui.svg";
import IconWebdesign from "../img/icon-webdesign.svg";
import IconSmile from "../img/icon-smile.svg";

import './Skills.scss';

const Skills = () => {


    return (
        <section className="skills" id="skills">

            <div className="skills_sticky">
                <div className="skills_sticky-container">
                    <div className="bloc">
                        <p className="bloc-title">Need a site ?</p>
                        <div className="bloc-subtitle">
                            <p className="bloc-subtitle--1">Say no more <span>(...)</span></p>
                            <p className="bloc-subtitle--2">I can handle it !</p>
                        </div>
                    </div>
                    <div className="bloc">
                        <p className="bloc-title">Need a site ?</p>
                        <div className="bloc-subtitle">
                            <p className="bloc-subtitle--1">Say no more <span>(...)</span></p>
                            <p className="bloc-subtitle--2">I can handle it !</p>
                        </div>
                    </div>
                    <div className="bloc">
                        <p className="bloc-title">Need a site ?</p>
                        <div className="bloc-subtitle">
                            <p className="bloc-subtitle--1">Say no more <span>(...)</span></p>
                            <p className="bloc-subtitle--2">I can handle it !</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="skills_title">
                <h2>I have few skills <br/> in my pocket</h2>
            </div>

            <div className="skills_container">
                <div className="skills_container-blocs">
                    <div className="bloc">
                        <h3>Frontend</h3>
                        <div className="bloc_btn">
                            <p className="bouton bouton_noir">Html</p>
                            <p className="bouton bouton_noir">Scss</p>
                            <p className="bouton bouton_noir">Javascript</p>
                            <p className="bouton bouton_noir">React</p>
                            <p className="bouton bouton_noir">Redux</p>
                            <p className="bouton bouton_noir">Next</p>
                            <p className="bouton bouton_noir">Php</p>
                        </div>
                    </div>
                    <div className="bloc">
                        <h3>Backend</h3>
                        <div className="bloc_btn">
                            <p className="bouton bouton_noir">Node.js</p>
                            <p className="bouton bouton_noir">MongoDB</p>
                            <p className="bouton bouton_noir">Express</p>
                        </div>
                    </div>
                </div>
                <figure className="skills_container-img">
                    <img src={Doigt} alt="Emoji pointe du doigt"></img>
                </figure>
            </div>

            
        
            <div className="skills_domain">
                <div className="bloc">
                    <figure className="bloc-icon">
                        <img src={IconConcept} alt="Concept"/>
                    </figure>
                    <h3>Concept</h3>
                </div>
                <div className="bloc">
                    <figure className="bloc-icon">
                        <img src={IconArtDirection} alt="Art direction"/>
                    </figure>
                    <h3>Art <br/> Direction</h3>
                </div>
                <div className="bloc txt">
                    <p>
                        WITH OVER A DECADE OF EXPERTISE, I CONNECT DESIGN,  EXPERIMENTATION   TECHNOLOGY TO DRIVE 
                        PROJECTS TO THEIR GREATEST POTENTIAL
                    </p>
                </div>
                <div className="bloc">
                    <div>
                        <p>50+</p>
                        <p>Projets réalisés</p>
                    </div>       
                </div>
                <div className="bloc">
                    <figure className="bloc-icon">
                        <img src={IconUxUi} alt="UX UI"/>
                    </figure>
                    <h3>UX-UI <br/> Design</h3>
                </div>
                <div className="bloc">
                    <figure className="bloc-icon">
                        <img src={IconWebdesign} alt="Webdesign"/>
                    </figure>
                    <h3>Webdesign</h3>
                </div>
                <div className="bloc">
                    <figure className="bloc-icon">
                    <img src={IconSmile} alt="Smile"/>
                </figure> 
                </div>
            </div>
        </section> 
    ) 
}

export default Skills;
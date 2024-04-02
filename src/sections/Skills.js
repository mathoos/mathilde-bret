import Doigt from "../img/finger-pixel.svg";
import IconConcept from "../img/icon-concept.svg";
import IconArtDirection from "../img/icon-art-direction.svg";
import IconUxUi from "../img/icon-ux-ui.svg";
import IconWebdesign from "../img/icon-webdesign.svg";
import IconSmile from "../img/icon-smile.svg";
import { Parallax } from "react-scroll-parallax";

import './Skills.scss';

const Skills = () => {


    return (
        <section className="skills" id="skills">

            <div className="skills_title">
                <h2>I have few skills <br/> in my pocket</h2>
            </div>

            <div className="skills_container">

                <div className="skills_container-list">
                    <p>Html</p>
                    <p>Css | Scss</p>
                    <p>Javascript</p>
                    <p>Php</p>
                    <p>React | next | Angular</p>
                    <p>Node</p>
                    <p>Express</p>
                    <p>Mongodb</p>
                </div>
                <Parallax translateY={['0px', '450px']} rotate={['5deg', '-20deg']}>
                    <figure className="skills_container-img">
                        <img src={Doigt} alt="Emoji pointe du doigt"></img>
                    </figure>
                </Parallax>
            </div>

            <div className="skills_domain">
                <div className="skills_domain-container">
                    <div className="bloc">
                        <figure className="bloc-icon">
                            <img src={IconConcept} alt="Concept"/>
                        </figure>
                        <h3>Web <br/> design</h3>
                    </div>
                    <div className="bloc">
                        <figure className="bloc-icon">
                            <img src={IconArtDirection} alt="Art direction"/>
                        </figure>
                        <h3>UX-UI <br/> Design</h3>
                    </div>
                    <div className="bloc txt">
                        <p>
                            De nature curieuse et créative, j'aime élargir mes compétences autour du développement web, 
                            afin de devenir entièrement autonome et évoluer dans un univers où la maîtrise ne m'est pas inconnue.
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
                        <h3>Méthode <br/> SCRUM</h3>
                    </div>
                    <div className="bloc">
                        <figure className="bloc-icon">
                            <img src={IconWebdesign} alt="Webdesign"/>
                        </figure>
                        <h3>SEO</h3>
                    </div>
                    {/* <div className="bloc">
                        <figure className="bloc-icon">
                            <img src={IconSmile} alt="Smile"/>
                        </figure> 
                    </div> */}
                </div>  
            </div>

            {/* <div className="skills_sticky">
                <div className="skills_sticky-container">
                    <div className="bloc">
                        <p className="bloc-title">Need a site ?</p>
                        <div className="bloc-subtitle">
                            <p className="bloc-subtitle--1">Say no more...</p>
                            <p className="bloc-subtitle--2">I can handle it !</p>
                        </div>
                    </div>
                    <div className="bloc">
                        <p className="bloc-title">Need a site ?</p>
                        <div className="bloc-subtitle">
                            <p className="bloc-subtitle--1">Say no more...</p>
                            <p className="bloc-subtitle--2">I can handle it !</p>
                        </div>
                    </div>
                    <div className="bloc">
                        <p className="bloc-title">Need a site ?</p>
                        <div className="bloc-subtitle">
                            <p className="bloc-subtitle--1">Say no more...</p>
                            <p className="bloc-subtitle--2">I can handle it !</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="skills_black"></div> */}
        </section> 
    ) 
}

export default Skills;
import Doigt from "../img/finger-pixel.svg";
import IconConcept from "../img/icon-concept.svg";
import IconArtDirection from "../img/icon-art-direction.svg";
import IconUxUi from "../img/icon-ux-ui.svg";
import IconWebdesign from "../img/icon-webdesign.svg";
import IconSmile from "../img/icon-smile.svg";
import { Parallax } from "react-scroll-parallax";
import { Reveal } from "react-awesome-reveal";
import {scaleInvert } from "../functions/keyframes";

import './Skills.scss';

const Skills = () => {


    return (
        <section className="skills" id="skills">

            <div className="skills_title">
                <h2>J'ai plus d'une corde <br className="hidden-mobile"/> à mon arc</h2>
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
                    <Reveal keyframes={scaleInvert}>
                        <div className="bloc">
                            <figure className="bloc-icon">
                                <img src={IconConcept} alt="Concept"/>
                            </figure>
                            <h3>Web <br/> design</h3>
                        </div>
                    </Reveal>
                    <Reveal keyframes={scaleInvert} delay="20">
                        <div className="bloc">
                            <figure className="bloc-icon">
                                <img src={IconArtDirection} alt="Art direction"/>
                            </figure>
                            <h3>UX-UI <br/> Design</h3>
                        </div>
                    </Reveal>
                    <Reveal keyframes={scaleInvert} delay="40">
                        <div className="bloc txt">
                            <p>
                                Au cours de mes études et expériences, j'ai élargi mes compétences autour du 
                                développement web, en équipe ou de manière autonomie. 
                            </p>
                        </div>
                    </Reveal>
                    <Reveal keyframes={scaleInvert}>
                        <div className="bloc projet">
                            <div>
                                <p>50+</p>
                                <p>Projets réalisés</p>
                            </div>       
                        </div>
                    </Reveal>
                    <Reveal keyframes={scaleInvert} delay="20">
                        <div className="bloc">
                            <figure className="bloc-icon">
                                <img src={IconUxUi} alt="UX UI"/>
                            </figure>
                            <h3>Méthode <br/> SCRUM</h3>
                        </div>
                    </Reveal>
                    <Reveal keyframes={scaleInvert} delay="40">
                        <div className="bloc">
                            <figure className="bloc-icon">
                                <img src={IconWebdesign} alt="Webdesign"/>
                            </figure>
                            <h3>Optimisation <br/> SEO</h3>
                        </div>
                    </Reveal>
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
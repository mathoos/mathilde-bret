import React from 'react';
import { Reveal } from "react-awesome-reveal";
import { bottomAnimationBloc , bottomAnimationTxt , diagonaleAnimationTxt , scaleAnimation } from "../functions/keyframes";
import { Parallax } from "react-scroll-parallax";
import MathildeBureau from "../img/moi/coding-noir-blanc.jpg";
import Etoile from "../img/etoile.svg";
import computerIcon from "../img/icons/computer-icon.svg";
import webdesignIntroIcon from "../img/icons/webdesign-intro-icon.svg";
import devIcon from "../img/icons/dev-icon.svg";
import handCircledText from "../img/hand-circled-text.svg";
import Rubber from "../img/rubber_head.svg";

import './About.scss';

const About = () => {

    return (
        <section className="about" id="about">

            <div className="about_intro">
                <div className="about_intro-container">
                    <div className="about_intro-container--title">
                        <Reveal keyframes={bottomAnimationTxt}>
                            <h2>À la recherche d'une nouvelle <span>opportunité .</span></h2> 
                        </Reveal>
                    </div>
                    <div className="about_intro-container--subtitle">
                        <Reveal keyframes={bottomAnimationTxt}>
                            <p className="subtitle">
                                Développeuse front-end&nbsp;
                                <span className="icon">
                                    <img src={computerIcon} alt="Ordinateur" />
                                </span> passionnée, <br className="hidden-mobile"/> 
                                j'associe mes compétences en développement web&nbsp; 
                                <span className="icon">
                                    <img src={devIcon} alt="Développement web" />
                                </span><br className="hidden-mobile"/>  
                                &nbsp;et en webdesign&nbsp; 
                                <span className="icon">
                                    <img src={webdesignIntroIcon} alt="Webdesign" />
                                </span>
                                &nbsp;pour créer de jolies interfaces <br className="hidden-mobile"/> 
                                ergonomiques et attractives.
                            </p>
                        </Reveal>     
                    </div>
                    <figure className="about_intro-container--circledText">
                        <img src={handCircledText} alt="Texte entouré à la main" />
                    </figure>
                </div>
            </div>

            <div className="about_presentation">
                <div className="about_presentation-container">
                    <div className="about_presentation-container--text">
                        <p>
                            En agence de communication, j'ai travaillé sur l'intégration et la refactorisation de 
                            plusieurs sites internet, entourée d'une équipe de développeurs, graphistes, et 
                            chefs de projets.
                        </p>
                        <p>
                            Minutieuse, je tente de donner vie à chaque site internet avec l'ambition d'offrir 
                            une expérience fluide et immersive, tout en apportant une réelle valeur ajoutée.
                        </p>
                        <button className="bouton bouton_bgBlancOmbre">Télécharger mon CV</button>
                    </div>
                    <figure className="about_presentation-container--img">
                        <img src={MathildeBureau} alt="Mathilde en train de coder sur son ordinateur" />
                    </figure>
                </div>
            </div>
           
            <Reveal keyframes={bottomAnimationBloc}>
                <div className="sticky">

                    <div className="sticky_container">
                        <Reveal keyframes={bottomAnimationBloc}>
                            <p className="woow">We're a match if</p>
                        </Reveal>
                        <figure className="etoile">
                            <img src={Etoile} alt="Etoile" />
                        </figure>
                        <figure className="etoile">
                            <img src={Etoile} alt="Etoile" />
                        </figure>
                        <p className="bouton bouton_bgBlanc">Computer</p>
                        <p className="bouton bouton_bgBlanc">Computer</p>
                        <figure className="rubber">
                            <img src={Rubber} alt="Etoile" />
                        </figure>
                    </div>
                    
                    <div className="sticky_container">
                        <div className="sticky_container-content">
                            <div className="txt">
                                <p>
                                    De nature curieuse et autonome, j'aime découvrir de nouveaux langages afin de pouvoir 
                                    sélectionner au mieux les outils qui répondront au besoin spécifique d'un projet.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="sticky_container">
                        <div className="sticky_container-content">
                            <div className="txt">
                                <p>
                                    J’ai acquis au cours de mon expérience une multitude de compétences qui se complètent 
                                    et me permettent de collaborer activement dans une équipe de communication.
                                </p>
                            </div>
                        </div>
                    </div>   
                </div>
            </Reveal>
            
        </section>
    ) 
}


export default About;
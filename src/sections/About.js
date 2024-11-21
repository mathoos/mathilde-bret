import React from 'react';
import MathildeBureau from "../img/moi/coding-noir-blanc.jpg";
import Etoile from "../img/etoile.svg";

import './About.scss';

const About = () => {

    return (
        <section className="about" id="about">
            

            <div className="about_container">
                <div className="title">
                    <h2>À la recherche d'une nouvelle opportunité</h2> 
                    <p>
                        Développeuse front-end passionnée, j'associe mes compétences en développement web et en webdesign 
                        pour créer de jolies interfaces ergonomiques et attractives.
                    </p>        
                </div>

                <div className="about_container-presentation">
                    <div className="about_container-presentation--content">
                        <div className="txt">
                            <p>
                                En agence de communication, j'ai travaillé sur l'intégration et la refactorisation de 
                                plusieurs sites web, entourée d'une équipe de graphistes, développeurs, chefs 
                                de projets, rédacteurs et commerciaux.
                            </p>
                        </div>
                        <figure className="etoile">
                            <img src={Etoile} alt="Etoile" />
                        </figure>
                        <p className="bouton bouton_bgNoir">Computer</p>
                        <figure className="img">
                            <img src={MathildeBureau} alt="Développeuse front-end sur ordinateur" />
                        </figure>
                        <figure className="etoile">
                            <img src={Etoile} alt="Etoile" />
                        </figure>
                        <p className="bouton bouton_bgNoir">Frontend</p>
                    </div>
                    <div className="about_container-presentation--content">
                        <div className="txt">
                            <p>
                                Minutieuse, je tente de donner vie à chaque site internet avec l'ambition d'offrir 
                                une expérience fluide et immersive, tout en apportant une réelle valeur ajoutée.
                            </p>
                        </div>
                        <p className="bouton bouton_bgNoir">www</p>
                        <figure className="etoile">
                            <img src={Etoile} alt="Etoile" />
                        </figure>
                        <p className="bouton bouton_bgNoir">Tech friendly</p>
                    </div>
                </div>
            </div>

            <div className="about_subtitle">
                <p>
                    Diplômée d’une licence en Communication & Médias, et titulaire d’un titre de Webdesigner, j’ai 
                    récemment achevé mon contrat d’alternance en agence de communication en tant que 
                    développeuse front-end.
                </p>
            </div>

            <div className="sticky">

                <div className="sticky_container">
                    <p className="woow">We're a match if</p>
                    <figure className="etoile">
                        <img src={Etoile} alt="Etoile" />
                    </figure>
                    <figure className="etoile">
                        <img src={Etoile} alt="Etoile" />
                    </figure>
                    <p className="bouton bouton_bgBlanc">Computer</p>
                    <p className="bouton bouton_bgBlanc">Computer</p>
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
            

        </section>
    ) 
}


export default About;
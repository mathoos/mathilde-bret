import React, { useEffect } from 'react';
import MathildeBureau from "../img/about.jpg";
import Pastille from "../img/pastille.svg";
import RollingStones from "../img/rolling-stones-tshirt.jpg";
import RollingStones2 from "../img/dropdown.jpg";
import AppareilPhoto from "../img/appareil-photo.png";
import './About.scss';

import { Reveal } from "react-awesome-reveal";
import {scaleAnimation , bottomAnimation } from "../functions/keyframes";

const About = () => {

    useEffect(() => {
        
        const handleScroll = () => {

            const svgElement = document.querySelector('.bloc_txt-arrow');

            if (svgElement) {
                const svgOffset = svgElement.getBoundingClientRect().top;
                const svgBottom = svgElement.getBoundingClientRect().bottom;
                const offsetMargin = 200; 
                const windowHeight = window.innerHeight || document.documentElement.clientHeight;
    
                if (svgOffset < windowHeight - offsetMargin && svgBottom > 0) {
                    svgElement.classList.add('in-viewport');
                } else {
                    svgElement.classList.remove('in-viewport');
                }
            }

            const aboutSticky = document.querySelector('.about_sticky-container');
            const aboutStickyOffsetBoundingBox = aboutSticky.getBoundingClientRect();
            const aboutStickyOffset = aboutStickyOffsetBoundingBox.top + window.scrollY;
            
            const containerDeux = document.querySelector('.about_sticky-container.deux');
            const containerDeuxBoundingBox = containerDeux.getBoundingClientRect();
            const containerDeuxOffset = containerDeuxBoundingBox.top + window.scrollY;

            const containerTrois = document.querySelector('.about_sticky-container.trois');
            const containerTroisBoundingBox = containerTrois.getBoundingClientRect();
            const containerTroisOffset = containerTroisBoundingBox.top + window.scrollY;

            const scrollTop = window.scrollY;

            const apparition2 = document.querySelectorAll(".apparition2");
            const apparition3 = document.querySelectorAll(".apparition3");

            const txt1 = document.querySelector(".txt1");
            const txt2 = document.querySelector(".txt2");
            const txt3 = document.querySelector(".txt3");

            const blocTitle = document.querySelector(".bloc_txt-title");
            const h4Elements = document.querySelectorAll('.bloc_txt-title--bloc h4');
            let height; 

            h4Elements.forEach((element, index) => {
                height = element.getBoundingClientRect().height; 
            });

            blocTitle.style.height = `${height}px`

            const blocTxt = document.querySelector(".bloc_txt-title--bloc");

            if (aboutStickyOffset === scrollTop) {

            }
    
            if (containerDeuxOffset === scrollTop) {
                apparition2.forEach((apparition) => {
                    apparition.classList.add("active")
                });
                blocTxt.style.transform = `translateY(-${height}px)`;
                txt1.classList.remove("active")
                txt2.classList.add("active")
            }

            if (containerDeuxOffset > scrollTop) {
                apparition2.forEach((apparition) => {
                    apparition.classList.remove("active")
                });
                blocTxt.style.transform = `translateY(0)`;
                txt2.classList.remove("active")
                txt1.classList.add("active")
            }

            if (containerTroisOffset === scrollTop) {
                apparition3.forEach((apparition) => {
                    apparition.classList.add("active")
                })
                blocTxt.style.transform = `translateY(-${height*2}px)`;
                txt2.classList.remove("active")
                txt3.classList.add("active")
            }
            if(containerTroisOffset > scrollTop){
                apparition3.forEach((apparition) => {
                    apparition.classList.remove("active")
                })
                txt3.classList.remove("active")
            }
        };
    
        window.addEventListener('scroll', handleScroll);
    
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <section className="about" id="about">

            <div className="about_title">
                <h2>À la recherche d'une <br className="hidden-mobile"/> nouvelle opportunité.</h2>
            </div>

            <div className="about_container">

                <div className="about_container-presentation">
                    <figure className="about_container-presentation--img">
                        <img src={MathildeBureau} className="img" alt="Photographie de Mathilde"/>
                        <div className="noisy"></div>
                        <img src={Pastille} className="pastille" alt="Pastille"/>
                        <button className="bouton bouton_bgNoir hidden-mobile">Tech friendly</button>
                    </figure>
                    <div className="about_container-presentation--txt">
                        <p>
                            Développeuse front-end passionnée, j'associe mes compétences en développement web et 
                            en webdesign pour créer des interfaces utilisateurs ergonomiques visuellement attractives.
                        </p>
                        <p>
                            En agence de communication, j'ai évolué au contact d'équipes multidisciplinaire, entretenant 
                            une perpétuelle collaboration créative dans la conception de nouveaux produits digitaux. 
                            Stimulée dans ce bouillon d'idées innovantes, j'ai élargi mes compétences et participé à 
                            rendre chaque projet un peu plus unique.
                        </p>
                        <p>
                            Minutieuse, je tente de donner vie à chaque site internet avec l'ambition d'offrir une 
                            expérience fluide et immersive, tout en apportant une réelle valeur ajoutée.
                        </p>
                    </div>
                </div>
            </div> 



            <div className="about_sticky">
                <div className="about_sticky-container">
                    <div className="about_sticky-container-bloc">
                        <div className="bloc">
                            <div className="bloc_txt">

                                <Reveal keyframes={bottomAnimation} className="bloc_txt-title">
                                    <div className="bloc_txt-title--bloc">
                                        <h4>Adaptation et curiosité</h4>
                                        <h4>Créativité et inspiration</h4>
                                        <h4>Éternelle étudiante</h4>
                                    </div>  
                                </Reveal>

                                <div className="bloc_txt-txt">
                                    <Reveal keyframes={bottomAnimation} className="reveal">
                                    <p className="txt1 active">
                                        De nature curieuse et autonome, j'aime découvrir et apprendre de nouveaux langages 
                                        afin de pouvoir sélectionner au mieux les outils qui répondront au besoin spécifique 
                                        d'un projet.<br/><br/> 
                                        Dans l'intention de faciliter les échanges et la coopération au sein de l'équipe de 
                                        développement, et  pour mieux appréhender le métier dans sa globalité, je m'initie 
                                        également au développement full-stack.<br/><br/> 

                                        Je sais m'adapter et suivre les avancées technologiques qui sont en perpétuelles 
                                        évolutions, afin d'empêcher tout projet de devenir obsolète.   
                                    </p>
                                    </Reveal>
                                    <p className="txt2">
                                        Âme créative,  j'ai toujours eu le besoin de m'exprimer autrement qu'à travers 
                                        les mots. Musique, photographie, collages, dessin… J'aime penser que mon implication 
                                        dans toute forme d'art accroît l'imagination et la pensée innovante.<br/><br/> 
                                        
                                        Observatrice et attentive, je me complais à contempler le monde qui m'entoure, 
                                        véritable source d'inspiration inépuisable au quotidien.<br/><br/>
                                        
                                        Aujourd'hui, c'est dans la création de site internet que je m'exprime ; attentive 
                                        au moindre détail, je donne le meilleur pour offrir à l'utilisateur une expérience 
                                        unique, immersive et intuitive.
                                    </p>
                                    <p className="txt3">
                                        Diplômée d'une licence en Communication & Médias, titulaire d'un titre de Webdesigner, 
                                        et ayant récemment achevé mon contrat d'alternance en agence de communication en tant que développeuse d'application JavaScript React, mon parcours 
                                        m'a permis d'acquérir une multitude de compétences qui se complètent à la 
                                        perfection !<br/><br/>

                                        Interview d'artistes et rédaction d'articles, participation à des cellules de 
                                        communication, maîtrise élémentaire de la suite Adobe et Figma, création de webdesign, 
                                        optimisation SEO, intégration de sites web.<br/><br/>

                                        <span className="hidden-mobile">Mon expérience me permet de collaborer activement dans une équipe de 
                                            communication !</span>
                                    </p>
                                </div>
 
                                <svg className="bloc_txt-arrow" width="340" height="296" viewBox="0 0 340 296" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path className="path-animation" d="M231.775 124.261C242.628 131.138 255.171 130.254 266.266 125.96C275.444 122.408 283.903 117.425 292.841 113.421C294.173 112.824 290.976 115.688 290.793 115.89C286.304 120.836 282.789 126.331 280.307 132.511C277.057 140.603 276.02 149.255 277.892 158.013C278.859 162.535 280.584 166.969 283.084 170.977C285.568 174.961 288.908 177.739 292.389 180.876"/>
                                    <path className="path-animation" d="M2.49535 168.453C7.54894 170.895 11.2153 174.692 16.0292 177.583C49.9999 197.987 81.9302 208.331 120.494 203.222C177.872 195.621 223.281 169.44 265.569 135.009"/>
                                </svg>
                                
                            </div>
                            <figure className="bloc_img">
                                <img src={RollingStones} className="bloc_img-principal" alt="Rolling Stones"/>
                                <img src={RollingStones2} className="bloc_img-principal apparition3" alt="Rolling Stones"/>
                                <svg className="bloc_img-traits hidden-mobile" width="255" height="216" viewBox="0 0 255 216" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M2.99945 90.4853C4.8438 84.2773 11.4283 76.8601 14.2967 71.424C25.7715 49.6775 36.3222 27.4337 46.1805 4.87924" stroke="#FFFBFB" strokeWidth="5" strokeLinecap="round"/>
                                    <path d="M92.9015 132.422C109.171 106.664 132.83 85.197 153.404 63.2157" stroke="#FFFBFB" strokeWidth="5" strokeLinecap="round"/>
                                    <path d="M127.402 193.664C139.301 189.079 159.559 190.287 171.31 189.056C198.118 186.249 224.913 183.389 251.751 180.926" stroke="#FFFBFB" strokeWidth="5" strokeLinecap="round"/>
                                </svg>
                                <img src={AppareilPhoto} className="bloc_img-appareil apparition2" alt="Canon 800D"/>
                                <p className="bouton apparition2">Créative</p>
                                <p className="bouton bouton_2 apparition3">Sérieuse</p>
                            </figure>
                            
                        </div>
                        
                    </div>
                </div>
                <div className="about_sticky-container deux"></div>
                <div className="about_sticky-container trois"></div>
                <div className="about_sticky-container quatre"></div>
            </div>

        </section>
    ) 
}


export default About;
import React, { useEffect } from 'react';
import MathildeBureau from "../img/moi/coding.jpg";
import PastilleGlobe from "../img/pastille_globe.svg";
import PastilleTxt from "../img/pastille_txt.svg";
import PastilleArrow from "../img/pastille_arrow.svg";
import RollingStones from "../img/lessons-2.jpg";
import HarleyDavidson from "../img/rolling-stones-tshirt.jpg";
import AppareilPhoto from "../img/appareil-photo.png";
import RubberWeb from "../img/rubber-web.svg";
import RubberWebEyes from "../img/rubber-web-eyes.svg";
import RubberWebStarOne from "../img/rubber-web-star-one.svg";
import RubberWebStarTwo from "../img/rubber-web-star-two.svg";
import Star from "../img/star.svg";
import { Parallax } from "react-scroll-parallax";
import { Reveal } from "react-awesome-reveal";
import { bottomAnimation } from "../functions/keyframes";
import './About.scss';

const About = () => {

    useEffect(() => {

        const blocContentElements = document.querySelectorAll(".bloc_txt-content");
        const containerTxt = document.querySelector(".container-txts");

        if (!window.matchMedia("(max-width: 990px)").matches) {
            
            let height = 0;
    
            blocContentElements.forEach((element, index) => {
                height = element.getBoundingClientRect().height;
            });
          
            const handleScroll = () => {
    
                const svgElement = document.querySelector('.bloc_img-arrow');
    
                if (svgElement) {
                    const svgOffset = svgElement.getBoundingClientRect().top;
                    const svgBottom = svgElement.getBoundingClientRect().bottom;
                    const offsetMargin = 200; 
                    const windowHeight = window.innerHeight || document.documentElement.clientHeight;
        
                    if (svgOffset < windowHeight - offsetMargin && svgBottom > 0) {
                        svgElement.classList.add('in-viewport');
                    } 
                    else {
                        svgElement.classList.remove('in-viewport');
                    }
                }
    
                const containerDeux = document.querySelector('.about_sticky-container.deux');
                const containerDeuxBoundingBox = containerDeux.getBoundingClientRect();
                const containerDeuxOffset = containerDeuxBoundingBox.top + window.scrollY;
    
                const containerTrois = document.querySelector('.about_sticky-container.trois');
                const containerTroisBoundingBox = containerTrois.getBoundingClientRect();
                const containerTroisOffset = containerTroisBoundingBox.top + window.scrollY;
    
                const scrollTop = window.scrollY;
    
                const apparition2 = document.querySelectorAll(".apparition2");
                const apparition3 = document.querySelectorAll(".apparition3");
    
                if (containerDeuxOffset === scrollTop) {
                    apparition2.forEach((apparition) => {
                        apparition.classList.add("active");
                    });
                    containerTxt.style.transform = `translateY(-${height}px)`;
                }
    
                if (containerDeuxOffset > scrollTop) {
                    apparition2.forEach((apparition) => {
                        apparition.classList.remove("active");
                    });
                    containerTxt.style.transform = `translateY(0)`;
                }
    
                if (containerTroisOffset === scrollTop) {
                    apparition3.forEach((apparition) => {
                        apparition.classList.add("active");
                    });
                    containerTxt.style.transform = `translateY(-${height * 2}px)`;
                }
    
                if(containerTroisOffset > scrollTop){
                    apparition3.forEach((apparition) => {
                        apparition.classList.remove("active")
                    })
                }
            };
        
            window.addEventListener('scroll', handleScroll);
        
            return () => {
                window.removeEventListener('scroll', handleScroll);
            };
        }

        if (window.matchMedia("(max-width: 990px)").matches) {

            blocContentElements.forEach((bloc) => {
        
                bloc.addEventListener("click", () => {
                    console.log("kikou");
                    bloc.classList.toggle("expanded");
                });
            });
        }

    }, []);

    

    return (
        <section className="about" id="about">
            <div className="about_presentation">

                <div className="about_presentation-title">
                    <Reveal keyframes={bottomAnimation}>
                        <h2>
                            À la <br className="hidden-mobile"/> recherche <br className="hidden-mobile"/>
                            d'une nouvelle <br className="hidden-mobile"/> opportunité&nbsp;.
                        </h2>
                    </Reveal>
                </div>

                <div className="about_presentation-content">

                    <div className="about_presentation-content--img">  
                        <figure className="img">
                            <img src={MathildeBureau} alt="Mains qui pianotent sur un clavier d'ordinateur qui affiche du code"/>
                            <div className="noisyEffect"></div>
                        </figure>
                        <div className="shadow"></div> 
                    </div>

                    <div className="about_presentation-content--txt">
                        

                        <p>
                            Développeuse front-end passionnée, j'associe mes compétences en développement web et en 
                            webdesign pour créer de jolies interfaces ergonomiques et attractives.
                        </p>
                        <p>
                            En agence de communication, j'ai travaillé sur l'intégration et la refactorisation de plusieurs 
                            sites internet, entourée d'une équipe de développeurs,  graphistes, et chefs de projets.<br/>
                            Stimulée dans un bouillon d'idées innovantes, j'ai élargi mes compétences et participé à 
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
                                <div className="container-txts">
                                    <div className="bloc_txt-content">
                                        <div className="bloc_txt-content--title">
                                            <h4>Mon parcours d'étudiante&nbsp;.</h4>
                                            <div className="open"></div>
                                        </div>
                                        <div className="bloc_txt-content--txt">
                                            <div>
                                                <p>
                                                    Diplômée d'une licence en Communication & Médias et titulaire d'un titre de 
                                                    Webdesigner, j'ai récemment achevé mon contrat d'alternance en agence de 
                                                    communication en tant que développeuse front-end.
                                                    <br/><br/>

                                                    Interview d'artistes et rédaction d'articles, maîtrise élémentaire de la suite 
                                                    Adobe et Figma, création de webdesign, optimisation SEO et intégration de 
                                                    sites web.<br/><br/>

                                                    J'ai acquis au cours de mon expérience une multitude de compétences qui 
                                                    se complètent, ce qui me permet de collaborer activement dans une équipe 
                                                    de communication.
                                                </p>
                                                <figure className="hidden-pc">
                                                    <img src={RollingStones} alt="Rolling Stones"/>
                                                </figure>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="bloc_txt-content">
                                        <div className="bloc_txt-content--title">
                                            <h4>Adaptation & curiosité&nbsp;.</h4>
                                            <div className="open"></div>
                                        </div>
                                        <div className="bloc_txt-content--txt">
                                            <div>
                                                <p>
                                                    De nature curieuse et autonome, j'aime découvrir et apprendre de nouveaux langages 
                                                    afin de pouvoir sélectionner au mieux les outils qui répondront au besoin spécifique 
                                                    d'un projet.<br/><br/> 
                                                    
                                                    Dans l'intention de faciliter les échanges et la coopération au sein de l'équipe de 
                                                    développement, et  pour mieux appréhender le métier dans sa globalité, je m'initie 
                                                    également au développement full-stack.<br/><br/> 

                                                    Je sais m'adapter et suivre les avancées technologiques qui sont en perpétuelle 
                                                    évolution, afin d'empêcher tout projet de devenir obsolète.   
                                                </p>
                                                <figure className="hidden-pc">
                                                <img src={HarleyDavidson} alt="Rolling Stones"/>
                                                </figure>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="bloc_txt-content expanded">
                                        <div className="bloc_txt-content--title">
                                            <h4>Créativité & inspiration&nbsp;.</h4>
                                            <div className="open"></div>
                                        </div>
                                        <div className="bloc_txt-content--txt">
                                            <div>
                                                <p>
                                                    Âme créative,  j'ai toujours eu le besoin de m'exprimer autrement qu'à travers 
                                                    les mots. Musique, photographie, collages, dessin… J'aime penser que mon implication 
                                                    dans toute forme d'art accroît l'imagination et l'innovation.<br/><br/> 
                                                    
                                                    Observatrice et attentive, je me complais à contempler le monde qui m'entoure, 
                                                    véritable source d'inspiration inépuisable au quotidien.<br/><br/>
                                                    
                                                    Aujourd'hui, c'est dans la création de site internet que je m'exprime ; attentive 
                                                    au moindre détail, je donne le meilleur pour offrir à l'utilisateur une expérience 
                                                    unique, immersive et intuitive.
                                                </p>
                                                <figure className="hidden-pc">
                                                <img src={AppareilPhoto} alt="Canon 800D"/>
                                                </figure>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <figure className="bloc_img">
                                <img src={RubberWeb} className="bloc_img-rubber" alt="Rubber Hose Web"/>
                                <img src={Star} className="bloc_img-elements" alt="Rubber Hose Web"/>
                                <img src={Star} className="bloc_img-elements star-2" alt="Rubber Hose Web"/>
                                <p className="bouton bouton_2 apparition2">Sérieuse</p>
                                <p className="bouton apparition3">Créative</p>
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
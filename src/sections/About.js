import React, { useEffect, useRef, useState } from 'react';
import MathildeBureau from "../img/moi/coding.jpg";
import RubberWeb from "../img/rubber-web.svg";
import Star from "../img/star.svg";
import RubberHappy from "../img/rubber-happy.svg"; // Nouvelle image
import RubberSunglasses from "../img/rubber-sunglasses.svg";
import { Reveal } from "react-awesome-reveal";
import { bottomAnimation , bottomTitleAnimation , rotateRight , rotateLeft } from "../functions/keyframes";
import './About.scss';

const About = () => {

    const firstParagraphRef = useRef(null);
    const secondParagraphRef = useRef(null);
    const thirdParagraphRef = useRef(null);
    const boutonRef = useRef(null);
    const boutonRef2 = useRef(null);

    const [imageSrc, setImageSrc] = useState(RubberWeb);
    const [visibleSections, setVisibleSections] = useState({
        firstVisible: false,
        secondVisible: false,
        thirdVisible: false,
    });

    useEffect(() => {
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: .5
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    if (entry.target === firstParagraphRef.current) {
                        setImageSrc(RubberWeb);
                        if (boutonRef.current) {
                            boutonRef.current.classList.remove('active');
                        }
                        if (boutonRef2.current) {
                            boutonRef2.current.classList.remove('active');
                        }
                        setVisibleSections(prev => ({ ...prev, firstVisible: true }));
                    } 
                    else if (entry.target === secondParagraphRef.current) {
                        setImageSrc(RubberHappy);
                        if (boutonRef.current) {
                            boutonRef.current.classList.add('active');
                        }
                        if (boutonRef2.current) {
                            boutonRef2.current.classList.remove('active');
                        }
                        setVisibleSections(prev => ({ ...prev, secondVisible: true }));
                    } 
                    else if (entry.target === thirdParagraphRef.current) {
                        setImageSrc(RubberSunglasses);
                        if (boutonRef.current) {
                            boutonRef.current.classList.add('active');
                        }
                        if (boutonRef2.current) {
                            boutonRef2.current.classList.add('active');
                        }
                        setVisibleSections(prev => ({ ...prev, thirdVisible: true }));
                    }
                } else {
                    // Si l'élément quitte le viewport, on garde la section visible.
                    if (entry.target === firstParagraphRef.current) {
                        setVisibleSections(prev => ({ ...prev, firstVisible: false }));
                    } else if (entry.target === secondParagraphRef.current) {
                        setVisibleSections(prev => ({ ...prev, secondVisible: false }));
                    } else if (entry.target === thirdParagraphRef.current) {
                        setVisibleSections(prev => ({ ...prev, thirdVisible: false }));
                    }
                }
            });
        }, observerOptions);

        const currentFirstRef = firstParagraphRef.current;
        const currentSecondRef = secondParagraphRef.current;
        const currentThirdRef = thirdParagraphRef.current;

        if (currentFirstRef) observer.observe(currentFirstRef);
        if (currentSecondRef) observer.observe(currentSecondRef);
        if (currentThirdRef) observer.observe(currentThirdRef);

        return () => {
            if (currentFirstRef) observer.unobserve(currentFirstRef);
            if (currentSecondRef) observer.unobserve(currentSecondRef);
            if (currentThirdRef) observer.unobserve(currentThirdRef);
        };
    }, []);

    

    return (
        <section className="about" id="about">
            <div className="about_presentation">

                <div className="about_presentation-title">
                    <h2>
                        <div className="box-title">
                            <Reveal keyframes={bottomTitleAnimation}>
                                <span>À la</span>
                            </Reveal>
                        </div>
                        <div className="box-title">
                            <Reveal keyframes={bottomTitleAnimation} delay={150} >
                                <span>recherche</span>
                            </Reveal>
                        </div>
                        <div className="box-title">
                            <Reveal keyframes={bottomTitleAnimation} delay={170}>
                                <span>d'une nouvelle</span>
                            </Reveal>
                        </div>
                        <div className="box-title">
                            <Reveal keyframes={bottomTitleAnimation} delay={190}>
                                <span>opportunité&nbsp;.</span>
                            </Reveal>
                        </div>
                    </h2>         
                </div>

                <div className="about_presentation-content">

                    <div className="about_presentation-content--img">  
                        <Reveal keyframes={rotateRight} delay={150} duration={800}>
                            <figure className="img">
                                <img src={MathildeBureau} alt="Mains qui pianotent sur un clavier d'ordinateur qui affiche du code"/>
                                <p className="bouton bouton_bgBlanc">Tech friendly</p>
                                <div className="noisyEffect"></div>  
                            </figure>
                        </Reveal>
                       
                        <div className="shadow">
                            <Reveal className="shadowReveal" keyframes={rotateLeft} delay={150} duration={800}>
                                <div className="shadowContainer"></div>
                            </Reveal>
                        </div> 
                    </div>

                    
                        <div className="about_presentation-content--txt">
                            <Reveal keyframes={bottomAnimation}>
                                <p>
                                    Développeuse front-end passionnée, j'associe mes compétences en développement web et en 
                                    webdesign pour créer de jolies interfaces ergonomiques et attractives.
                                </p>
                            </Reveal>
                            <Reveal keyframes={bottomAnimation}>
                                <p>
                                    En agence de communication, j'ai travaillé sur l'intégration et la refactorisation de plusieurs 
                                    sites internet, entourée d'une équipe de développeurs,  graphistes, et chefs de projets.<br/>
                                    Stimulée dans un bouillon d'idées innovantes, j'ai élargi mes compétences et participé à 
                                    rendre chaque projet un peu plus unique.
                                </p>
                            </Reveal>
                            <Reveal keyframes={bottomAnimation}>
                                <p>
                                    Minutieuse, je tente de donner vie à chaque site internet avec l'ambition d'offrir une 
                                    expérience fluide et immersive, tout en apportant une réelle valeur ajoutée.
                                </p>
                            </Reveal>
                        </div>
                    
                </div>
            </div>

            <div className="sticky">

                <div className="sticky_container">
                    <figure className="sticky_container-img">
                        <img src={imageSrc} className="sticky_container-img--rubber" alt="Rubber Hose Web" />
                        <img src={Star} className="sticky_container-img--star" alt="Rubber Hose Web"/>
                        <img src={Star} className="sticky_container-img--star star2" alt="Rubber Hose Web"/>
                        <p className="bouton" ref={boutonRef}>Sérieuse</p>
                        <p className="bouton bouton_2" ref={boutonRef2}>Créative</p>
                    </figure>
                </div>

                <div className="sticky_scroll">
                    <div className={`sticky_scroll-txt ${visibleSections.firstVisible ? 'visible' : ''}`} ref={firstParagraphRef}>
                        <h4>Mon parcours d'étudiante&nbsp;.</h4>   
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
                    </div>
                    <div className={`sticky_scroll-txt ${visibleSections.secondVisible ? 'visible' : ''}`} ref={secondParagraphRef}>
                        <h4>Adaptation & curiosité&nbsp;.</h4>
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
                    </div>
                    <div className={`sticky_scroll-txt ${visibleSections.thirdVisible ? 'visible' : ''}`} ref={thirdParagraphRef}>
                        <h4>Créativité & inspiration&nbsp;.</h4>
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
                    </div>
                </div>
            </div> 


        </section>
    ) 
}


export default About;
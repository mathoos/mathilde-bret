import React, { useState, useEffect } from 'react';
import MathildeBureau from "../img/about.jpg";
import Bureau from "../img/skills-img5.jpg";
import Bureau2 from "../img/skills-img.jpg";
import Bureau3 from "../img/skills-img3.jpg";
import Pastille from "../img/pastille.svg";
import RollingStones from "../img/rolling-stones-tshirt.jpg";
import Arrow from "../img/arrow-3.svg";
import ArrowWhite from "../img/arrow-white.svg";
import TraitsWhite from "../img/traits-white.svg";
import AppareilPhoto from "../img/appareil-photo.png";
import './About.scss';

import { Reveal } from "react-awesome-reveal";
import {rotateRight} from "../functions/keyframes";

const About = () => {

    // const [activeIndex, setActiveIndex] = useState(0);
    // const [activeImageIndex, setActiveImageIndex] = useState(0);

    // const handleTitleClick = (index) => {
    //     setActiveIndex(index === activeIndex ? null : index);
    //     setActiveImageIndex(index);
    // };

    

    useEffect(() => {
        
        const handleScroll = () => {

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
            let height; // Déclarer la variable height en dehors de la boucle forEach

            h4Elements.forEach((element, index) => {
                height = element.getBoundingClientRect().height; // Affecter la valeur height à la variable globale
                console.log(`La hauteur de l'élément h4 ${index + 1} est : ${height}px`);
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
                <h2>à la recherche d’une <br/> nouvelle opportunité.</h2>
            </div>

            <div className="about_container">

                <div className="about_container-presentation">
                    <figure className="about_container-presentation--img">
                        <Reveal keyframes={rotateRight} className="reveal">
                            <img src={MathildeBureau} className="img" alt="Photographie de Mathilde"/>
                        </Reveal>
                        <div className="noisy"></div>
                        <img src={Pastille} className="pastille" alt="Pastille"/>
                        <button className="bouton bouton_bgNoir">Tech friendly</button>
                    </figure>
                    <div className="about_container-presentation--txt">
                        <p>
                            Hello, moi c'est Mathilde, développeuse frontend passionnée actuellement à la recherche 
                            d'une opportunité dans le monde du développement web. 
                        </p>
                        <p>
                            En agence de  communication, j'ai pu acquérir des compétences . 
                            Entourée d'une équipe de communication, j'ai pu m'imprégner de l'ambiance de confection d'un site web. De la conception graphique, à la rédaction, en passant par la stratégie marketing. 
                            Toujours impliquée dans mes missions, j’aime découvrir et apprendre de nouveaux 
                            langages, de nouvelles façons de concevoir des sites web.<br/>
                            I’m Mathilde, an award winning french designer working worldwide and pushing boundaries 
                            of conceptual and innovative digital design.
                        </p>
                        <p>
                            Si mon profil t'intéresse, tu peux télécharger mon CV, ou bien continuer 
                            I’m Mathilde, an award winning french designer working worldwide and pushing boundaries of conceptual and innovative digital design.
                        </p>
                    </div>
                </div>

                {/* <div className="about_container-dropdown">   
                    <div className="dropdown">
                        {data.map((item, index) => (
                            <div className={index === activeIndex ? "dropdown_bloc active" : "dropdown_bloc"} key={index}>
                                <div className="dropdown_bloc-title" onClick={() => handleTitleClick(index)}>
                                    <p>{item.title}</p>
                                    <div className="more"></div>
                                </div>
                                <div className="dropdown_bloc-txt">
                                    <p>{item.text}</p>
                                </div>
                                <hr/>
                            </div>
                            
                        ))}
                    </div> 
                    <figure className="about_container-dropdown--img">
                        {activeImageIndex === 0 && <img src={Bureau} alt="Photographie de Mathilde"/>}
                        {activeImageIndex === 1 && <img src={Bureau2} alt="Photographie de Mathilde"/>}
                        {activeImageIndex === 2 && <img src={Bureau3} alt="Photographie de Mathilde"/>}
                        <img src={Arrow} className="arrow" alt="Flèche"/>
                    </figure>
                </div> */}
            </div> 



            <div className="about_sticky">
                <div className="about_sticky-container">
                    <div className="about_sticky-container-bloc">
                        <div className="bloc">
                            <div className="bloc_txt">

                                <div className="bloc_txt-title">
                                    <div className="bloc_txt-title--bloc">
                                        <h4>Quel est mon parcours ?</h4>
                                        <h4>Salut à tous</h4>
                                        <h4>Troisième bloc</h4>
                                    </div>  
                                </div>

                                <div className="bloc_txt-txt">
                                    <p className="txt1 active">
                                        My extensive experience in front-end development empowers my design process to push 
                                        user experience and interactions to the next level. My extensive experience in front-end 
                                        development empowers my design process to push user experience and  interactions  to 
                                        the next level.<br/><br/>  

                                        My extensive experience in front-end development empowers my design process to push 
                                        user experience and interactions to the next level.  
                                    </p>
                                    <p className="txt2">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                                        incididunt ut labore et dolore magna aliqua.<br/><br/>   

                                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip 
                                        ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit 
                                        esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non 
                                        proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                    </p>
                                    <p className="txt3">
                                        Le passage classique «Lorem ipsum dolor sit amet…» est attribué à un remixage du 
                                        texte du philosophe romain Cicéron 45 de C. De Finibus Bonorum et Malorum («Sur 
                                        les extrêmes du Bien et du Mal»). Plus précisément, on pense que le passage provient 
                                        des sections 1.10.32 à 33 de son texte, dont la partie la plus notable est extraite 
                                        ci-dessous.<br/><br/> 

                                        “Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, 
                                        adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et 
                                        dolore magnam aliquam quaerat voluptatem.”
                                    </p>
                                </div>
 
                                <img src={ArrowWhite} className="bloc_txt-arrow" alt="Flèche"/>
                            </div>
                            <figure className="bloc_img">
                                <img src={RollingStones} className="bloc_img-principal" alt="Rolling Stones"/>
                                <img src={TraitsWhite} className="bloc_img-traits" alt="Traits"/>
                                <img src={AppareilPhoto} className="bloc_img-appareil apparition2" alt="Canon 800D"/>
                                <p className="bouton apparition2">Créative</p>
                                <p className="bouton bouton_2 apparition3">Coolos</p>
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

const data = [
    {
        title: "How old are you ?",
        text: "My extensive experience in front-end development empowers my design process to push user experience and interactions to the next level."
    },
    {
        title: "Another question?",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vestibulum mauris eget felis eleifend, ut congue lectus rhoncus."
    },
    {
        title: "Quel est mon parcours ?",
        text: "My extensive experience in front-end development empowers my design process to push user experience and interactions to the next level.  My extensive experience in front-end development empowers my design process to push user experience and interactions to the next level."
    },
];

export default About;
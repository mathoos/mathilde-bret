import React, { useEffect, useRef } from 'react';
import { Reveal } from "react-awesome-reveal";
import { bottomAnimationBloc , bottomAnimationTxt } from "../functions/keyframes";
import MathildeBureau from "../img/img/coding_noir-blanc.jpg";
import Etoile from "../img/illustrations/etoile.svg";
import Rubber from "../img/illustrations/rubber_head.svg";
import computerIcon from "../img/icons/computer-icon.svg";
import webdesignIntroIcon from "../img/icons/webdesign-intro-icon.svg";
import devIcon from "../img/icons/dev-icon.svg";


import './About.scss';

const About = () => {

    const circledTextRef = useRef(null);
    const pathRef = useRef(null);

    useEffect(() => {
        const element = circledTextRef.current; // Stocker la valeur actuelle de la ref
    
        if (!element) return;
    
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    pathRef.current?.classList.add('active');
                } else {
                    pathRef.current?.classList.remove('active');
                }
            },
            { threshold: 1 }
        );
    
        observer.observe(element);
    
        return () => {
            observer.unobserve(element);
        };
    }, []);

    return (
        <section className="about" id="about">

            <Reveal keyframes={bottomAnimationBloc}>
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
                        <figure className="about_intro-container--circledText" ref={circledTextRef}>
                            <svg width="197" height="124" viewBox="0 0 197 124" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path ref={pathRef} className="path" d="M180.247 63.8131C165.82 52.3495 132.608 39.2928 113.755 35.1528C89.76 29.8837 63.3482 25.4804 39.4638 28.5852C30.2425 29.7839 -0.303107 35.0095 6.40215 49.575C13.6832 65.3913 39.907 74.1655 55.4782 78.9924C80.7283 86.8196 107.867 91.3721 133.966 94.6824C144.734 96.048 155.243 96.5197 165.862 95.6714C171.69 95.2057 179.326 94.8405 183.894 91.4707C200.71 80.7498 166.892 60.8546 157.311 58.5793" stroke="#DFC3FC" strokeWidth="4" strokeLinecap="round"/>
                                <path fillRule="evenodd" clipRule="evenodd" d="M111.91 53.8482C109.904 52.9856 107.94 52.0644 105.711 52.1586C103.379 52.258 101.309 53.436 99.5399 55.1707C97.2833 57.3839 95.5207 60.5203 94.2247 62.7242C93.554 63.8657 92.4847 65.3509 91.7857 66.8617C91.185 68.161 90.8563 69.4892 90.9899 70.7045C91.1999 72.6138 92.7368 73.9956 94.9294 74.6275C97.4626 75.3575 100.786 75.0635 102.128 74.4248C103.056 73.984 103.451 72.8725 103.009 71.945C102.568 71.0173 101.457 70.6226 100.53 71.0634C99.6784 71.4684 97.567 71.514 95.9595 71.0513C95.601 70.9475 95.2673 70.8181 94.9964 70.6388C94.8553 70.5458 94.7078 70.4609 94.6896 70.2987C94.6024 69.5006 95.0233 68.6445 95.477 67.8023C96.1086 66.6278 96.906 65.5088 97.4344 64.6105C98.5928 62.6393 100.128 59.8074 102.146 57.8279C103.228 56.7666 104.442 55.9387 105.869 55.8783C107.526 55.8081 108.947 56.626 110.439 57.2676C111.382 57.674 112.478 57.2374 112.883 56.2937C113.29 55.3505 112.853 54.2546 111.91 53.8482Z" fill="#DFC2FC"/>
                                <path fillRule="evenodd" clipRule="evenodd" d="M105.744 61.4762C103.908 61.1678 101.968 60.8095 100.201 60.223C99.2259 59.8993 98.1715 60.4277 97.8471 61.402C97.5235 62.377 98.0518 63.4313 99.0268 63.7549C100.973 64.4014 103.105 64.8079 105.126 65.1477C106.139 65.3177 107.1 64.6336 107.27 63.6209C107.441 62.6074 106.757 61.6475 105.744 61.4762Z" fill="#DFC2FC"/>
                                <path fillRule="evenodd" clipRule="evenodd" d="M130.488 57.9593C128.482 57.0967 126.518 56.1754 124.289 56.2697C121.957 56.3691 119.887 57.5471 118.118 59.2818C115.861 61.495 114.099 64.6314 112.803 66.8353C112.132 67.9768 111.063 69.462 110.364 70.9728C109.763 72.2721 109.434 73.6002 109.568 74.8156C109.778 76.7249 111.315 78.1067 113.508 78.7386C116.041 79.4686 119.364 79.1745 120.706 78.5359C121.634 78.0951 122.029 76.9836 121.587 76.0561C121.146 75.1284 120.035 74.7337 119.108 75.1745C118.257 75.5795 116.145 75.6251 114.538 75.1624C114.179 75.0586 113.845 74.9292 113.575 74.7498C113.433 74.6569 113.286 74.572 113.268 74.4098C113.181 73.6117 113.601 72.7556 114.055 71.9134C114.687 70.7389 115.484 69.6199 116.013 68.7216C117.171 66.7504 118.707 63.9185 120.724 61.939C121.806 60.8777 123.02 60.0498 124.448 59.9894C126.104 59.9192 127.525 60.7371 129.017 61.3787C129.96 61.7851 131.056 61.3485 131.462 60.4047C131.868 59.4616 131.431 58.3657 130.488 57.9593Z" fill="#DFC2FC"/>
                                <path fillRule="evenodd" clipRule="evenodd" d="M124.322 65.5873C122.486 65.2789 120.546 64.9206 118.779 64.3341C117.804 64.0104 116.75 64.5388 116.425 65.5131C116.102 66.4881 116.63 67.5423 117.605 67.866C119.551 68.5125 121.684 68.919 123.704 69.2588C124.717 69.4288 125.678 68.7447 125.848 67.7319C126.019 66.7185 125.335 65.7586 124.322 65.5873Z" fill="#DFC2FC"/>
                                <path d="M53.429 62.3165C54.0993 54.9688 56.1605 46.5099 62.5106 41.9465C64.8589 40.259 68.0788 38.8231 70.9186 40.1284C72.9941 41.0824 73.7949 43.0254 74.4366 45.0722" stroke="#DFC3FC" strokeWidth="4" strokeLinecap="round"/>
                                <path d="M56.1725 48.7435C59.7564 48.7716 63.3375 48.9814 66.9078 49.586" stroke="#DFC3FC" strokeWidth="4" strokeLinecap="round"/>
                                <path d="M73.2161 67.2683C73.2414 66.5886 73.2046 66.6627 73.3663 65.6926C74.0483 61.6019 75.1134 57.237 77.8258 53.9423C79.3275 52.1181 87.8205 44.1706 90.0069 48.9186C90.9131 50.8866 88.224 52.9406 86.9199 53.9913C84.8692 55.6434 82.6255 56.3694 79.9709 56.2563C79.9306 56.2545 78.745 56.1023 78.785 56.2364C79.101 57.294 80.4248 58.5752 80.9547 59.5919C82.5774 62.7049 83.2534 65.4661 83.5027 68.909" stroke="#DFC3FC" strokeWidth="4" strokeLinecap="round"/>
                                <path fillRule="evenodd" clipRule="evenodd" d="M140.367 66.0224C138.885 69.005 137.421 71.9647 135.699 74.8757C135.175 75.7601 135.467 76.9025 136.352 77.426C137.236 77.9489 138.378 77.6565 138.901 76.7721C141.332 72.6669 143.257 68.4695 145.428 64.2425C146.268 62.6094 144.764 61.7499 144.67 61.6996C144.462 61.5888 143.303 61.021 142.357 62.1586C142.299 62.2279 141.953 62.7674 141.808 62.9685C141.476 63.4281 141.125 63.8569 140.752 64.2857C140.322 64.7797 140.199 65.4362 140.367 66.0224Z" fill="#DFC2FC"/>
                                <path fillRule="evenodd" clipRule="evenodd" d="M132.286 84.1276C132.789 83.7917 133.12 83.2156 133.114 82.5647C133.106 81.5372 132.265 80.7108 131.237 80.7196C130.288 80.7275 129.734 81.2093 129.268 81.9649C128.729 82.8393 129.001 83.9874 129.876 84.5259C130.676 85.0193 131.704 84.8328 132.286 84.1276Z" fill="#DFC2FC"/>
                            </svg>
                        </figure>
                    </div>
                </div>
            </Reveal>

            <div className="about_presentation">
                <div className="about_presentation-container">
                    <div className="about_presentation-container--text">
                        <Reveal keyframes={bottomAnimationTxt}>
                            <p>
                                En agence de communication, j'ai travaillé sur l'intégration et la refactorisation de 
                                plusieurs sites internet, entourée d'une équipe de développeurs, graphistes, et 
                                chefs de projets.
                            </p>
                        </Reveal>
                        <Reveal keyframes={bottomAnimationTxt}>
                        <p>
                            Minutieuse, je tente de donner vie à chaque site internet avec l'ambition d'offrir 
                            une expérience fluide et immersive, tout en apportant une réelle valeur ajoutée.
                        </p>
                        </Reveal>
                        <Reveal keyframes={bottomAnimationTxt}>
                            <a href="../CV_Mathilde_Bret.pdf" target="_blank">
                                <button className="bouton bouton_bgBlanc">Télécharger mon CV</button>
                            </a>
                        </Reveal>
                        
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
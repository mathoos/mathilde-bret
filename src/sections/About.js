import React, { useState } from 'react';
import MathildeBureau from "../img/about.jpg";
import Bureau from "../img/skills-img5.jpg";
import Bureau2 from "../img/skills-img.jpg";
import Bureau3 from "../img/skills-img3.jpg";
import Pastille from "../img/pastille.svg";
import Arrow from "../img/arrow-2.svg";
import './About.scss';

const About = () => {

    const [activeIndex, setActiveIndex] = useState(0);
    const [activeImageIndex, setActiveImageIndex] = useState(0);

    const handleTitleClick = (index) => {
        setActiveIndex(index === activeIndex ? null : index);
        setActiveImageIndex(index);
    };

    return (
        <section className="about" id="about">

            <div className="about_title">
                <h2>à la recherche d’une nouvelle opportunité.</h2>
            </div>

            <div className="about_container">

                <div className="about_container-presentation">
                    <figure className="about_container-presentation--img">
                        <img src={MathildeBureau} className="img" alt="Photographie de Mathilde"/>
                        <img src={Pastille} className="pastille" alt="Pastille"/>
                        <button className="bouton bouton_bgNoir">Tech friendly</button>
                    </figure>
                    <div className="about_container-presentation--txt">
                        <p>
                            I’m Mathilde, an award winning french designer working worldwide and pushing 
                            boundaries of conceptual and innovative digital design.
                        </p>
                        <p>
                            Toujours impliquée dans mes missions, j’aime découvrir et apprendre de nouveaux 
                            langages, de nouvelles façons de concevoir des sites web.<br/>
                            I’m Mathilde, an award winning french designer working worldwide and pushing boundaries 
                            of conceptual and innovative digital design.
                        </p>
                        <p>
                            I’m Mathilde, an award winning french designer working worldwide and pushing boundaries of conceptual and innovative digital design.
                        </p>
                    </div>
                </div>

                <div className="about_container-presentation">   
                    <div className="about_container-presentation--txt">
                        <p>
                            I’m Mathilde, an award winning french designer working worldwide and pushing 
                            boundaries of conceptual and innovative digital design. Toujours impliquée dans mes missions, 
                            j’aime découvrir et apprendre de nouveaux 
                            langages.
                        </p>
                        <img src={Arrow} alt="Flèche"/>
                    </div>
                    <figure className="about_container-presentation--img">
                        {activeImageIndex === 0 && <img src={Bureau} className="img" alt="Photographie de Mathilde"/>}
                        {activeImageIndex === 1 && <img src={Bureau2} className="img" alt="Photographie de Mathilde"/>}
                        {activeImageIndex === 2 && <img src={Bureau3} className="img" alt="Photographie de Mathilde"/>}
                    </figure>
                </div>
        
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
                        </div>
                    ))}
                </div> 
              
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
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vestibulum mauris eget felis eleifend, ut congue lectus rhoncus."
    },
];

export default About;
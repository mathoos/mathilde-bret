import Work1 from "../img/skills-img2.jpg";
import Work2 from "../img/skills-img3.jpg";
import Arrow from "../img/arrow.svg";
import IconConcept from "../img/icon-concept.svg";
import IconArtDirection from "../img/icon-art-direction.svg";
import IconUxUi from "../img/icon-ux-ui.svg";
import IconWebdesign from "../img/icon-webdesign.svg";
import IconSmile from "../img/icon-smile.svg";

import './Skills.scss';

const Skills = () => {


    return (
        <section className="skills" id="skills">

            <div className="one">
                <div className="one_title">
                    <h2>I have few skills in my pocket</h2>
                </div>
                <div className="one_container">
                    <div className="one_container-blocSkills">
                        <p>Html</p>
                        <hr/>
                        <p>Scss</p>
                        <hr/>
                        <p>Javascript</p>
                        <hr/>
                        <p>Php</p>
                        <hr/>
                        <p>React</p>
                        <hr/>
                        <p>Next</p>
                        <hr/>
                    </div>
                    <figure className="one_container-blocImgs">
                        <img src={Work1} className="img1"/>
                        <img src={Work2} className="img2"/>
                        <div className="text">
                            <p>
                                I’m Mathilde, an award winning french designer working worldwide. I’m 
                                Mathilde, an award winning french designer working worldwide web&nbsp;!
                            </p>
                        </div>
                        <img src={Arrow} className="img3"/>
                    </figure>
                </div>
            </div>
        
            <div className="need">

                <div className="need_me">
                    <div className="need_title">
                        <h2>Need a site ?</h2>
                        <div className="need_title-subtitle">
                            <p className="need_title-subtitle--1">Say no more <span>(...)</span></p>
                            <p className="need_title-subtitle--2">I can handle it !</p>
                        </div>
                    </div>
                    <div className="need_title">
                        <h2>Need a site ?</h2>
                        <div className="need_title-subtitle">
                            <p className="need_title-subtitle--1">Say no more <span>(...)</span></p>
                            <p className="need_title-subtitle--2">I can handle it !</p>
                        </div>
                    </div>
                    <div className="need_title">
                        <h2>Need a site ?</h2>
                        <div className="need_title-subtitle">
                            <p className="need_title-subtitle--1">Say no more <span>(...)</span></p>
                            <p className="need_title-subtitle--2">I can handle it !</p>
                        </div>
                    </div>
                </div>

                


                <div className="need_container">
                    <div className="need_container-bloc">
                        <figure className="need_container-bloc--icon">
                            <img src={IconConcept}/>
                        </figure>
                        <h3>Concept</h3>
                    </div>
                    <div className="need_container-bloc">
                        <figure className="need_container-bloc--icon">
                            <img src={IconArtDirection}/>
                        </figure>
                        <h3>Art <br/> Direction</h3>
                    </div>
                    <div className="need_container-bloc txt">
                        <p>
                            WITH OVER A DECADE OF EXPERTISE, I CONNECT DESIGN,  EXPERIMENTATION   TECHNOLOGY TO DRIVE 
                            PROJECTS TO THEIR GREATEST POTENTIAL
                        </p>
                    </div>
                    <div className="need_container-bloc">
                        <div>
                            <p>50+</p>
                            <p>Projets réalisés</p>
                        </div>       
                    </div>
                    <div className="need_container-bloc">
                        <figure className="need_container-bloc--icon">
                            <img src={IconUxUi}/>
                        </figure>
                        <h3>UX-UI <br/> Design</h3>
                    </div>
                    <div className="need_container-bloc">
                        <figure className="need_container-bloc--icon">
                            <img src={IconWebdesign}/>
                        </figure>
                        <h3>Webdesign</h3>
                    </div>
                    <div className="need_container-bloc">
                         <figure className="need_container-bloc--icon">
                            <img src={IconSmile}/>
                        </figure> 
                    </div>
                </div>
            </div>
        </section> 
    ) 
}

export default Skills;
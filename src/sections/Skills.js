import { Reveal } from "react-awesome-reveal";
import { bottomAnimationBloc , bottomAnimationTxt } from "../functions/keyframes";
import diplomeIcon from "../img/icons/diplome-icon.svg";
import contratIcon from "../img/icons/contrat-icon.svg";
import communicationIcon from "../img/icons/communication-icon.svg";
import handCircledText from "../img/illustrations/hand-circled-text.svg";

import './Skills.scss';

const Skills = () => {


    return (
        
        <section className="skills" id="skills">

            <Reveal keyframes={bottomAnimationBloc}>
                <div className="skills_intro">
                    <div className="skills_intro-container">
                        <div className="skills_intro-container--title">
                            <Reveal keyframes={bottomAnimationTxt}>
                                <h2>Mes <span> compétences&nbsp;.</span></h2> 
                            </Reveal>
                        </div>
                        <div className="skills_intro-container--subtitle">
                            <Reveal keyframes={bottomAnimationTxt}>
                                <p className="subtitle">
                                    Diplômée&nbsp;
                                    <span className="icon">
                                        <img src={diplomeIcon} alt="Diplôme" />
                                    </span> d'une licence en Communication & Médias <br className="hidden-mobile"/> 
                                    et titulaire d'un titre de Webdesigner, j'ai récemment<br className="hidden-mobile"/> 
                                    achevé mon contrat d'alternance&nbsp; 
                                    <span className="icon">
                                        <img src={contratIcon} alt="Contrat d'alternance" />
                                    </span>
                                    &nbsp;en agence de communication&nbsp; 
                                    <span className="icon">
                                        <img src={communicationIcon} alt="Agence de communication" />
                                    </span>
                                    &nbsp;en tant que développeuse front-end.
                                </p>
                            </Reveal>     
                        </div>
                        {/* <figure className="skills_intro-container--circledText">
                            <img src={handCircledText} alt="Texte entouré à la main" />
                        </figure> */}
                    </div>
                </div>
            </Reveal>

            <div className="skills_presentation">
                <div className="skills_presentation-container">

                    <Reveal keyframes={bottomAnimationBloc} duration={800}>
                        <div className="bloc">
                            <figure className="bloc-icon">
                                <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M39.7368 34.4737V15.5263M34.4737 39.7368H16.5789M10.2632 33.9474V16.0526M15.5263 10.2632H33.9474M7.10526 15.5263H13.4211C14.5838 15.5263 15.5263 14.5838 15.5263 13.4211V7.10526C15.5263 5.94256 14.5838 5 13.4211 5H7.10526C5.94256 5 5 5.94256 5 7.10526V13.4211C5 14.5838 5.94256 15.5263 7.10526 15.5263ZM36.5789 15.5263H42.8947C44.0574 15.5263 45 14.5838 45 13.4211V7.10526C45 5.94256 44.0574 5 42.8947 5H36.5789C35.4162 5 34.4737 5.94256 34.4737 7.10526V13.4211C34.4737 14.5838 35.4162 15.5263 36.5789 15.5263ZM7.10526 45H13.4211C14.5838 45 15.5263 44.0574 15.5263 42.8947V36.5789C15.5263 35.4162 14.5838 34.4737 13.4211 34.4737H7.10526C5.94256 34.4737 5 35.4162 5 36.5789V42.8947C5 44.0574 5.94256 45 7.10526 45ZM36.5789 45H42.8947C44.0574 45 45 44.0574 45 42.8947V36.5789C45 35.4162 44.0574 34.4737 42.8947 34.4737H36.5789C35.4162 34.4737 34.4737 35.4162 34.4737 36.5789V42.8947C34.4737 44.0574 35.4162 45 36.5789 45Z" strokeWidth="4" strokeLinecap="round"/>
                                </svg>
                            </figure>
                            <div className="bloc-content">
                                <div className="bloc-content--title">
                                    <h3>Web <br/> design</h3>
                                </div>
                                <div className="bloc-content--list">
                                    <p>Adobe XD</p>
                                    <p>Illustrator</p>
                                    <p>Photoshop</p>
                                    <p>Figma</p>
                                </div>
                            </div> 
                        </div>
                    </Reveal>
            
                    <Reveal keyframes={bottomAnimationBloc} duration={800} delay={200}>
                        <div className="bloc">
                            <figure className="bloc-icon">
                                <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M45 24.9482L25 35.1997L5 24.9482M45 34.7484L25 45L5 34.7484M25 5L45 15.2516L25 25.5031L5 15.2516L25 5Z" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                            </figure>
                            <div className="bloc-content">
                                <div className="bloc-content--title">
                                    <h3>Work <br/> flow</h3>
                                </div>
                                <div className="bloc-content--list">
                                    <p>Git</p>
                                    <p>Docker</p>
                                    <p>FileZilla</p>
                                    <p>Render</p>
                                </div>
                            </div>
                        </div> 
                    </Reveal>      
                
                    <Reveal keyframes={bottomAnimationBloc} duration={800} delay={400}>
                        <div className="bloc txt">
                            <div className="bloc-content">
                                <div className="bloc-content--title">
                                    <h3>Develop<br className="hidden-pc"/>ment</h3>
                                </div>
                                <div className="bloc-content--txt">
                                    <p>
                                        Pour faciliter les échanges dans l'équipe de développement, et pour mieux appréhender le 
                                        métier dans sa globalité, je m'initie également au développement full-stack.
                                    </p>
                                </div>
                            </div>
                        </div> 
                    </Reveal>    
            
                    <div className="bloc projet">
                        <div>
                            <p>50+</p>
                            <p>Projets réalisés</p>
                        </div>       
                    </div>      
                
                    <Reveal keyframes={bottomAnimationBloc} duration={800} delay={200}>
                        <div className="bloc">
                            <figure className="bloc-icon">
                                <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M5 35L16.2 24.2308L25.8 33.4615L45 15M45 15H30.6M45 15V28.8462" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                            </figure>
                            <div className="bloc-content">
                                <div className="bloc-content--title">
                                    <h3>Seo <br/> strategy</h3>
                                </div>
                                <div className="bloc-content--list">
                                    <p>Google Analytics</p>
                                    <p>Google Search Console</p>
                                    <p>Balises sémantiques</p>
                                    <p>Meta</p>
                                </div>
                            </div>
                        </div>
                    </Reveal>

                    <Reveal keyframes={bottomAnimationBloc} duration={800} delay={400}>
                        <div className="bloc">
                            <figure className="bloc-icon">
                                <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M25 13C22.7909 13 21 11.2091 21 9C21 6.79086 22.7909 5 25 5C27.2091 5 29 6.79086 29 9C29 11.2091 27.2091 13 25 13ZM25 13L25 37M25 37C22.7909 37 21 38.7909 21 41C21 43.2091 22.7909 45 25 45C27.2091 45 29 43.2091 29 41C29 38.7909 27.2091 37 25 37ZM41 37C38.7909 37 37 38.7909 37 41C37 43.2091 38.7909 45 41 45C43.2091 45 45 43.2091 45 41C45 38.7909 43.2091 37 41 37ZM41 37L41 25.5C41 24.3954 40.1046 23.5 39 23.5L11 23.5C9.89544 23.5 9.00001 24.3954 9.00001 25.5V37M9.00001 37C6.79087 37 5.00001 38.7909 5.00001 41C5.00001 43.2091 6.79087 45 9.00001 45C11.2091 45 13 43.2091 13 41C13 38.7909 11.2091 37 9.00001 37Z" strokeWidth="4" strokeLinecap="round"/>
                                </svg>
                            </figure>
                            <div className="bloc-content">
                                <div className="bloc-content--title">
                                    <h3>Scrum <br/> method</h3>
                                </div>
                                <div className="bloc-content--list">
                                    <p>Agile</p>
                                    <p>Mêlée</p>
                                    <p>Post-it</p>
                                    <p>Post-it</p>
                                </div>
                            </div>
                        </div>
                    </Reveal>

                    <div className="bloc">
                    </div>
                    
                    {/* <figure className="pastille">
                        <img src={PastilleTxt} className="txt" alt="Pastille frontend developer"/>
                        <img src={PastilleImg} alt="Pastille frontend developer"/>
                    </figure> */}

                </div>
            </div>
  
        </section> 
      
    ) 
}

export default Skills;
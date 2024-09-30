import PastilleTxt from "../img/pastille-frontend-text.svg";
import PastilleImg from "../img/pastille-frontend-img.svg";
import { Reveal } from "react-awesome-reveal";
import { bottomAnimation } from "../functions/keyframes";

import './Skills.scss';

const Skills = () => {


    return (
        <section className="skills" id="skills">

            <div className="skills_title">
                <Reveal keyframes={bottomAnimation}>
                    <h2>J'ai plus <br className="hidden-mobile"/> d'une corde <br className="hidden-mobile"/> à mon arc&nbsp;.</h2>
                </Reveal>
            </div>

            <div className="skills_domain">
                <div className="skills_domain-container">

                    <div className="bloc">
                        <figure className="bloc-icon">
                            <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M44 0H49H59H64V5V15V20H59H57.2129V44H59H64V49V59V64H59H49H44V59V57H20V59V64H15H5H0V59V49V44H5H7.21289V20H5H0V15V5V0H5H15H20V5V7H44V5V0ZM15 12V10V7V5H10H5V10V15H7.21289H10H12.2129H15V12ZM12.2129 20H15H20V15V12H44V15V20H49H52.2129V44H49H44V49V52H20V49V44H15H12.2129V20ZM10 49H12.2129H15V52V54V57V59H10H5V54V49H7.21289H10ZM49 52V54V57V59H54H59V54V49H57.2129H54H52.2129H49V52ZM59 15H57.2129H54H52.2129H49V12V10V7V5H54H59V10V15Z"/>
                            </svg>
                        </figure>
                        <div className="bloc-content">
                            <div className="bloc-content--title">
                                <h3>Web <br/> design</h3>
                            </div>
                            <div className="bloc-content--list">
                                <div>
                                    <p>Adobe XD</p>
                                    <p>Illustrator</p>
                                    <p>Photoshop</p>
                                    <p>Figma</p>
                                </div>
                            </div>
                        </div> 
                    </div>
                
                    <div className="bloc">
                        <figure className="bloc-icon">
                            <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M31.1505 0.281088C30.4284 -0.0937167 29.5691 -0.0936947 28.847 0.281146L1.34873 14.5557C0.50787 14.9922 -0.014009 15.8665 0.000855448 16.8137C0.0157197 17.761 0.564774 18.6185 1.41891 19.0284L28.9172 32.2247C29.6009 32.5528 30.3966 32.5528 31.0804 32.2248L58.5821 19.0285C59.4363 18.6186 59.9854 17.7611 60.0002 16.8137C60.0151 15.8664 59.4932 14.9921 58.6523 14.5556L31.1505 0.281088ZM8.09588 16.6867L29.9989 5.31673L51.9047 16.6867L29.9989 27.1979L8.09588 16.6867ZM59.7376 28.3839C60.354 29.6193 59.8522 31.1206 58.6167 31.737L31.0875 45.4724C30.384 45.8234 29.5565 45.823 28.8533 45.4715L1.38251 31.7361C0.147568 31.1186 -0.352993 29.6169 0.26448 28.382C0.881953 27.147 2.38364 26.6465 3.61858 27.2639L29.9725 40.4409L56.3844 27.263C57.6199 26.6466 59.1211 27.1484 59.7376 28.3839ZM59.7376 42.5899C60.354 43.8254 59.8522 45.3266 58.6167 45.9431L31.0875 59.6785C30.384 60.0295 29.5565 60.0291 28.8533 59.6775L1.38251 45.9421C0.147568 45.3246 -0.352993 43.823 0.26448 42.588C0.881953 41.3531 2.38364 40.8525 3.61858 41.47L29.9725 54.647L56.3844 41.469C57.6199 40.8526 59.1211 41.3545 59.7376 42.5899Z"/>
                            </svg>
                        </figure>
                        <div className="bloc-content">
                            <div className="bloc-content--title">
                                <h3>Work <br/> flow</h3>
                            </div>
                            <div className="bloc-content--list">
                                <div>
                                    <p>Git</p>
                                    <p>Docker</p>
                                    <p>FileZilla</p>
                                    <p>Render</p>
                                </div>
                            </div>
                        </div>
                    </div>       
                
                    <div className="bloc txt">
                        <div className="bloc-content">
                            <div className="bloc-content--title">
                                <h3>Development</h3>
                            </div>
                            <div className="bloc-content--txt">
                                <p>
                                    Au cours de mes études et expériences, j'ai élargi mes compétences autour du 
                                    développement web, en équipe ou de manière autonome. 
                                </p>
                            </div>
                            <div className="bloc-content--btn">
                                <p className="bouton bouton_title bouton_bgBlanc">Html</p>
                                <p className="bouton bouton_title bouton_bgBlanc">Scss</p>
                                <p className="bouton bouton_title bouton_bgBlanc">Javascript</p>
                                <p className="bouton bouton_title bouton_bgBlanc">Php</p>
                                <p className="bouton bouton_title bouton_bgBlanc">React</p>
                                <p className="bouton bouton_title bouton_bgBlanc">MongoDB</p>
                                <p className="bouton bouton_title bouton_bgBlanc">Express</p>
                            </div>
                        </div>
                    </div>     
            
                    <div className="bloc projet">
                        <div>
                            <p>50+</p>
                            <p>Projets réalisés</p>
                        </div>       
                    </div>      
                
                    <div className="bloc">
                        <figure className="bloc-icon">
                            <svg width="96" height="59" viewBox="0 0 96 59" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M80 0H84H92H96V4V12V16H92H84H83.3284L63 36.3284V39V47V51H59H51H47V47V39V35.6928L38.8914 28H33.3284L16 45.3284V47V55V59H12H4H0V55V47V43H4H12H12.6716L28 27.6716V24V16V12H32H40H44V16V24V27.3329L52.0816 35H58.6716L80 13.6716V12V4V0ZM84 11.5V12H84.5H88H92V8V4H88H84V8V11.5ZM40 23.538V20V16H36H32V20V23.6716V24H36H40V23.538ZM51 39.4876V43V47H55H59V43V40.3284V39H55H51V39.4876ZM8 47H4V51V55H8H12V51V47H8Z"/>
                            </svg>
                        </figure>
                        <div className="bloc-content">
                            <div className="bloc-content--title">
                                <h3>Seo <br/> strategy</h3>
                            </div>
                            <div className="bloc-content--list">
                                <div>
                                    <p>Google Analytics</p>
                                    <p>Google Search Console</p>
                                    <p>Balises sémantiques</p>
                                    <p>Meta</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="bloc">
                        <figure className="bloc-icon">
                            <svg width="62" height="63" viewBox="0 0 62 63" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M21 0H25H37H41V4V16V20H37H33L33 28L56 28V31V32V47H58H62V51V59V63H58H50H46V59V51V47H50H52V32H33L33 47H35H39V51V59V63H35H27H23V59V51V47H27H29L29 32H10L10 47H12H16V51V59V63H12H4H0V59V51V47H4H6L6 32V31L6 28L29 28L29 20H25H21V16V4V0ZM29 4H25V8V12V16H29H33H37V12V8V4H33H29ZM4 51V55V59H8H12V55V51H8H4ZM50 55V51H54H58V55V59H54H50V55ZM27 51V55V59H31H35V55V51H31H27Z"/>
                            </svg>
                        </figure>
                        <div className="bloc-content">
                            <div className="bloc-content--title">
                                <h3>Scrum <br/> method</h3>
                            </div>
                            <div className="bloc-content--list">
                                <div>
                                    <p>Agile</p>
                                    <p>Mêlée</p>
                                    <p>Post-it</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <figure className="pastille">
                        <img src={PastilleTxt} className="txt" alt="Pastille frontend developer"/>
                        <img src={PastilleImg} alt="Pastille frontend developer"/>
                    </figure>
                </div>  
            </div>
        </section> 
    ) 
}

export default Skills;
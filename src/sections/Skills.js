
import Doigt from "../img/finger-pixel.svg";
import { Parallax } from "react-scroll-parallax";

import './Skills.scss';

const Skills = () => {


    return (
        <section className="skills" id="skills">

            <div className="skills_title">
                <h2>Mes <br className="hidden-mobile"/> compétences .</h2>
            </div>

            <div className="skills_container">

                <div className="skills_container-bloc">
                    <p className="title">[ Front-End ]</p>
                    <p className="text">J'aime contribuer au développement technique et <br/>créatif d'interfaces utilisateur.</p>
                    <div className="skills_container-bloc--list">
                        <p className="bouton">Html</p>
                        <p className="bouton">Css | Scss</p>
                        <p className="bouton">Javavscript</p>
                        <p className="bouton">React</p>
                        <p className="bouton">Angular</p>
                        <p className="bouton">Next</p>
                        <p className="bouton">Php</p>
                        <p className="bouton">Jest</p>
                    </div>
                </div>

                <div className="skills_container-bloc">
                    <p className="title">[ Back-End ]</p>
                    <p className="text">Je sais connecter des API restful en React avec mongoDB et Express.</p>
                    <div className="skills_container-bloc--list">
                        <p className="bouton">Node</p>
                        <p className="bouton">Express</p>
                        <p className="bouton">MongoDB</p>
                    </div>
                </div>

                {/* <Parallax translateY={['0px', '450px']} >
                    <figure className="skills_container-img">
                        <img src={Doigt} alt="Emoji pointe du doigt"></img>
                    </figure>
                </Parallax> */}
            </div>

            <div className="skills_domain">
                <div className="skills_domain-container">

                    <div className="bloc">
                        <div className="bloc-icon"></div>
                        <h3>Web <br/> design</h3>
                    </div>
    
                
                    <div className="bloc">
                        <div className="bloc-icon"></div>
                        <h3>UX-UI <br/> Design</h3>
                    </div>
                
                
                    <div className="bloc txt">
                        <p>
                            Au cours de mes études et expériences, j'ai élargi mes compétences autour du 
                            développement web, en équipe ou de manière autonomie. 
                        </p>
                    </div>
            
            
                    <div className="bloc projet">
                        <div>
                            <p>50+</p>
                            <p>Projets réalisés</p>
                        </div>       
                    </div>
                
                
                    <div className="bloc methode">
                        <div className="bloc-icon"></div>
                        <h3>Méthode <br/> SCRUM</h3>
                    </div>
        
        
                    <div className="bloc optimisation">
                        <div className="bloc-icon"></div>
                        <h3>Optimisation <br/> SEO</h3>
                    </div>
                   
                </div>  
            </div>
        </section> 
    ) 
}

export default Skills;
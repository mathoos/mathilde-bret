
import Doigt from "../img/finger-pixel.svg";
import { Parallax } from "react-scroll-parallax";

import './Skills.scss';

const Skills = () => {


    return (
        <section className="skills" id="skills">

            <div className="skills_title">
                <h2>J'ai plus d'une corde <br className="hidden-mobile"/> à mon arc</h2>
            </div>

            <div className="skills_container">

                <div className="skills_container-list">
                    <p>Html</p>
                    <p>Css | Scss</p>
                    <p>Javascript</p>
                    <p>Php</p>
                    <p>React | next | Angular</p>
                    <p>Node</p>
                    <p>Express</p>
                    <p>Mongodb</p>
                </div>
                <Parallax translateY={['0px', '450px']} >
                    <figure className="skills_container-img">
                        <img src={Doigt} alt="Emoji pointe du doigt"></img>
                    </figure>
                </Parallax>
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
import { Reveal } from "react-awesome-reveal";
import { Parallax } from "react-scroll-parallax";
import { bottomAnimationBloc} from "../functions/keyframes";
import Rubber from "../img/rubber_head_sunglasses.svg";
import './Contact.scss';

const Contact = () => {


    return (
        <footer className="footer" id="contact">
            <Reveal keyframes={bottomAnimationBloc}>
                <div className="footer_container">
                    <div className="footer_container-title">
                        <h2>
                            <span>Let's get</span>
                            <span>in touch</span>
                        </h2>
                        
                        <figure className="footer_container-title--img">
                            <Parallax 
                                translateY={['0px', '0px']}
                                rotate={[5, 30]}
                                className="bouton-parallax"
                            >
                                <img src={Rubber} alt="Etoile" />
                            </Parallax>
                        </figure>
                        
                    </div>
                    <div className="footer_container-links">
                        <a href="mailto:bretmathilde@orange.fr" className="bouton bouton_blanc">Email</a>
                        <a href="tel:0663273524" className="bouton bouton_blanc">Téléphone</a>
                        <a href="https://www.linkedin.com/in/mathildebret/" className="bouton bouton_blanc" target="_blank" rel="noreferrer">LinkedIn</a>
                        <a href="https://github.com/mathoos" className="bouton bouton_blanc" target="_blank" rel="noreferrer">GitHub</a>
                    </div>
                    <div className="footer_container-copyright">
                        <p>Édition 2024</p>
                        <p>Designé & développé avec amour</p>
                    </div>
                </div>
            </Reveal>
        </footer>
    ) 
}

export default Contact;
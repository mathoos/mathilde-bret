import { Reveal } from "react-awesome-reveal";
import { Parallax } from "react-scroll-parallax";
import { bottomAnimationBloc} from "../functions/keyframes";
import Rubber from "../img/rubber_head_sunglasses.svg";
import './Contact.scss';

const Contact = () => {


    return (
        <Reveal keyframes={bottomAnimationBloc}>
            <footer className="footer" id="contact">
                <div className="footer_title">
                    <h2>
                        <span>Let's get</span>
                        <span>in touch</span>
                    </h2>
                    
                    <figure className="footer_title-img">
                        <Parallax 
                            translateY={['0px', '0px']}
                            rotate={[5, 30]}
                            className="bouton-parallax"
                        >
                            <img src={Rubber} alt="Etoile" />
                        </Parallax>
                    </figure>
                    
                </div>
                <div className="footer_links">
                    <a href="mailto:bretmathilde@orange.fr" className="bouton bouton_bgBlanc">Email</a>
                    <a href="tel:0663273524" className="bouton bouton_bgBlanc">Téléphone</a>
                    <a href="https://www.linkedin.com/in/mathildebret/" className="bouton bouton_bgBlanc" target="_blank" rel="noreferrer">LinkedIn</a>
                    <a href="https://github.com/mathoos" className="bouton bouton_blanc" target="_blank" rel="noreferrer">GitHub</a>
                </div>
                <div className="footer_copyright">
                    <p>Édition 2024</p>
                    <p>Designé & développé avec amour</p>
                </div>
            </footer>
        </Reveal>
    ) 
}

export default Contact;
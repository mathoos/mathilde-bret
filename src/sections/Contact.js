import Internet from "../img/internet.svg";
import Globe from "../img/footer_globe.svg";
import Arrow from "../img/footer_arrow.svg";
import { Parallax } from "react-scroll-parallax";
import './Contact.scss';

const Contact = () => {


    return (
        <footer className="footer" id="contact">

            <div className="footer_title">
                <h2>
                    <span>Let's get</span>
                    <span>in touch</span>
                </h2>

                <figure className="footer_title-img">
                    <img src={Globe} alt="Globe"/>   
                    <Parallax rotate={['-30deg', '10deg']}>
                        <img src={Arrow} alt="Flèche"/> 
                    </Parallax>  
                </figure> 
            </div>
            <div className="footer_links">
                <a href="mailto:bretmathilde@orange.fr" className="bouton bouton_blanc">Email</a>
                <a href="tel:0663273524" className="bouton bouton_blanc">Téléphone</a>
                <a href="https://www.linkedin.com/in/mathildebret/" className="bouton bouton_blanc" target="_blank" rel="noreferrer">LinkedIn</a>
                <a href="https://github.com/mathoos" className="bouton bouton_blanc" target="_blank" rel="noreferrer">GitHub</a>
            </div>
            <div className="footer_copyright">
                <p>Édition 2024</p>
                <p>Designé & développé avec amour</p>
            </div>

        </footer>
    ) 
}

export default Contact;
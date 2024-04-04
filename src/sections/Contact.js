import Internet from "../img/internet.svg";
import './Contact.scss';

const Contact = () => {


    return (
        <footer className="footer" id="contact">
            <div className="footer_title">
                <h2>
                    <span>Let's get in</span>
                    <span>in touch</span>
                </h2>
                <figure className="footer_title-img">
                    <img src={Internet}/>
                </figure>
            </div>
            <div className="footer_links">
                <a href="" className="bouton bouton_blanc">Email</a>
                <a href="" className="bouton bouton_blanc">Phone</a>
                <a href="" className="bouton bouton_blanc">LinkedIn</a>
                <a href="" className="bouton bouton_blanc">GitHub</a>
            </div>
            <div className="footer_copyright">
                <p>© 2023 edition</p>
                <a href="">Privacy policy</a>
            </div>
        </footer>
    ) 
}

export default Contact;
import MathildeBureau from "../img/about.jpg";
import Pastille from "../img/pastille.svg";
import Planner from "../img/dropdown.jpg";
import Arrow from "../img/arrow.svg";
import './About.scss';

const About = () => {


    return (
        <section className="about" id="about">

            <div className="about_title">
                <h2>Je suis à la recherche d’une nouvelle opportunité.</h2>
            </div>

            <div className="about_bonjour">

                <div className="about_container">
                    <figure className="about_container-img">
                        <img src={MathildeBureau} className="img"/>
                        <img src={Pastille} className="pastille"/>
                    </figure>
                    <div className="about_container-txt">
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
                        <a href="" className="bouton bouton_noir">contact</a>
                    </div>
                </div>
        
                <div className="about_container">
                    <div className="about_container-dropdown">
                        <div className="about_container-dropdown--bloc">
                            <div className="about_container-dropdown--bloc--title">
                                <h3>How old are you ?</h3>
                                <div className="more"></div>
                            </div>
                            <div className="about_container-dropdown--bloc--txt">
                                <p>My extensive experience in front-end development empowers my design process to push user experience and interactions to the next level.  </p>
                            </div>
                        </div>
                        <hr/>
                        <div className="about_container-dropdown--bloc">
                            <div className="about_container-dropdown--bloc--title">
                                <h3>How old are you ?</h3>
                                <div className="more"></div>
                            </div>
                            <div className="about_container-dropdown--bloc--txt">
                                <p>My extensive experience in front-end development empowers my design process to push user experience and interactions to the next level.  </p>
                            </div>
                        </div>
                        <hr/>
                        <div className="about_container-dropdown--bloc">
                            <div className="about_container-dropdown--bloc--title">
                                <h3>How old are you ?</h3>
                                <div className="more active"></div>
                            </div>
                            <div className="about_container-dropdown--bloc--txt active">
                                <p>My extensive experience in front-end development empowers my design process to push user experience and interactions to the next level.  </p>
                            </div>
                        </div>
                    </div>
                    <figure className="about_container-dropdownImg">
                        <img src={Planner}/>
                    </figure>
                    <figure className="about_container-dropdownArrow">
                        <img src={Arrow}/>
                    </figure>
                </div>
            </div> 

        </section>
    ) 
}

export default About;
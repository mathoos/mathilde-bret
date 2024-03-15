import MathildeBureau from "../img/about.jpg";
import Bureau from "../img/skills-img5.jpg";
import Pastille from "../img/pastille.svg";
import Planner from "../img/dropdown.jpg";
import Arrow from "../img/arrow.svg";
import './About.scss';

const About = () => {


    return (
        <section className="about" id="about">

            <div className="about_title">
                <h2>à la recherche d’une nouvelle opportunité.</h2>
            </div>

            <div className="about_container">

                <div className="about_container-presentation">
                    <figure className="about_container-presentation--img">
                        <img src={MathildeBureau} className="img" alt="Photographie de Mathilde"/>
                        <img src={Pastille} className="pastille" alt="Pastille"/>
                        <button className="bouton bouton_bgNoir">Tech friendly</button>
                    </figure>
                    <div className="about_container-presentation--txt">
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
                    </div>
                </div>

                <div className="about_container-presentation">   
                    <div className="about_container-presentation--txt">
                        <p>
                            I’m Mathilde, an award winning french designer working worldwide and pushing 
                            boundaries of conceptual and innovative digital design. Toujours impliquée dans mes missions, 
                            j’aime découvrir et apprendre de nouveaux 
                            langages.
                        </p>
                        <img src={Arrow} alt="Flèche"/>
                    </div>
                    <figure className="about_container-presentation--img">
                        <img src={Bureau} className="img" alt="Photographie de Mathilde"/>
                    </figure>
                </div>
        


                <div className="dropdown">
                    <div className="dropdown_bloc">
                        <div className="dropdown_bloc-title">
                            <h3>How old are you ?</h3>
                            <div className="more"></div>
                        </div>
                        <div className="dropdown_bloc-txt">
                            <p>My extensive experience in front-end development empowers my design process to push user experience and interactions to the next level.  </p>
                        </div>
                    </div>
                    <hr/>
                    <div className="dropdown_bloc">
                        <div className="dropdown_bloc-title">
                            <h3>How old are you ?</h3>
                            <div className="more"></div>
                        </div>
                        <div className="dropdown_bloc-txt">
                            <p>My extensive experience in front-end development empowers my design process to push user experience and interactions to the next level.  </p>
                        </div>
                    </div>
                    <hr/>
                    <div className="dropdown_bloc">
                        <div className="dropdown_bloc-title">
                            <h3>How old are you ?</h3>
                            <div className="more active"></div>
                        </div>
                        <div className="dropdown_bloc-txt active">
                            <p>My extensive experience in front-end development empowers my design process to push user experience and interactions to the next level.  </p>
                        </div>
                    </div>
                </div> 
              
            </div> 

        </section>
    ) 
}

export default About;
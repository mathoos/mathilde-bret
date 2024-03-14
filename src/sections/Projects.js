import Eyes from "../img/eyes.svg";
import TemplateSite from "../img/template-site.gif";

import './Projects.scss';

const Projects = () => {


    return (
        <section className="projects" id="projects">
            <div className="projects_title">
                <h2>Check out some projects&nbsp;!</h2>
                <figure className="projects_title-eyes">
                    <img src={Eyes}/>
                </figure>
            </div>
            <div className="projects_container">

                <div className="projects_container-bloc">
                    <div className="projects_container-bloc--content">
                        <div className="projects_container-bloc--content-left">
                            <div className="description">
                                <h3>
                                    French Meal
                                </h3>
                                <p>
                                    Lorem Ipsum is simply Lorem Ipsum is simply dumming simply dumming. Lorem 
                                    Ipsum is simply Lorem Ipsum is simply dumming simply dumming. Lorem Ipsum is 
                                    simply Lorem Ipsum is simply dumming simply dumming.
                                </p>
                            </div>
                            <div className="perks">
                                <button className="bouton bouton_blanc">html</button>
                                <button className="bouton bouton_blanc">scss</button>
                                <button className="bouton bouton_blanc">javascript</button>
                                <button className="bouton bouton_blanc">php</button>
                                <button className="bouton bouton_blanc">mySql</button>
                            </div>
                        </div>
                        <div className="projects_container-bloc--content-right">
                            <figure className="mockup">
                                <img src={TemplateSite}/>
                            </figure>
                        </div>
                    </div>
                </div>
                <div className="projects_container-bloc">
                    <div className="projects_container-bloc--content">
                        <div className="projects_container-bloc--content-left">
                            <div className="description">
                                <h3>
                                    French Meal
                                </h3>
                                <p>
                                    Lorem Ipsum is simply Lorem Ipsum is simply dumming simply dumming. Lorem 
                                    Ipsum is simply Lorem Ipsum is simply dumming simply dumming. Lorem Ipsum is 
                                    simply Lorem Ipsum is simply dumming simply dumming.
                                </p>
                            </div>
                            <div className="perks">
                                <button className="bouton bouton_blanc">html</button>
                                <button className="bouton bouton_blanc">scss</button>
                                <button className="bouton bouton_blanc">javascript</button>
                                <button className="bouton bouton_blanc">php</button>
                                <button className="bouton bouton_blanc">mySql</button>
                            </div>
                        </div>
                        <div className="projects_container-bloc--content-right">
                            <figure className="mockup">
                                <img src={TemplateSite}/>
                            </figure>
                        </div>
                    </div>
                </div>
                <div className="projects_container-bloc">
                    <div className="projects_container-bloc--content">
                        <div className="projects_container-bloc--content-left">
                            <div className="description">
                                <h3>
                                    French Meal
                                </h3>
                                <p>
                                    Lorem Ipsum is simply Lorem Ipsum is simply dumming simply dumming. Lorem 
                                    Ipsum is simply Lorem Ipsum is simply dumming simply dumming. Lorem Ipsum is 
                                    simply Lorem Ipsum is simply dumming simply dumming.
                                </p>
                            </div>
                            <div className="perks">
                                <button className="bouton bouton_blanc">html</button>
                                <button className="bouton bouton_blanc">scss</button>
                                <button className="bouton bouton_blanc">javascript</button>
                                <button className="bouton bouton_blanc">php</button>
                                <button className="bouton bouton_blanc">mySql</button>
                            </div>
                        </div>
                        <div className="projects_container-bloc--content-right">
                            <figure className="mockup">
                                <img src={TemplateSite}/>
                            </figure>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    ) 
}

export default Projects;
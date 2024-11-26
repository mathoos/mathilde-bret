
import TemplatePlomberie from "../img/projects/plomberie-project.jpg";
import TemplateEkanim from "../img/projects/ekanim-project.jpg";
import TemplateArgentBank from "../img/projects/ArgentBank-project.jpg";
import TemplateBulletJournal from "../img/projects/taskManager-project.jpg";
import TemplateMyCMS from "../img/projects/MyCMS-project.jpg";
import TemplateMenesens from "../img/projects/menesens-project.jpg";
import Arrow from "../img/arrow_project.svg";

import './Projects.scss';

const Projects = () => {


    return (
        <section className="projects" id="projects">

            <div className="projects_title">
                <h2>
                    Sélection de quelques projets ...
                </h2>
            </div>

            <div className="projects_container">
                {data.map((item, index) => (
                    <div className="projects_container-bloc heightJs" key={index}>
                        <div className="projects_container-bloc--content">
                            <div className="projects_container-bloc--content-left">
                                <div className="title">
                                    <h3>
                                        {item.title}
                                    </h3>
                                </div>
                                <div className="description">
                                    
                                    <div className="description_txt">  
                                        {item.text && item.text.map((text, textIndex) => (
                                            <div key={textIndex} className="description_txt-bloc">
                                                <figure className="arrow">
                                                    <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M2 23.833L23.4752 23.833" strokeWidth="4" strokeLinecap="square"/>
                                                        <path d="M4.14844 4.14746L21.8646 21.8636" strokeWidth="4" strokeLinecap="square"/>
                                                        <path d="M23.4746 2L23.4746 23.4752" strokeWidth="4" strokeLinecap="square"/>
                                                    </svg>
                                                </figure>
                                                <p>
                                                    {text}
                                                </p>
                                            </div>
                                        ))}
                                    </div> 

                                    <div className="description_perks">
                                        {item.button && item.button.map((button, buttonIndex) => (
                                            <button key={buttonIndex} className="bouton bouton_bgNoir">{button}</button>
                                        ))}
                                    </div>  
                                </div>                            
                            </div>

                            <div className="projects_container-bloc--content-right">    
                                <div className="bloc">
                                    <a href={item.link} target="_blank" rel="noreferrer" className="mockup">
                                        <img src={item.template} alt="Template de site"/>
                                        <div className="mockup_bouton">
                                            <p className="bouton bouton_bgBlanc">Voir le site</p>
                                        </div>
                                    </a>
                                </div>                          
                                
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    ) 
}

const data = [
    {
        title: "Ekanim",
        text: [
            "Intégration du site à partir de la maquette Adobe XD. ", 
            "Animations codées en Scss et JQuery. ", 
            "Déploiement du site sur le serveur avec FileZilla.", 
        ],
        button: ["Html", "Scss", "Php", "jQuery"],
        annotation: "Site vitrine | melting.k",
        template: TemplateEkanim,
        link: "https://www.ekanim.fr/"
    },
    {
        title: "Plomberie Joan",
        text: [
            "Réalisations de la maquette sur Figma.", 
            "Intégration du site en React.", 
            "Déploiement du site sur la plateforme Render.", 
        ],
        button: ["Figma", "React", "Scss", "Render"],
        annotation: "Site vitrine | stage",
        template: TemplatePlomberie,
        link: "https://www.plomberiejoanbret.fr/"
    },
    {
        title: "Argent Bank",
        text: [
            "Intégration de l'interface utilisateur de l'application bancaire avec React.", 
            "Utilisation de Redux pour gérer les données et maintenir un état global cohérent.", 
            "Appels à l'API REST pour connecter le front et le back.", 
            "Utilisation de Swagger pour documenter les API afin d'assurer la clarté et la maintenabilité de l'interface de programmation. ", 
        ],
        button: ["React", "Redux", "Css", "API", "Swagger"],
        annotation: "Projet de formation | OpenClassrooms",
        template: TemplateArgentBank,
        link: "https://github.com/mathoos/Project-10-Bank-API"
    },
    {
        title: "MyCMS",
        text: [
            "Intégration de l'interface utilisateur avec React.", 
            "Intégration du serveur en Node et Express.", 
            "Mise en place d'une API REST avec diverses routes pour permettre au client d'ajouter son propre contenu.", 
            "Stockage des images sur la plateforme Cloudinary.", 
            "Connexion à une base de données MongoDB et ajout d'un système d'authentification pour protéger l'API.", 
            "Déploiement du site sur la plateforme Render.", 
        ],
        button: ["React", "Scss", "Node", "Express", "MongoDB", "Render", "Cloudinary"],
        annotation: "Projet de formation | OpenClassrooms",
        template: TemplateMyCMS,
        link: "https://cloudinary-client.onrender.com/"
    },
    {
        title: "Task manager",
        text: [
            "Création d'un système de gestion de projet avec React.", 
            "Mise en place d'un slice Redux avec des actions pour ajouter ou supprimer une note.", 
            "Mise en place d'un reducer qui manipule l'état des notes en fonction des actions.", 
            "Création d'un store Redux pour gérer l'état global de l'application et stockage des données dans le navigateur avec LocalStorage."
        ],
        button: ["React", "Scss", "Redux", "Redux Toolkit", "LocalStorage"],
        annotation: "Projet personnel | en construction",
        template: TemplateBulletJournal,
        link: "https://task-manager-journal.onrender.com/"
    },
    {
        title: "Menesens",
        text: [
            "Intégration du site en Next.js.", 
            "Création des animations avec la librairie Framer Motion.", 
            "Création de composants et props pour faciliter le développement et la maintenabilité.",
            "Utilisation de l'API Instagram pour récupérer les derniers posts créés."
        ],
        button: ["Next.js", "Scss", "Framer Motion"],
        annotation: "Projet personnel | en construction",
        template: TemplateMenesens,
        link: "https://www.menesens.fr/"
    }
];

export default Projects;
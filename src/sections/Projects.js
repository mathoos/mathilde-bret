
import TemplatePlomberie from "../img/projects/plomberie-project.jpg";
import TemplateEkanim from "../img/projects/ekanim-project.jpg";
import TemplateSainteecileViolins from "../img/projects/saintececile-project3.jpg";
import TemplateArgentBank from "../img/projects/ArgentBank-project.jpg";
import TemplateBulletJournal from "../img/projects/taskManager-project.jpg";
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
                                                    <img src={Arrow} alt="flèche"/>
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
                                            <p className="bouton">Voir le site</p>
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
        title: "Plomberie JB",
        text: [
            "Intégration du site à partir de la maquette Adobe XD. ", 
            "Animations codées en Scss et JQuery. ", 
            "Déploiement du site sur le serveur avec FileZilla.", 
        ],
        // text: "Réalisation de la maquette sur Figma et intégration avec React. Mise en place d'une API REST avec diverses routes pour permettre au client d'ajouter son propre contenu. Connexion à une base de données MongoDB et ajout d'un système d'authentification pour protéger l'API. Déploiement du site statique et du serveur sur la plateforme Render.",
        button: ["Figma", "React", "Scss", "Node", "Express", "MongoDB", "Render"],
        annotation: "Site vitrine | stage",
        template: TemplatePlomberie,
        link: "https://www.plomberiejoanbret.fr/"
    },
    {
        title: "Sainte Cécile",
        text: [
            "Intégration du site à partir de la maquette Adobe XD. ", 
            "Animations codées en Scss et JQuery. ", 
            "Déploiement du site sur le serveur avec FileZilla.", 
        ],
        // text: "Site onepage d'une entreprise de création de violions intégré à partir de la maquette Adobe XD. Utilisation de fichiers JSON pour stocker des données et création de scripts PHP pour afficher le contenu dynamiquement. Déploiement du site avec Docker.",
        button: ["Html", "Scss", "Php", "JavaScript", "Docker"],
        annotation: "Site vitrine | melting.k",
        template: TemplateSainteecileViolins,
        link: "https://www.sainte-cecile-violins.com/"
    },
    {
        title: "Argent Bank",
        text: [
            "Intégration du site à partir de la maquette Adobe XD. ", 
            "Animations codées en Scss et JQuery. ", 
            "Déploiement du site sur le serveur avec FileZilla.", 
        ],
        // text: "Intégration de l'interface utilisateur de l'application bancaire avec React. Utilisation de Redux pour gérer les données et maintenir un état global cohérent. Appels à l'API REST pour connecter le front et le back. Utilisation de Swagger pour documenter les API afin d'assurer la clarté et la maintenabilité de l'interface de programmation. ",
        button: ["React", "Redux", "Css", "API", "Swagger"],
        annotation: "Projet de formation | OpenClassrooms",
        template: TemplateArgentBank,
        link: "https://github.com/mathoos/Project-10-Bank-API"
    },
    {
        title: "Task manager",
        text: [
            "Intégration du site à partir de la maquette Adobe XD. ", 
            "Animations codées en Scss et JQuery. ", 
            "Déploiement du site sur le serveur avec FileZilla.", 
        ],
        // text: "Création d'un système de gestion de projet avec React. Mise en place d'un slice Redux avec des actions pour ajouter ou supprimer une note, et d'un reducer qui manipule l'état des notes en fonction des actions. Création d'un store Redux pour gérer l'état global de l'application et stockage des données dans le navigateur avec LocalStorage.",
        button: ["React", "Scss", "Redux", "Redux Toolkit", "LocalStorage"],
        annotation: "Projet personnel | en construction",
        template: TemplateBulletJournal,
        link: "https://task-manager-journal.onrender.com/"
    }
];

export default Projects;
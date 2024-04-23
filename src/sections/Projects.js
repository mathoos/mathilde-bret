import Eyes from "../img/eyes.svg";
import TemplatePlomberie from "../img/projects/plomberie-project2.jpg";
import TemplateEkanim from "../img/projects/ekanim-project.jpg";
import TemplateSainteecileViolins from "../img/projects/saintececile-project3.jpg";
import TemplateArgentBank from "../img/projects/ArgentBank-project.jpg";
import TemplateBulletJournal from "../img/projects/taskManager2-project.jpg";

import './Projects.scss';

const Projects = () => {


    return (
        <section className="projects" id="projects">
            <div className="projects_title">
                <h2>Sélection de <br className="hidden-mobile"/> quelques projets&nbsp;!</h2>
                <figure className="projects_title-eyes">
                    <img src={Eyes} alt="Yeux"/>
                </figure>
            </div>
            <div className="projects_container">
                {data.map((item, index) => (
                    <div className="projects_container-bloc heightJs" key={index}>
                        <div className="projects_container-bloc--content">
                            <div className="projects_container-bloc--content-left">
                                <div className="description">
                                    <h3>
                                        {item.title}
                                    </h3>
                                    <div className="description_txt">
                                        <p className="text">
                                            {item.text}
                                        </p>
                                        <p className="annotation">{item.annotation}</p>
                                    </div>   
                                </div>
                                <div className="perks">
                                    {item.button && item.button.map((button, buttonIndex) => (
                                        <button key={buttonIndex} className="bouton bouton_blanc">{button}</button>
                                    ))}
                                </div>
                            </div>
                            <div className="projects_container-bloc--content-right">                              
                                <a href={item.link} target="_blank" rel="noreferrer" className="mockup">
                                    <img src={item.template} alt="Template de site"/>
                                    <div className="mockup_bouton">
                                        <p>Voir le site</p>
                                    </div>
                                </a>
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
        text: "Site onepage d'une entreprise de sécurité. Intégration du site à partir de la maquette Adobe XD avec l'objectif d'être le plus proche possible du design. Liberté dans le choix des animations codées en Scss et JavaScript. Déploiement du site avec FileZilla.",
        button: ["Html", "Scss", "Php", "jQuery"],
        annotation: "Site vitrine | melting.k",
        template: TemplateEkanim,
        link: "https://www.ekanim.fr/"
    },
    {
        title: "Plomberie Joan Bret",
        text: "Réalisation de la maquette du site sur Figma et intégration avec React. Mise en place d'une API REST avec diverses routes pour permettre au client d'ajouter son propre contenu. Connexion à une base de données MongoDB pour rendre les données persistantes et ajout d'un système d'authentification pour protéger l'API. Déploiement du site statique et du serveur sur la plateforme Render.",
        button: ["Figma", "React", "Scss", "Node", "Express", "MongoDB", "Render"],
        annotation: "Site vitrine | stage",
        template: TemplatePlomberie,
        link: "https://www.plomberiejoanbret.fr/"
    },
    {
        title: "Sainte Cécile Violins",
        text: "Site onepage d'une entreprise de création de violions intégré à partir de la maquette Adobe XD. Utilisation de fichiers JSON pour stocker des données et création de scripts PHP pour afficher le contenu dynamiquement. Déploiement du site avec Docker.",
        button: ["Html", "Scss", "Php", "JavaScript", "Docker"],
        annotation: "Site vitrine | melting.k",
        template: TemplateSainteecileViolins,
        link: "https://www.sainte-cecile-violins.com/"
    },
    {
        title: "Argent Bank",
        text: "Intégration de l'interface utilisateur de l'application bancaire avec React. Utilisation de Redux pour gérer les données et maintenir un état global cohérent. Appels à l'API REST pour connecter le front et le back pour assurer une communication fluide entre le client et le serveur. Utilisation de Swagger pour documenter les API afin d'assurer la clarté et la maintenabilité de l'interface de programmation. ",
        button: ["React", "Redux", "Css", "API", "Swagger"],
        annotation: "Projet de formation | OpenClassrooms",
        template: TemplateArgentBank,
        link: "https://github.com/mathoos/Project-10-Bank-API"
    },
    {
        title: "Task manager",
        text: "Création d'un système de gestion de projet avec React. Mise en place d'un slice Redux avec des actions pour ajouter ou supprimer une note, et d'un reducer qui manipule l'état des notes en fonction des actions. Création d'un store Redux pour gérer l'état global de l'application et stockage des données dans le navigateur avec LocalStorage.",
        button: ["React", "Scss", "Redux", "Redux Toolkit", "LocalStorage"],
        annotation: "Projet personnel | en construction",
        template: TemplateBulletJournal,
        link: "https://task-manager-journal.onrender.com/"
    }
];

export default Projects;
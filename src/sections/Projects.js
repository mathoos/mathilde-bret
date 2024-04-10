import Eyes from "../img/eyes.svg";
import TemplatePlomberie from "../img/plomberie_mockup.gif";
import TemplateEkanim from "../img/ekanim-fullpage.png";

import './Projects.scss';

const Projects = () => {


    return (
        <section className="projects" id="projects">
            <div className="projects_title">
                <h2>Sélection de <br/> quelques projets&nbsp;!</h2>
                <figure className="projects_title-eyes">
                    <img src={Eyes} alt="Yeux"/>
                </figure>
            </div>
            <div className="projects_container">
                {data.map((item, index) => (
                    <div className="projects_container-bloc" key={index}>
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
        text: "Réalisation de la maquette du site sur Figma et intégration avec React. Mise en place d'une API REST pour permettre au client d'ajouter ses propres photos, de les modifier et les supprimer. Déploiement du site statique et du serveur sur la plateforme Render.",
        button: ["React", "Scss", "Node", "Express", "MongoDB", "Figma", "Render"],
        annotation: "Site vitrine | stage",
        template: TemplatePlomberie,
        link: "https://www.plomberiejoanbret.fr/"
    },
    {
        title: "API CRUD",
        text: "Création d'une API CRUD avec diverses routes afin de permettre à l'utilisateur de créer, visualiser, modifier et supprimer des objets à mettre en vente. Connexion à une base de données NoSQL, MongoDB, pour rendre l'API dynamique et les données persistantes. Ajout d'un système d'authentification pour protéger l'API, et intégration d'une gestion de fichiers pour permettre aux utilisateurs de télécharger des images.",
        button: ["Angular", "Node", "Express", "MongoDB", "Bcrypt", "multer"],
        annotation: "Projet de formation | OpenClassrooms",
        template: TemplatePlomberie,
        link: "https://github.com/mathoos/go-fullstack"
    },
    {
        title: "Bank",
        text: "Intégration de l'interface utilisateur de l'application bancaire avec React. Utilisation de Redux pour gérer les données et maintenir un état global cohérent. Appels à l'API REST pour connecter le front et le back pour assurer une communication fluide entre le client et le serveur. Utilisation de Swagger pour documenter les API afin d'assurer la clarté et la maintenabilité de l'interface de programmation. ",
        button: ["React", "Redux", "Css", "API", "Swagger"],
        annotation: "Projet de formation | OpenClassrooms",
        template: TemplatePlomberie,
        link: "https://github.com/mathoos/Project-10-Bank-API"
    },
    {
        title: "Bullet Journal",
        text: "Création d'un système de gestion de projet avec React. Mise en place d'un store avec Redux afin de permettre la création, la modification et la suppression de notes. Utilisation de la librairie date-fns pour ranger les notes en fonction de la date souhaitée.",
        button: ["React", "Redux", "Scss", "date-fns"],
        annotation: "Projet personnel | en construction",
        template: TemplatePlomberie,
        link: "https://github.com/mathoos/bullet-journal"
    }
];

export default Projects;
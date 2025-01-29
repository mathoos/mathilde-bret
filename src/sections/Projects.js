import { useState } from "react";
import { Reveal } from "react-awesome-reveal";
import { bottomAnimationBloc , bottomAnimationTxt } from "../functions/keyframes";
import creativiteIcon from "../img/icons/creativite-icon.svg";
import professionnelIcon from "../img/icons/professionnel-icon.svg";
import creationIcon from "../img/icons/creation-icon.svg";
import handCircledText from "../img/hand-circled-text.svg";
import TemplatePlomberie from "../img/projects/plomberie-joan-bret.png";
import TemplateEkanim from "../img/projects/ekanim.jpg";
import TemplateArgentBank from "../img/projects/argent-bank.jpg";
import TemplateBulletJournal from "../img/projects/task-manager.jpg";
import TemplateMyCMS from "../img/projects/my-cms.jpg";
import TemplateMenesens from "../img/projects/menesens.jpg";

import './Projects.scss';

const Projects = () => {

    const [hovered, setHovered] = useState(false);
    const [position, setPosition] = useState({ x: 0, y: 0 });

    const handleMouseMove = (e) => {
        setPosition({ x: e.clientX, y: e.clientY });
    };

    return (
        <section className="projects" id="projects">

            <div className="projects_intro">
                <div className="projects_intro-container">
                    <div className="projects_intro-container--title">
                        <Reveal keyframes={bottomAnimationTxt}>
                            <h2>Sélection <br/> de quelques <br/> <span> projets .</span></h2> 
                        </Reveal>
                    </div>
                    <div className="projects_intro-container--subtitle">
                        <Reveal keyframes={bottomAnimationTxt}>
                            <p className="subtitle">
                                Issues de mes expériences professionnelles&nbsp;
                                <span className="icon">
                                    <img src={professionnelIcon} alt="Diplôme" />
                                </span> ou de projets personnels, ces créations&nbsp;
                                <span className="icon">
                                    <img src={creationIcon} alt="Contrat d'alternance" />
                                </span>
                                &nbsp;reflètent mon parcours en tant que développeuse front-end, mêlant créativité&nbsp;
                                <span className="icon">
                                    <img src={creativiteIcon} alt="Agence de communication" />
                                </span>
                                &nbsp;et expertise technique .
                            </p>
                        </Reveal>     
                    </div>
                    <figure className="projects_intro-container--circledText">
                        <img src={handCircledText} alt="Texte entouré à la main" />
                    </figure>
                </div>
            </div>


            <div className="projects_container">

                <div className="projects_container-ombre">
                    <div className="ombre-content">
                    </div>
                </div>

               
                {data.map((item, index) => (
                    <div className="projects_container-content heightJs" key={index}>
                        <div className="bloc">
                            <div className="bloc_txt">
                                <div className="title">
                                    <h3>
                                        {item.title}
                                    </h3>
                                </div>
                                <div className="description">
                                    
                                    <div className="description_txt">  
                                        {item.text && item.text.map((text, textIndex) => (
                                            <div key={textIndex} className="description_txt-bloc">
                                                <div className="carre"></div>
                                                <p>
                                                    {text}
                                                </p>
                                            </div>
                                        ))}
                                    </div> 

                                    <div className="description_perks">
                                        {item.button && item.button.map((button, buttonIndex) => (
                                            <button key={buttonIndex} className="bouton bouton_bgGris">{button}</button>
                                        ))}
                                    </div>  
                                </div>                            
                            </div>

                            <div
                                className="bloc_img"
                                onMouseEnter={() => setHovered(true)}
                                onMouseLeave={() => setHovered(false)}
                                onMouseMove={handleMouseMove}
                            >
                                <a href={item.link} target="_blank" rel="noreferrer" className="bloc_img-link">
                                    <img src={item.template} alt="Template de site" />
                                </a>
                                {hovered && (
                                    <button
                                        className="bouton bouton_bgPrimary"
                                        style={{ left: position.x, top: position.y }}
                                    >
                                        Voir le site
                                    </button>
                                )}
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
            "Animations codées en Scss et JQuery.", 
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
            "Création de la maquette sur Figma.", 
            "Intégration du site en React.", 
            "Mise en place d'un système de filtres qui permet à l'utilisateur de chercher des photos par thème.", 
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
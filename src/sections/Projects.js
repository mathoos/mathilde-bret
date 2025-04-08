import { useState } from "react";
import { useEffect, useRef } from "react";
import { Reveal } from "react-awesome-reveal";
import { bottomAnimationBloc , bottomAnimationTxt } from "../functions/keyframes";
import creativiteIcon from "../img/icons/creativite-icon.svg";
import professionnelIcon from "../img/icons/professionnel-icon.svg";
import creationIcon from "../img/icons/creation-icon.svg";
import handCircledText from "../img/illustrations/hand-circled-text.svg";
import TemplatePlomberie from "../img/projects/plomberie-joan-bret-project.jpg";
import TemplateEkanim from "../img/projects/ekanim.jpg";
import TemplateArgentBank from "../img/projects/argent-bank-project.jpg";
import TemplateBulletJournal from "../img/projects/task-manager-project.jpg";
import TemplateMyCMS from "../img/projects/my-cms-project.jpg";
import TemplateMenesens from "../img/projects/menesens-project.jpg";
import TemplateLetsGetMagik from "../img/projects/lets-get-magik.jpg";
import TemplateBookmarks from "../img/projects/bookmarks-project.jpg";

import './Projects.scss';

const Projects = () => {

    const [hovered, setHovered] = useState(false);
    const [position, setPosition] = useState({ x: 0, y: 0 });

    const handleMouseMove = (e) => {
        setPosition({ x: e.clientX, y: e.clientY });
    };

    const [isOmbreActive, setIsOmbreActive] = useState(false);
    const firstProjectRef = useRef(null);
    const ombreRef = useRef(null);

    useEffect(() => {
        let lastScrollY = window.scrollY; // Stocke la position du scroll précédente
    
        const handleScroll = () => {
            const target = firstProjectRef.current;
            if (!target) return;
    
            const rect = target.getBoundingClientRect();
            const isVisible = rect.top >= 0 && rect.bottom <= window.innerHeight;
            const scrollingDown = window.scrollY > lastScrollY; // Vérifie la direction du scroll
    
            if (isVisible) {
                setIsOmbreActive(true); // Ajoute la classe .active quand le premier projet entre dans le viewport
            } else if (!scrollingDown) {
                setIsOmbreActive(false); // Retire la classe .active SEULEMENT quand on scrolle vers le haut
            }
    
            lastScrollY = window.scrollY; // Met à jour la position du scroll
        };
    
        window.addEventListener("scroll", handleScroll);
    
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <section className="projects" id="projects">

            <Reveal keyframes={bottomAnimationBloc}>
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
                                    Issues de mes expériences professionnelles ou de projets personnels, 
                                    ces créations reflètent mon parcours en tant que développeuse front-end, 
                                    mêlant créativité et expertise technique.
                                </p>
                            </Reveal>     
                        </div>
                        {/* <figure className="projects_intro-container--circledText">
                            <img src={handCircledText} alt="Texte entouré à la main" />
                        </figure> */}
                    </div>
                </div>
            </Reveal>

            <div className="projects_container">

                <div className="projects_container-absolute">
                    <div className={`projects_container-absolute--ombre ${isOmbreActive ? "active" : ""}`} ref={ombreRef}>
                        <div className="ombre-content"></div>
                    </div>
                </div>

               
                {data.map((item, index) => (
                    <div
                        className="projects_container-content heightJs"
                        key={index}
                        ref={index === 0 ? firstProjectRef : null} // Assigne ref au premier projet uniquement
                    >
                        <div className="bloc">
                            <div className="bloc_txt">
                                <div className="title">
                                    <h3>
                                        {item.title}
                                    </h3>
                                    <p>{item.subtitle}</p>
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
                                        className="bouton bouton_bgNoir"
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
    // {
    //     title: "Ekanim",
    //     text: [
    //         "Intégration du site à partir de la maquette Adobe XD. ", 
    //         "Animations codées en Scss et JQuery.", 
    //         "Déploiement du site sur le serveur avec FileZilla.", 
    //     ],
    //     button: ["Html", "Scss", "Php", "jQuery"],
    //     annotation: "Site vitrine | melting.k",
    //     template: TemplateEkanim,
    //     link: "https://www.ekanim.fr/"
    // },
    {
        title: "Plomberie Joan",
        subtitle : "Site vitrine moderne et fonctionnel pour une entreprise de plomberie.",
        text: [
            "Création de la maquette sur Figma.", 
            "Intégration du site en React.", 
            "Mise en place d'un système de filtres qui permet à l'utilisateur de chercher des photos par thème.", 
            "Intégration d'un slider dans une lightbox pour faire défiler les photos en grand format.", 
            "Déploiement du site sur la plateforme Render.", 
        ],
        button: ["Figma", "React", "Scss", "Render"],
        annotation: "Site vitrine | stage",
        template: TemplatePlomberie,
        link: "https://www.plomberiejoanbret.fr/"
    },
    {
        title: "Let's make magik !",
        subtitle : "Site e-commerce fictif construit avec Next.js, Stripe, et Supabase.",
        text: [
            "Gestion des produits avec Supabase Auth et stockage des images via Supabase Storage.",
            "Mise en place de RLS pour protéger l'accès aux données.",
            "Intégration de Stripe Checkout en mode test pour simuler des paiements.", 
            "Utilisation de Context API pour stocker les produits dans le panier et les persister localement.",
        ],
        button: ["Next.js", "Scss", "tailwind CSS", "TypeScript", "Stripe", "Supabase"],
        annotation: "Projet personnel test | en construction",
        template: TemplateLetsGetMagik,
        link: "https://lets-get-magik.onrender.com/"
    },
    // {
    //     title: "Argent Bank",
    //     text: [
    //         "Intégration de l'interface utilisateur de l'application bancaire avec React.", 
    //         "Utilisation de Redux pour gérer les données et maintenir un état global cohérent.", 
    //         "Appels à l'API REST pour connecter le front et le back.", 
    //         "Utilisation de Swagger pour documenter les API afin d'assurer la clarté et la maintenabilité de l'interface de programmation. ", 
    //     ],
    //     button: ["React", "Redux", "Css", "API", "Swagger"],
    //     annotation: "Projet de formation | OpenClassrooms",
    //     template: TemplateArgentBank,
    //     link: "https://github.com/mathoos/Project-10-Bank-API"
    // },
    {
        title: "The Drop",
        subtitle : "Système de gestion de contenu qui permet à l'utilisateur connecté d'ajouter des articles sur son site.",
        text: [
            "Intégration du serveur en Node et Express.", 
            "Mise en place d'une API REST avec diverses routes pour permettre au client d'ajouter son propre contenu.", 
            "Stockage des images sur la plateforme Cloudinary.", 
            "Connexion à une base de données MongoDB et ajout d'un système d'authentification pour protéger l'API.", 
        ],
        button: ["React", "Scss", "Node", "Express", "MongoDB", "Render", "Cloudinary"],
        annotation: "Projet de formation | OpenClassrooms",
        template: TemplateMyCMS,
        link: "https://the-drop-1ul6.onrender.com/"
    },
    {
        title: "Task manager",
        subtitle : "Application de gestion de projets qui permet d'organiser ses tâches.",
        text: [
            "Gestion d'état global avec Redux Toolkit : configuration du store, création d'un slice, actions & reducers pour manipuler les tâches.", 
            "Persistance des données avec localStorage pour conserver l'état de l'application même après un rechargement du navigateur.", 
            "Intégration d'un calendrier pour afficher les tâches par date.",
            "Fonctionnalité de drag & drop pour déplacer les tâches selon leur état d'avancement."
        ],
        button: ["React", "Scss", "Redux", "LocalStorage", "react-calendar"],
        annotation: "Projet personnel | en construction",
        template: TemplateBulletJournal,
        link: "https://task-manager-nfvq.onrender.com/"
    },
    {
        title: "Bookmarks Mini",
        subtitle : "Extension Chrome qui affiche les favoris sous forme de miniatures grâce à des captures d'écran automatiques des sites web.",
        text: [   
            "Utilisation de l'API Screenshot Machine pour générer automatiquement des captures d'écran des sites web.", 
            "Récupération et affichage dynamique des favoris en utilisant l'API Chrome Bookmarks.", 
            "Gestion du cache pour optimiser le chargement des miniatures."
        ],
        button: ["Html", "Scss", "JavaScript", "Chrome API", "Screenshot Machine"],
        annotation: "Projet personnel | Extension chrome",
        template: TemplateBookmarks,
        link: "https://github.com/mathoos/bookmarks-miniatures"
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
    },
];

export default Projects;
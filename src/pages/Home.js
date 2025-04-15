import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Header from '../sections/Header';
import About from '../sections/About';
import Skills from '../sections/Skills';
import Projects from '../sections/Projects';
import Contact from '../sections/Contact';
import './Home.scss';


function Home({ progress }) { 

    const location = useLocation();

    useEffect(() => {

        // Envoi d'un événement de page vue à Google Analytics
        window.gtag('event', 'page_view', {
            page_path: location.pathname + location.search, 
            page_title: 'Mathilde Bret' 
        });

    }, [location]);

    return (
        <div>
            <Header progress={progress} />
            <About/>
            <Skills/>
            <Projects/>
            <Contact/>
        </div>   
    )
}


export default Home;
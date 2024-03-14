import { useEffect } from 'react';
import {setActiveLinks } from '../functions/setActiveLinks';
import './Nav.scss';

const Nav = () => {

    useEffect(() => {
        setActiveLinks();
    }, []);

    return(           
        <nav className="nav">
            <a href="#about" className="bouton bouton_nav">About</a>
            <a href="#skills" className="bouton bouton_nav">Skills</a>
            <a href="#projects" className="bouton bouton_nav">Projects</a>
            <a href="#contact" className="bouton bouton_nav">Contact</a>
        </nav>   
    )
}


export default Nav;
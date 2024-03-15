import React from 'react';
import './Menu.scss';

const OpenMenu = () => {

    return (
        <section className="menu">
            <div className="menu_container">
                <a href="#about" className="bouton bouton_menu">About</a>
                <a href="#skills" className="bouton bouton_menu">Skills</a>
                <a href="#projects" className="bouton bouton_menu">Projects</a>
                <a href="#contact" className="bouton bouton_menu">Contact</a>
            </div>
        </section>
    );
};

export default OpenMenu;
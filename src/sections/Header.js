import React from 'react';
import Nav from '../components/Nav';
import Menu from '../components/Menu';
import Mathilde from "../img/img/mathilde-bret.png";
import './Header.scss';

const Header = () => {

    return (
        <header className="header">
       
            <Nav/> 
            <Menu/>

            <div className="hero">

                <div className="hero_container">
                    <div className="hero_container-title">
                        <h1>Mathilde<br/>
                            <span>
                                développeuse <span className="bouton bouton_title">front-end</span> <br/> 
                                passionnée à la recherche <br/> 
                                d'un <span className="bouton bouton_title">job</span> .
                            </span>
                        </h1>
                    </div>
                    
                    <div className="hero_container-subtitle">
                        <div className="bullet"></div>
                        <p>From Toulouse</p>
                    </div>

                    <figure className="hero_container-arrow hidden-mobile">
                        <svg width="207" height="256" viewBox="0 0 207 256" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M2.64425 39.9808C6.54704 52.0607 11.1256 64.4732 19.2993 74.3761C31.9306 89.6798 41.1859 97.817 58.5354 106.459C69.0246 111.684 95.9325 115.32 107.123 110.068C116.286 105.768 118.758 98.7541 111.079 90.7765C99.801 79.0604 77.3405 81.2628 63.16 84.4952C40.7469 89.6042 26.8224 105.944 31.9439 128.651C48.3524 201.401 130.626 221.187 194.397 215.709" stroke="#4A4A4A" strokeWidth="5" strokeLinecap="round"/>
                            <path d="M169.229 189.837C170.44 198.52 176.728 204.541 184.233 208.272C190.441 211.358 197.109 213.425 203.456 216.183C204.402 216.594 201.34 216.258 201.144 216.256C196.332 216.204 191.666 216.901 187.099 218.438C181.119 220.451 175.853 223.851 171.873 228.789C169.818 231.339 168.162 234.237 167.1 237.338C166.044 240.421 166.052 243.393 165.925 246.601" stroke="#4A4A4A" strokeWidth="5" strokeLinecap="round"/>
                        </svg>
                    </figure>
                </div>

                <div className="hero_loading">     
                </div>
                
                <figure className="hero_img">
                    <img src={Mathilde} alt="Mathilde Bret"/>
                </figure>
            </div>

            <div className="header_subtitle hidden-pc">
                    <div className="bullet"></div>
                    <p>From Toulouse</p>
            </div>

            <div className="rs">
            <div className="rs_icon">
                <a href="https://github.com/mathoos" target="_blank" rel="noreferrer" aria-label="Profil GitHub">
                    <div className="rs_icon-bulle">
                        <svg width="1024" height="1024" viewBox="0 0 1024 1024" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M8 0C3.58 0 0 3.58 0 8C0 11.54 2.29 14.53 5.47 15.59C5.87 15.66 6.02 15.42 6.02 15.21C6.02 15.02 6.01 14.39 6.01 13.72C4 14.09 3.48 13.23 3.32 12.78C3.23 12.55 2.84 11.84 2.5 11.65C2.22 11.5 1.82 11.13 2.49 11.12C3.12 11.11 3.57 11.7 3.72 11.94C4.44 13.15 5.59 12.81 6.05 12.6C6.12 12.08 6.33 11.73 6.56 11.53C4.78 11.33 2.92 10.64 2.92 7.58C2.92 6.71 3.23 5.99 3.74 5.43C3.66 5.23 3.38 4.41 3.82 3.31C3.82 3.31 4.49 3.1 6.02 4.13C6.66 3.95 7.34 3.86 8.02 3.86C8.7 3.86 9.38 3.95 10.02 4.13C11.55 3.09 12.22 3.31 12.22 3.31C12.66 4.41 12.38 5.23 12.3 5.43C12.81 5.99 13.12 6.7 13.12 7.58C13.12 10.65 11.25 11.33 9.47 11.53C9.76 11.78 10.01 12.26 10.01 13.01C10.01 14.08 10 14.94 10 15.21C10 15.42 10.15 15.67 10.55 15.59C13.71 14.53 16 11.53 16 8C16 3.58 12.42 0 8 0Z" transform="scale(64)"/>
                        </svg>
                    </div>  
                </a>
                </div>
                <div className="rs_icon">
                    <a href="mailto:bretmathilde@orange.fr" target="_blank" rel="noreferrer" aria-label="Adresse email">
                        <div className="rs_icon-bulle">
                            <svg width="20" height="16" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M0.803664 4.3533C0.52352 6.95619 0.536008 9.95818 0.925831 12.5505C1.14153 13.9849 2.3122 15.0845 3.75727 15.2102L5.2675 15.3414C8.41655 15.6152 11.5834 15.6152 14.7325 15.3414L16.2427 15.2102C17.6878 15.0845 18.8584 13.9849 19.0741 12.5505C19.4639 9.95817 19.4765 6.95636 19.1963 4.35345C19.1601 4.05169 19.1194 3.75034 19.0741 3.44949C18.8584 2.0151 17.6878 0.915451 16.2427 0.789834L14.7325 0.658552C11.5834 0.384812 8.41655 0.384812 5.2675 0.658553L3.75727 0.789834C2.3122 0.915451 1.14153 2.0151 0.925831 3.44949C0.880599 3.75028 0.839876 4.05159 0.803664 4.3533ZM5.3974 2.15292C8.46001 1.88669 11.5399 1.88669 14.6025 2.15292L16.1128 2.2842C16.8671 2.34977 17.4782 2.92379 17.5908 3.67254C17.6025 3.7503 17.6139 3.82809 17.6249 3.90592L12.0639 6.99537C10.7803 7.70848 9.21955 7.70848 7.93596 6.99537L2.37502 3.90596C2.38608 3.82812 2.39746 3.75031 2.40915 3.67254C2.52175 2.92379 3.13284 2.34977 3.88717 2.2842L5.3974 2.15292ZM17.8085 5.51989C18.0025 7.78764 17.9299 10.0725 17.5908 12.3274C17.4782 13.0762 16.8671 13.6502 16.1128 13.7158L14.6026 13.8471C11.5399 14.1133 8.46001 14.1133 5.3974 13.8471L3.88717 13.7158C3.13284 13.6502 2.52175 13.0762 2.40915 12.3274C2.07006 10.0725 1.9975 7.78766 2.19147 5.51992L7.20749 8.3066C8.94412 9.2714 11.0558 9.2714 12.7924 8.3066L17.8085 5.51989Z"/>
                            </svg>
                        </div>
                        
                    </a>
                    <span className="tooltiptext">bretmathilde@orange.fr</span>
                </div>
                <div className="rs_icon">
                <a href="https://www.linkedin.com/in/mathildebret/" target="_blank" rel="noreferrer" aria-label="Profil LinkedIn">
                    <div className="rs_icon-bulle">
                        <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M5.59599 25H0.412946V8.30877H5.59599V25ZM3.00168 6.03194C1.34431 6.03194 0 4.65915 0 3.00174C1.18627e-08 2.20563 0.316247 1.44212 0.87917 0.87919C1.44209 0.316254 2.20557 0 3.00168 0C3.79776 0 4.56125 0.316254 5.12418 0.87919C5.6871 1.44212 6.00335 2.20563 6.00335 3.00174C6.00335 4.65915 4.65849 6.03194 3.00168 6.03194ZM24.9944 25H19.8225V16.8749C19.8225 14.9384 19.7835 12.4551 17.1278 12.4551C14.433 12.4551 14.0201 14.5589 14.0201 16.7353V25H8.84264V8.30877H13.8136V10.5856H13.8861C14.5781 9.2742 16.2684 7.89024 18.7901 7.89024C24.0357 7.89024 25 11.3446 25 15.8313V25H24.9944Z"/>
                        </svg>
                    </div>
                </a>
                </div>
            </div>
  
        </header>
    ) 
}

export default Header;
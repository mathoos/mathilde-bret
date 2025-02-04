import React, { useEffect } from 'react';
import { add100Vh } from '../functions/add100vh';
import Nav from '../components/Nav';
import Menu from '../components/Menu';
import Mathilde from "../img/moi/moi_13.png";
import MathildeFond from "../img/moi/moi-fond.png";
import './Header.scss';

const Header = ({ progress }) => {

    useEffect(() => {
        add100Vh();
    }, []);


    return (
        <header className="header heightJs">
            <div className="header_content">
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
                            <p>Basée à Toulouse</p>
                        </div>

                        <figure className="hero_container-arrow">
                            <svg width="207" height="256" viewBox="0 0 207 256" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M2.64425 39.9808C6.54704 52.0607 11.1256 64.4732 19.2993 74.3761C31.9306 89.6798 41.1859 97.817 58.5354 106.459C69.0246 111.684 95.9325 115.32 107.123 110.068C116.286 105.768 118.758 98.7541 111.079 90.7765C99.801 79.0604 77.3405 81.2628 63.16 84.4952C40.7469 89.6042 26.8224 105.944 31.9439 128.651C48.3524 201.401 130.626 221.187 194.397 215.709" stroke="#4A4A4A" strokeWidth="5" strokeLinecap="round"/>
                                <path d="M169.229 189.837C170.44 198.52 176.728 204.541 184.233 208.272C190.441 211.358 197.109 213.425 203.456 216.183C204.402 216.594 201.34 216.258 201.144 216.256C196.332 216.204 191.666 216.901 187.099 218.438C181.119 220.451 175.853 223.851 171.873 228.789C169.818 231.339 168.162 234.237 167.1 237.338C166.044 240.421 166.052 243.393 165.925 246.601" stroke="#4A4A4A" strokeWidth="5" strokeLinecap="round"/>
                            </svg>
                        </figure>
                    </div>

                    <div className="hero_loading">     
                        <div className="loading">
                            <div className="loading_container">
                                <div className="loading_container-title">
                                    <p>Loading...</p>
                                </div>
                                <div className="loading_container-content">
                                    <div className="border">
                                        {[...Array(7)].map((_, index) => ( 
                                            <div
                                                key={index}
                                                className={`trait ${progress > index ? 'loading_done' : ''}`}
                                            ></div>
                                        ))}
                                    </div> 
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <figure className="hero_img">
                        <img src={Mathilde} alt="Mathilde Bret"/>
                        {/* <img src={MathildeFond} className="fond" alt="Mathilde Bret"/> */}
                    </figure>
            
                </div>

                <div className="rs">
                    <a href="https://github.com/mathoos" className="rs_icon" target="_blank" rel="noreferrer">
                        <div className="rs_icon-bulle">
                            <svg width="1024" height="1024" viewBox="0 0 1024 1024" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M8 0C3.58 0 0 3.58 0 8C0 11.54 2.29 14.53 5.47 15.59C5.87 15.66 6.02 15.42 6.02 15.21C6.02 15.02 6.01 14.39 6.01 13.72C4 14.09 3.48 13.23 3.32 12.78C3.23 12.55 2.84 11.84 2.5 11.65C2.22 11.5 1.82 11.13 2.49 11.12C3.12 11.11 3.57 11.7 3.72 11.94C4.44 13.15 5.59 12.81 6.05 12.6C6.12 12.08 6.33 11.73 6.56 11.53C4.78 11.33 2.92 10.64 2.92 7.58C2.92 6.71 3.23 5.99 3.74 5.43C3.66 5.23 3.38 4.41 3.82 3.31C3.82 3.31 4.49 3.1 6.02 4.13C6.66 3.95 7.34 3.86 8.02 3.86C8.7 3.86 9.38 3.95 10.02 4.13C11.55 3.09 12.22 3.31 12.22 3.31C12.66 4.41 12.38 5.23 12.3 5.43C12.81 5.99 13.12 6.7 13.12 7.58C13.12 10.65 11.25 11.33 9.47 11.53C9.76 11.78 10.01 12.26 10.01 13.01C10.01 14.08 10 14.94 10 15.21C10 15.42 10.15 15.67 10.55 15.59C13.71 14.53 16 11.53 16 8C16 3.58 12.42 0 8 0Z" transform="scale(64)"/>
                            </svg>
                        </div>  
                    </a>
                    <a href="https://www.instagram.com/matho_os/" className="rs_icon" target="_blank" rel="noreferrer">
                        <div className="rs_icon-bulle">
                            <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12.5027 6.09031C8.95566 6.09031 6.09454 8.95207 6.09454 12.5C6.09454 16.0479 8.95566 18.9096 12.5027 18.9096C16.0499 18.9096 18.911 16.0479 18.911 12.5C18.911 8.95207 16.0499 6.09031 12.5027 6.09031ZM12.5027 16.6671C10.2105 16.6671 8.33659 14.7984 8.33659 12.5C8.33659 10.2017 10.205 8.33287 12.5027 8.33287C14.8006 8.33287 16.669 10.2017 16.669 12.5C16.669 14.7984 14.795 16.6671 12.5027 16.6671ZM20.6679 5.82812C20.6679 6.65932 19.9986 7.32316 19.1731 7.32316C18.3421 7.32316 17.6785 6.65374 17.6785 5.82812C17.6785 5.00251 18.3477 4.33309 19.1731 4.33309C19.9986 4.33309 20.6679 5.00251 20.6679 5.82812ZM24.9121 7.34547C24.8174 5.3428 24.36 3.56884 22.8932 2.10727C21.432 0.64571 19.6584 0.188274 17.6561 0.0878613C15.5926 -0.0292871 9.40741 -0.0292871 7.34384 0.0878613C5.34719 0.182695 3.57362 0.640131 2.1068 2.1017C0.639989 3.56326 0.188232 5.33722 0.0878416 7.3399C-0.0292805 9.40394 -0.0292805 15.5905 0.0878416 17.6545C0.182655 19.6572 0.639989 21.4311 2.1068 22.8927C3.57362 24.3542 5.3416 24.8117 7.34384 24.9121C9.40741 25.0292 15.5926 25.0292 17.6561 24.9121C19.6584 24.8172 21.432 24.3599 22.8932 22.8927C24.3544 21.4311 24.8117 19.6572 24.9121 17.6545C25.0292 15.5905 25.0292 9.40951 24.9121 7.34547ZM22.2462 19.8691C21.8112 20.9626 20.969 21.8049 19.8704 22.2456C18.225 22.8982 14.321 22.7476 12.5027 22.7476C10.6846 22.7476 6.77496 22.8927 5.13525 22.2456C4.04211 21.8105 3.19995 20.9681 2.75934 19.8691C2.1068 18.2235 2.25739 14.3186 2.25739 12.5C2.25739 10.6814 2.11239 6.77089 2.75934 5.13081C3.19436 4.03744 4.03652 3.19507 5.13525 2.75437C6.78054 2.1017 10.6846 2.25231 12.5027 2.25231C14.321 2.25231 18.2306 2.10727 19.8704 2.75437C20.9635 3.1895 21.8056 4.03185 22.2462 5.13081C22.8987 6.77647 22.7481 10.6814 22.7481 12.5C22.7481 14.3186 22.8987 18.2291 22.2462 19.8691Z"/>
                            </svg>
                        </div>
                    </a>
                    <a href="https://www.linkedin.com/in/mathildebret/" className="rs_icon" target="_blank" rel="noreferrer">
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
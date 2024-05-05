import React from 'react';
import './Footer.css';  // Импортируем стили
import { faDiscord, faGithub, faSpotify, faTelegram } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Footer = () => {
    return (
        <footer className="footer mt-auto py-2 text-white text-center">
            <div className="container d-flex justify-content-between align-items-center">
                <div className="footer-text">
                    <b>Lootheaven 2024</b>
                </div>
                <div className='footer-icons d-flex'>
                    <a href="https://github.com/yofujitsu" target="_blank" rel="noopener noreferrer" className="mx-2" style={{ color: '#fff'}}>
                        <FontAwesomeIcon icon={faGithub} size="lg" />
                    </a>
                    <a href="https://t.me/yofujitsu" target="_blank" rel="noopener noreferrer" className="mx-2" style={{ color: '#fff'}}>
                        <FontAwesomeIcon icon={faTelegram} size="lg" />
                    </a>
                    <a href="https://discord.gg/fSTxTGQz" target="_blank" rel="noopener noreferrer" className="mx-2" style={{ color: '#fff'}}>
                        <FontAwesomeIcon icon={faDiscord} size="lg" />
                    </a>
                    <a href="https://sptfy.com/yofujitsu" target="_blank" rel="noopener noreferrer" className="mx-2" style={{ color: '#fff'}}>
                        <FontAwesomeIcon icon={faSpotify} size="lg" />
                    </a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
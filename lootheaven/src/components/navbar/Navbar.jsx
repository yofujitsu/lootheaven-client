import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDiscord } from '@fortawesome/free-brands-svg-icons';
import { useAuth } from '../auth/AuthContext'; 
import { Logout } from '../auth/Logout';
import useUserMe from '../../hooks/useUserMe';

export function Navbar() {
    const { isAuthenticated } = useAuth(); 
    const {user} = useUserMe();

    return (
        <nav className="navbar navbar-expand-lg sticky-top" style={{ backgroundColor: '#fff', background: '#5865F2' }}>
            <div className="container-fluid">
                <Link className="navbar-brand" to="/home" style={{ color: '#fff' }}><b>LootHeaven</b></Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav me-auto mb-7 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link" to="/loots" style={{ color: '#fff' }}><b>Каталог</b></Link>
                        </li>
                    </ul>
                    <ul className="navbar-nav ml-auto">
                        {!isAuthenticated ? (
                            <li className="nav-item">
                                <button className="btn btn-dark" type="button">
                                    <a className="nav-link" href='http://localhost:8082/oauth2/authorization/discord' style={{ color: '#fff', alignItems: 'center' }}>
                                        <b>Войти с Discord</b>
                                        <FontAwesomeIcon icon={faDiscord} style={{ fontSize: '25px', color: 'white', marginLeft: '10px' }} />
                                    </a>
                                </button>
                            </li>
                        ) : (
                            <li className="nav-item" style={{ display: 'flex', alignItems: 'center' }}>
                                <b style={{color: '#fff'}}>Давно не виделись, {user.username}!</b>
                                <Link to='/me' style={{ marginRight: '10px', marginLeft: '10px' }}>
                                    <img src={user.avatar} alt="Аватар" style={{ height: '40px', width: '40px', borderRadius: '50%' }} />
                                </Link>
                                <button className="btn btn-dark" type="button" onClick={Logout}>
                                    <span style={{ color: '#fff' }}>
                                        <b>Выйти</b>
                                    </span>
                                </button>
                            </li>
                        )}
                    </ul>
                </div>
            </div>
        </nav>
    );
};


import React from 'react';
import './Header.css';
import logo from '../../Images/logo.png';
import {Link} from "react-router-dom";

export default () => {
    return (
        <React.Fragment>
            <nav className="navbar navbar-dark bg fixed-top">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">
                        <img src={logo} alt={logo} />
                        <i>VIIAGÊNCIA</i>
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                        <div className="offcanvas-header justify-content-center">
                            <h5 className="offcanvas-title" id="offcanvasNavbarLabel"><i>VIIAGÊNCIA</i></h5>
                        </div>
                        <div className="offcanvas-body">
                            <ul className
                                ="navbar-nav justify-content-end flex-grow-1 pe-3">
                                <li className
                                    ="nav-item">
                                    <Link to="/" className
                                        ="nav-link active">Home</Link>
                                </li>
                                <hr/>
                                <li className
                                    ="nav-item">
                                    <Link to="/Promocoes" className
                                        ="nav-link active">Promoções</Link>
                                </li>
                                <hr/>
                                <li className
                                    ="nav-item">
                                    <Link to="/Contact" className
                                        ="nav-link active">
                                        Contato</Link>
                                </li>
                                <hr/>
                                <li className
                                    ="nav-item">
                                    <a className
                                        ="nav-link active" href="https://www.linkedin.com/in/leonardoalvesm/">
                                        Autor
                                    </a>
                                </li>
                                <hr/>
                                <hr/>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
            <hr/>
        </React.Fragment>
    );

}

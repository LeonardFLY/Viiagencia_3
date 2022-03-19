import React from 'react';
import './Header.css';
import logo from '../../Images/logo.png';
import { Link } from "react-router-dom";

function Navbar() {
    return (
        <React.Fragment>
            <nav className="navbar navbar-dark bg">
                <div className="container-fluid">
                    <button className="navbar-brand">
                        <img src={logo} alt={logo} />
                        <i>VIIAGÊNCIA</i>
                    </button>
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
                                    <button>
                                        <Link to="/" className
                                            ="nav-link active">Home</Link>
                                    </button>
                                </li>
                                <hr />
                                <li className
                                    ="nav-item">
                                    <button>
                                        <Link to="/Promocoes" className
                                            ="nav-link active">Promoções</Link>
                                    </button>
                                </li>
                                <hr />
                                <li className
                                    ="nav-item">
                                    <button>
                                        <Link to="/Contact" className
                                            ="nav-link active">
                                            Contato</Link>
                                    </button>
                                </li>
                                <hr />
                                <li className
                                    ="nav-item">
                                    <button ><Link to="/Author" className
                                        ="nav-link active">Autor</Link></button>
                                </li>
                                <hr />
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </React.Fragment>
    );

}

export default Navbar;
import React from 'react';
import './Header.css';
import img1 from '../../Images/img1.png';
import Navbar from './Navbar'

function Header() {
    return (
        <React.Fragment>
            <div className="homeHeader">
                <div className="container padding">
                    <div className="textHomeHeader">
                        <h1>A melhor <i className="highlightHeader">VIIA</i></h1>
                        <h1>Está na melhor <i className="highlightHeader">Agência</i></h1>
                        <h4>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt doloremque, nobis beatae saepe totam, repudiandae sed eos corrupti quae natus harum doloribus.</h4>
                    </div>
                </div>
                
            </div>
        </React.Fragment>
    );
}

export default Header;
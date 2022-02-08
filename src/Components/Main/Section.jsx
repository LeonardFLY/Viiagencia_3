import React from 'react';
import Card from '../Card/Card'
import floripa from '../../Images/floripa.webp'
import ibitipoca from '../../Images/ibitipoca.jpg';
import './Main.css';
import '../Components.css';

function Section() {
    return (
        <React.Fragment>

            <h1 className="atention">Promoções</h1>
            <div className="center">
                <div className="cards container">
                    <Card Picture={floripa}></Card>
                    <Card Picture={ibitipoca}></Card>
                    <Card Picture={floripa}></Card>
                    <Card Picture={ibitipoca}></Card>
                </div>
            </div>
        </React.Fragment>
    );
}

export default Section;
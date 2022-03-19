import React from 'react';
import './Card.css';
function Card(props) {
    return (
        <React.Fragment>
            <div className="card col-sm-3 col-lg-6">
                <h4 className="text-center">{props.Cidade}</h4>
                <h4>{props.Estado}</h4>
                <img className="card-img" src={props.Picture} alt={'Imagem de' + props.Cidade}/>
                <div>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat itaque neque iure nostrum eius nemo, officiis nisi saepe delectus, cum est unde maxime voluptate quibusdam explicabo culpa a quos earum.</p>
                
                <h3 className="text-center">{props.valor}</h3>
                </div>
            </div>
        </React.Fragment>
    );
}

export default Card;
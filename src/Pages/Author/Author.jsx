import React from 'react';
import Autor from '../../Images/Leonardo.png'
import Linkedin from '../../Images/linkedin.svg'
import Github from '../../Images/github.svg'
import Instagram from '../../Images/instagram.svg'
import './Author.css'

function Author (){
    return(
        <>
        <div className="rounded px-4 my-3 social ">
        <img src={Autor}className="img-fluid rounded-circle my-3 img-thumbnail " alt=''/>
        <h1 className="mb-0 text-uppercase">Leonardo Mendonça</h1><h6 className="small text-uppercase text-muted">Todos os direitos reservados a criador</h6>
        <div className="p-1">
            <ul className="list-inline">
                <li className="list-inline-item">
                    <a href='https://www.linkedin.com/in/leonardoalvesm/' className="social-link">
                        <img className="icon" src={Linkedin} alt="Linkedin logo" />
                    </a>
                </li>
                <li className="list-inline-item">
                    <a href=' https://github.com/LeonardFLY' className="social-link">
                        <img className="icon" src={Github} alt="Github logo" />
                    </a>
                </li>
                <li className="list-inline-item">
                    <a href='https://www.instagram.com/leonard_fly/' className="social-link">
                        <img className="icon" src={Instagram} alt="Instagram logo" />
                    </a>
                </li>
            </ul>
        </div>
    </div>
        </>
    );
}

export default Author;
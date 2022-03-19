import React from 'react';
import Card from '../../Components/Card/Card';
import ibitipoca from '../../Images/ibitipoca.jpg'
import floripa from '../../Images/floripa.webp'


function Promocoes () {
    return(
        <React.Fragment>       
            <h1 className='py-5 text-center'>Destinos</h1>
            <div className='container d-flex'>
             <Card Estado={"Rio de Janeiro"} Cidade={"Ibitipoca"} Picture={ibitipoca} valor={"R$325,50"}></Card>
             <Card Estado={"Santa Catarina"} Cidade={"Florianópolis"} Picture={floripa} valor={"R$457,80"}></Card>
             <Card Estado={"Rio de Janeiro"} Cidade={"Ibitipoca"} Picture={ibitipoca} valor={"R$325,50"}></Card>
             <Card Estado={"Santa Catarina"} Cidade={"Florianópolis"} Picture={floripa} valor={"R$457,80"}></Card>
             
         </div>
        </React.Fragment>
    );
}

export default Promocoes;
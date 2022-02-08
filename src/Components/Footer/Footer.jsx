import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <React.StrictMode>
      <div className="footer">
        <div className="container">
          <div className="row">
            {/* Coluna1 */}
            <div className="col">
              <h2 className="text-center" >VIIAGÊNCIA</h2>
              <h1 className="list-unstyled">
                <li><h4>23575-260</h4></li>
                <li><h4>Rua Cristo Redentor</h4></li>
                <li><h4>Rio de Janeiro, Brasil</h4></li>
              </h1>
            </div>
            {/* Coluna2 */}
            <div className="col">
              <h2 className="text-center" >Televendas</h2>
              <ul className="list-unstyled">
                <li>Regiões Metropolitasnas</li>
                <li>(21) 2559-0938</li>
                <li>Segunda à Sexta: 09h às 20h | Sábado e feriados: 10h às 14h</li>
                <hr/>
                <li>Demais Regiões</li>
                <li>0800-3684-9513</li>
                <li>Segunda à Sexta: 07h às 23h | Sábado e feriados: 10h às 14h</li>
              </ul>
            </div>
          </div>
          <hr />
        </div>
        <div className="container">
          <div className="row">
                <p className="col-sm">
          &copy;{new Date().getFullYear()} VIIAGÊNCIA | Todos os direitos reservados |
          Termos de serviço | Privacidade
                </p>
          </div>
        </div>
      </div>
      
    </React.StrictMode>
  );
}

export default Footer;
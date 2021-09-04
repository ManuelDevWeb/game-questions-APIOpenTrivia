import React from 'react';
// Importando estilos del Header
import "./styles/Header.css";

function Header() {
    return (
      <div className="header mt-2">
        <h1 className="text-uppercase text-center">Game Of Questions - OpenTrivia</h1>
        {
          /*
          <div className="row text-center align-items-end">
          <div className="col-md-4">
            <h1 className="text-uppercase m-0">Jugador: Manuel Valencia</h1>
          </div>
          <div className="col-md-4">
            <p className="m-0">
              Nivel: <span>Easy</span>
            </p>
          </div>
          <div className="col-md-4">
            <p className="m-0">
              Ganancia: <span>$0</span>
            </p>
          </div>
        </div>
         */
        }
        <hr />
      </div>
      
    );
}

export default Header

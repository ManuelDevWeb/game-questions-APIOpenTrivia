import React from 'react'
// Importando imagen
import ImgNotFound from '../img/Monster404Error.svg';
// Importando estilos del NotFound
import './styles/NotFound.css';

function NotFound() {
    return (
        <div className="container text-center notFound">
            <img src={ImgNotFound} alt="Not Found" className="img-fluid"/>
        </div>
    )
}

export default NotFound

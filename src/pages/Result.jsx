import React, {useEffect} from 'react';
// Importando History
import {useHistory, Link} from 'react-router-dom';
// Importando estilos del Result
import './styles/Result.css';

function Result({scoreuser}) {
    // Ir al AppContext para acceder al nombre del usuario :D

    const history=useHistory();

    // HACER LO MISMO PERO PARA LA PAGINA DE PREGUNTAS!!!!! SI NO EXISTE USUARIO NO PODEMOS INGRESAR A ELLA
    useEffect(() => {
        // Validar si no existe nombre
        if(!scoreuser){
            history.push('/');
        }
    }, [scoreuser, history])

    return (
        <div className="container text-center">
            <h1 className="text-uppercase">Congratulatios!!!</h1>
            <p>Manuel Valencia</p>
            <p>Your Score is: <span>{scoreuser}</span></p>
            {/* Darle estilos al button */}
            <Link to='/'>Go to Home</Link>
        </div>
    )
}

export default Result

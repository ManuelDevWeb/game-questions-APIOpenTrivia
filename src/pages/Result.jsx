import React, {useContext, useEffect} from 'react';
// Importando History
import {useHistory, Link} from 'react-router-dom';
// Importando AppContext
import { AppContext } from '../context/AppContext';
// Importando estilos del Result
import './styles/Result.css';

function Result({scoreuser}) {
    // Destructurando AppContext
    const {state:{username, scoreUser}, deleteInfoGame}=useContext(AppContext);

    const history=useHistory();

    // HACER LO MISMO PERO PARA LA PAGINA DE PREGUNTAS!!!!! SI NO EXISTE USUARIO NO PODEMOS INGRESAR A ELLA
    useEffect(() => {
        // Validar si no existe nombre
        if(!scoreUser){
            history.push('/');
        }
    }, [scoreUser, history])


    return (
        <div className="results container text-center">
            <h1 className="text-uppercase mt-5">Congratulations!!! {username}</h1>
            <p className="display-3">Your Score is: <span>{scoreUser}</span></p>
            {/* Darle estilos al button */}
            <Link to='/' onClick={deleteInfoGame} className="btn text-white btn-secondary">Go to Home</Link>
        </div>
    )
}

export default Result

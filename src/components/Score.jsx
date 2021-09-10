import React, { useContext } from 'react';
// Importando AppContext
import { AppContext } from '../context/AppContext';
// Importando estilos
import './styles/Score.css';

function Score({value}) {
    const {state:{scoreUser}}=useContext(AppContext);

    // Funcion para agregar comparar respuestas y dar estilos a la opción
    const handleAdvance=(scoreUser)=>{
        // eslint-disable-next-line eqeqeq
        if(scoreUser==value ){
            return "paintAdvance"
        }else{
            return;
        }
    }

    return (
        <div className={`score btn text-white mb-2 ${handleAdvance(scoreUser)}`}>
            $ {value}
        </div>
    )
}

export default Score

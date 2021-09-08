import React, {useContext} from 'react';
// Importando context
import {AppContext} from '../context/AppContext';
// Importando componente Categoria
import Score from './Score';

// Creando componente
function ListOfScores() {
    // Destructurando los elementos del elemento AppContext con useContext
    const {state:{listOfScores}}=useContext(AppContext);

    return (
        <div>
            <ul>
                {
                    listOfScores.map((score)=>(
                        <li key={score.id}>
                            <Score 
                                value={score.value}
                            />
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

// Exportando componente
export default ListOfScores

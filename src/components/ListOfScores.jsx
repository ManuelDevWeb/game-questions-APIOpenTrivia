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
            <ul className="mb-5 mx-2 text-center d-flex flex-column justify-content-center px-0 mt-md-5">
                {
                    listOfScores.map((score)=>(
                        <ol key={score.id} className="px-2">
                            <Score 
                                value={score.value}
                                num={score.id}
                            />
                        </ol>
                    ))
                }
            </ul>
        </div>
    )
}

// Exportando componente
export default ListOfScores

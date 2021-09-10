// Importando elementos de React
import { useState } from 'react';
// Importando el estado inicial
import initialState from '../initialState';

// Creando nuestro hook personalizado
const useInitialState = () => {
    // useState para manejar el estado
    const [state, setState] = useState(initialState);

    // Funcionalidad para añadir el usuario
    const addInfoGame = (username, category, dificult) => {
        setState({
            // Conservamos el state anterior
            ...state,
            // Agregamos al dataGame lo que ya estaba alli y la información del username
            //dataGame: [...state.dataGame, payload]
            username: username,
            category: category,
            dificult: dificult,
        })
    }

    // Funcionalidad para actualizar el score
    const updateScore = (payload) => {
        setState({
            // Conservamos el state anterior
            ...state,
            // Agregamos al score la nueva información
            scoreUser: payload + 1000
        })
    }

    // Funcionalidad para eliminar el usuario
    const deleteInfoGame = () => {
        setState({
            // Conservamos el state anterior
            ...state,
            // Inicializamos el dataGame vacio
            dataGame: [],
            scoreUser: 0
        })
    }

    // El custom hook retorna las funcionalidades que creamos
    return {
        addInfoGame,
        updateScore,
        deleteInfoGame,
        state
    };
}

// Exportando nuestro hook personalizado
export default useInitialState;
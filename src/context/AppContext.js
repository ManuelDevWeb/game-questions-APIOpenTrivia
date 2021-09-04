import React from 'react';
// Importando el custom hook personalizado
import useInitialState from '../hooks/useInitialState';

// Creando el contexto para pasar la información entre componentes sin usar props
export const AppContext = React.createContext();

const AppProvider = ({children}) => {
    // Initial State que contiene todo lo que retorna el useInitialState()
    const initialState = useInitialState();

    return(
        <AppContext.Provider value={initialState}>{children}</AppContext.Provider>
    )
}

// Exportando el Provider
export default AppProvider;
// Importando react
import { useState, useEffect } from 'react';

//Creando hook useCharacter
const useInfo = url => {
    //useState para manejar estado del componente
    const [info, setInfo] = useState([]);

    //useEffect permite manejar efectos
    useEffect(() => {
        //Llamado a la API
        fetch(url)
            //Promesa (exitosa) de la operación asíncrona
            //Transformando respuesta en JSON
            .then(response => response.json())
            //Enviando los resultados de la data al state setCharacters
            .then(data => setInfo(data.results))
        //En este caso solo hace render cuando cambie url, es decir cuando llegue una url.
    }, [url])

    //Retornamos el estado con los datos del llamado a la API
    return info;
}

//Exportando hook personalizado
export default useInfo;
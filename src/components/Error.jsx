import React from 'react';
// Importando estilos del footer

function Error({children}) {
    return(
        <div className="btn btn-danger col-4 col-md-3 mt-5">
            {children}
        </div>
    )
}

export default Error;
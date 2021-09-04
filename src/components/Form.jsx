import React, { useContext, useRef, useState } from 'react';
// Importando info categorias
import trivia_categories from '../api/categories';
// Importando Link para conectar nuestra aplicación
import {Link, useHistory} from 'react-router-dom';
// Importando context
import {AppContext} from '../context/AppContext';

function Form() {
    // Destructurando los elementos del elemento AppContext con useContext
    const {addInfoGame}=useContext(AppContext);

    // useState para manejar el error
    const [error, setError]=useState(false);

    // Haciendo referencia a nuestro formulario con useRef
    const form=useRef(null);

    // Instanciando history
    const history=useHistory();

    // Función proceder a jugar
    const handleSubmit=()=>{
        // Capturando la información del formulario utilizando FormData
        const formData=new FormData(form.current);

        // Estructura del objeto dataGame con la información extraida del formulario
        const dataGame={
            'username': formData.get('username'),
            'category': formData.get('category'),
            'dificult': formData.get('dificult'),
        }

        // Destructurando los datos para luego validar que no estes vacios
        const {username, category, dificult}=dataGame;

        if(!username || !category || !dificult){
            setError(true);
            return;
        }else{
            setError(false);
            // Función para agregar la información
            addInfoGame(dataGame);

            // Enviamos al usuario a la siguiente página
            history.push('/questions');
        }
    }



    return (
        <div className="container">

            <form ref={form}>
                <div className="row flex-column align-items-center text-center">

                    {
                        error ? <div className="btn btn-danger col-4 col-md-3 mt-5">All fields are required</div> : null
                    }

                    <div className="form-group col-md-4 mt-2">
                        <label htmlFor="username">Username</label>
                        <input type="text" className="form-control" id="username" name="username" placeholder="Username"/>
                    </div>

                    <div className="form-group col-md-4 mt-2">
                        <label htmlFor="category">Category</label>
                        <select className="form-control" id="category" name="category" >
                            {
                                trivia_categories.map(category=>(
                                    <option key={category.name} className="text-dark" value={category.id}>{category.name}</option>
                                ))
                            }
                        </select>
                    </div>

                    <div className="form-group col-md-4 mt-2">
                        <label htmlFor="dificult">Dificult</label>
                        <select className="form-control" id="dificult" name="dificult">
                            <option className="text-dark" value="easy">Easy</option>
                            <option className="text-dark" value="medium">Medium</option>
                            <option className="text-dark" value="hard">Hard</option>
                        </select>
                    </div>
                    
                    <button type="button" className="btn btn-success col-4 col-md-2 mt-5" onClick={handleSubmit}>Next!</button>
                </div>
            </form>
        </div>
    )
}

export default Form


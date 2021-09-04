import React from 'react';
// Importando componente Form
import Form from '../components/Form';
// Importando estilos del Home
import './styles/Home.css';

function Home() {
    return (
        <div className='container'>
            <div className='titleHome text-center mt-5'>
                <span className='display-3'>Login To Start!</span>
            </div>
            <Form />
        </div>
    )
}

export default Home

import React from 'react';
// Importando componente Form
import Form from '../components/Form';

function Home({requestAPI}) {
    return (
        <div className='container'>
            <div className='titleHome text-center mt-5'>
                <span className='display-3'>Login To Start!</span>
            </div>
            <Form 
                requestAPI={requestAPI}
            />
        </div>
    )
}

export default Home

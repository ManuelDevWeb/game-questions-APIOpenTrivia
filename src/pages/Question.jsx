import React, { useContext, useEffect, useState } from 'react';
// Importando componente Logo
import SvgComponent from '../components/Logo';
// Importando AppContext
import { AppContext } from '../context/AppContext';
// Importando hook para llamado a API
import useInfo from '../hooks/useInfo';
// Importando estilos del header
import '../components/styles/Header.css';
// Importando estilos del Question
import './styles/Question.css';

function Question() {
    // Destructurando los elementos del elemento AppContext con useContext
    const {state: { dataGame }}=useContext(AppContext);
    const {username, dificult, category, score}=dataGame[0];

    // Url de la API
    const API=`https://opentdb.com/api.php?amount=10&category=${category}&difficulty=${dificult}&type=multiple`;

    // Almacenando la información que retorna la API
    const dataQuestions=useInfo(API);
 // ? HAY DOBLE PETICION...
    if(dataQuestions.length>0){
      console.log(dataQuestions);
      console.log(dataQuestions[0])
      console.log(dataQuestions[0].correct_answer)
      console.log(dataQuestions[0].incorrect_answers)

    }
    

    // TO DO!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    // const [options, setOptions]=useState();
    // const [currQues, setCurreQues]=useState(0);

    return (
      <div className="row text-center align-items-end header mt-2">
        <div className="col-md-4">
          <h1 className="text-uppercase m-0">Jugador: {username}</h1>
        </div>
        <div className="col-md-4">
          <p className="m-0">
            Nivel: <span>{dificult}</span>
          </p>
        </div>
        <div className="col-md-4">
          <p className="m-0">
            Ganancia: <span>${score}</span>
          </p>
        </div>
        <div className="container">
          <SvgComponent />
        </div>
      </div>
    );
}

export default Question

import React, { useContext, useEffect, useState } from 'react';
// Importando componente Logo
import SvgComponent from '../components/Logo';
// Importando AppContext
import { AppContext } from '../context/AppContext';
// Importando History
import { useHistory } from 'react-router';
// Importando hook para llamado a API
// import useInfo from '../hooks/useInfo';
// Importando componente Question
import Question from '../components/Question';
// Importando componente ListOfScore
import ListOfScores from '../components/ListOfScores';
// Importando estilos del header
import '../components/styles/Header.css';
// Importando estilos del ListOfQuestions
import './styles/ListOfQuestions.css';

function ListOfQuestions({questions, setQuestions, scoreuser, setScore}) {
    // Destructurando los elementos del elemento AppContext con useContext
    const {state: { dataGame, scoreUser }}=useContext(AppContext);
    const {username, dificult}=dataGame[0];

    const history=useHistory();

    useEffect(() => {
      // Validar si no existe nombre
      if(!username || username===undefined){
          history.push('/');
      }
    }, [username, history]);
    
    const [options, setOptions]=useState();
    const [currQues, setCurreQues]=useState(0);

    useEffect(()=>{
      console.log(questions);

      setOptions(questions && handleShuffle([questions[currQues]?.correct_answer, ...questions[currQues]?.incorrect_answers]));
    },[questions, currQues]);

    console.log(options);

    const handleShuffle=(optionss)=>{
      return optionss.sort(()=>Math.random()-0.5);
    }

    return (
      <div className="row">
        <div className="col-12 col-md-10">
          <div className="row text-center align-items-end header mt-2">
            <div className="col-md-4">
              <h1 className="m-0">Player: <span>{username}</span></h1>
            </div>
            <div className="col-md-4">
              <p className="m-0">
                Level: <span>{dificult}</span>
              </p>
            </div>
            <div className="col-md-4">
              <p className="m-0">
                Score: <span>${scoreUser}</span>
              </p>
            </div>
            <div className="container">
              <SvgComponent />
            </div>
          </div>

          <span className='subtitle'>
            {
              //Iterando sobre las preguntas
              questions ? 
              <Question 
                currQues={currQues}
                setCurreQues={setCurreQues}
                options={options}
                questions={questions}
                correct={questions[currQues]?.correct_answer}
                scoreuser={scoreuser}
                setScore={setScore}
              />
              :
              null
              
            }
          </span>
        </div>
        <div className="col-12 col-md-2">
            <ListOfScores />
        </div>
      </div>
    );
}

export default ListOfQuestions

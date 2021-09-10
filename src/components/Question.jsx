import React, { useState, useContext, useEffect } from 'react';
// Importando History
import {useHistory} from 'react-router-dom';
// Importando AppContext
import { AppContext } from '../context/AppContext';
// Importando componente Timer
import Timer from './Timer';
// Importando estilos
import './styles/Question.css';

function Question(props) {
    const {currQues, setCurreQues, options, questions, correct}=props;

    // Destructurando AppContext
    const {state:{ scoreUser },updateScore, deleteInfoGame}=useContext(AppContext);

    const [selected, setSelected]=useState();

    //const [elegida, setElegida]=useState(false);

    const history=useHistory();

    // Funcion para agregar comparar respuestas y dar estilos a la opción
    const handleSelect=(option)=>{
        if(selected===option && selected===correct){
            return "select";
        }else if(selected===option && selected!==correct){
            return "wrong";
        }else if(option===correct){
            return "select";
        }
    }

    const handleCheck=(option)=>{
        setSelected(option);

        if(option===correct && currQues<9){
            //setElegida(true);
            updateScore(scoreUser);
            setTimeout(() => { 
                setCurreQues(currQues+1);
                setSelected();
                //setElegida(false);
            }, 3000);
        }else if(option !== correct && currQues<9){
            //setElegida(true);
            setTimeout(() => { 
                setCurreQues(currQues+1);
                setSelected();
                //setElegida(false);
            }, 3000);
        }

        if(currQues >= 9){
            if(option===correct){
                //setElegida(true);
                updateScore(scoreUser);
            }
            setTimeout(() => {
                history.push("/result")
            }, 3000);
        }
    }

    
    useEffect(() => {
          setTimeout(() => {
            history.push("/");
          }, 500000);
    })
    

    /*
    if (timer === 0) return setTimeOut(true);
      const interval = setInterval(() => {
        setTimer((prev) => prev - 1);
      }, 1000);
      return () => clearInterval(interval);
    */
    
    /*
    const handleNext=()=>{
        if(currQues >= 9){
            history.push("/result")
        }else if(selected){
            setTimeout(() => {
                setCurreQues(currQues+1);
                setSelected();
            }, 3000);
        }else{
            setError(true);
        }
    }
    */
    

    const handleQuit=()=>{
        deleteInfoGame();
        history.push("/");
    }

    return (
      <div className="container text-center questions">
        <h1>
          Question Number <span>{currQues + 1}</span>
        </h1>
        <Timer startCount={500}/>
        <div className="question mb-4 mb-md-0">
          <h3 className="text-black">{questions[currQues].question}</h3>
          {/*error ? <Error>Select one answer please!</Error> : null*/}
          <div className="optionsQuestion mb-3 mb-md-0">
            {
              // Iterando sobre las opciones
              options &&
                options.map((option) => (
                  <button
                    onClick={() => handleCheck(option)}
                    className={`text-black mx-0 mx-md-2 mt-2 singleOption ${
                      selected && handleSelect(option)
                    }`}
                    key={option}
                    disabled={selected}
                  >
                    {option}
                  </button>
                ))
            }
          </div>

          <div className="buttonsSettings mb-3 mb-md-0 ">
            <button
              className="text-black mx-2 px-5 py-2 bg-dark exit"
              onClick={handleQuit}
            >
              Exit
            </button>

            {
              /*
              <button
                className="text-black mx-2 px-5 py-2 bg-dark next"
                onClick={handleNext}
              >
                Next
              </button>
              */
            }

          </div>
        </div>
      </div>
    );
}

export default Question

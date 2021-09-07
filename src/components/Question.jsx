import React, { useState } from 'react';
// Importando componenten Error
import Error from './Error';
// Importando History
import {useHistory} from 'react-router-dom';
// Importando estilos
import './styles/Question.css';

function Question(props) {
    const {currQues, setCurreQues, options, questions, correct, scoreuser,setScore}=props;

    const [selected, setSelected]=useState();
    const [error, setError]=useState(false);

    const history=useHistory();

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
        if(option===correct) setScore(scoreuser+1000);
        setError(false);
    }

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

    const handleQuit=()=>{
        history.push("/");
    }

    return (
        <div className="container text-center questions">
            <h1>Question Number <span>{currQues+1}</span></h1>

            <div className="question mb-5 mb-md-0">
                <h2 className="text-uppercase text-black">{questions[currQues].question}</h2>
                {error ? <Error>Select one answer please!</Error> : null}
                <div className="optionsQuestion mb-3 mb-md-0">  
                    {
                        // Iterando sobre las opciones
                        options &&
                        options.map((option)=>(
                            <button
                            onClick={() => handleCheck(option)}
                            className={`text-black mx-0 mx-md-2 mt-2 singleOption ${selected && handleSelect(option)}`}
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
                        >Exit</button>

                        <button 
                            className="text-black mx-2 px-5 py-2 bg-dark next"
                            onClick={handleNext}
                        >Next</button>
                </div>

            </div>
        </div>
    )
}

export default Question

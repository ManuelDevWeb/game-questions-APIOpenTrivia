import React, {useState} from 'react';
// Importando elementos de RouterDom
import { BrowserRouter, Route, Switch } from 'react-router-dom';
// Importando axios
import axios from 'axios';
// Importando el provider definido en el context
import AppProvider from '../context/AppContext';
// Importando componente Home
import Home from '../pages/Home';
// Importando componente Question
import ListOfQuestions from '../pages/ListOfQuestions';
// Importando componente Result
import Result from '../pages/Result';
// Importando componente NotFound
import NotFound from '../pages/NotFound';
import Layout from '../components/Layout'


function AppRouter() {
  const [questions, setQuestions]=useState();
  //const [scoreuser, setScore]=useState(0);


  const requestAPI=async (category="", dificult="")=>{
    const {data}=await axios.get(`https://opentdb.com/api.php?amount=10&category=${category}&difficulty=${dificult}&type=multiple`);

    setQuestions(data.results);
  }


    return (
      // Envolvemos la aplicación dentro de nuestro provider definido en el context
      <AppProvider>
        {/* Permite al resto de las rutas funcionar */}
        <BrowserRouter>
          <Layout>
            <Switch>
              {/* Rutas de nuestra aplicación */}
              <Route path="/questions" exact>
                <ListOfQuestions
                  questions={questions} 
                  setQuestions={setQuestions}
                  //scoreuser={scoreuser}
                  //setScore={setScore}
                />
              </Route>
              <Route path="/result">
                <Result
                  //scoreuser={scoreuser}
                />
              </Route>
              <Route path="/" exact>
                <Home 
                  requestAPI={requestAPI}
                />
              </Route>
              <Route component={NotFound} />
            </Switch>
          </Layout>
        </BrowserRouter>
      </AppProvider>
    );
}

export default AppRouter;

import React from 'react';
// Importando elementos de RouterDom
import { BrowserRouter, Route, Switch } from 'react-router-dom';
// Importando el provider definido en el context
import AppProvider from '../context/AppContext';
// Importando componente Home
import Home from '../pages/Home';
// Importando componente Question
import Question from '../pages/Question';
// Importando componente Result
import Result from '../pages/Result';
// Importando componente NotFound
import NotFound from '../pages/NotFound';
import Layout from '../components/Layout'


function AppRouter() {
    return (
      // Envolvemos la aplicación dentro de nuestro provider definido en el context
      <AppProvider>
        {/* Permite al resto de las rutas funcionar */}
        <BrowserRouter>
          <Layout>
            <Switch>
              {/* Rutas de nuestra aplicación */}
              <Route path="/questions" component={Question} />
              <Route path="/result" component={Result} />
              <Route path="/" exact component={Home} />
              <Route component={NotFound} />
            </Switch>
          </Layout>
        </BrowserRouter>
      </AppProvider>
    );
}

export default AppRouter;

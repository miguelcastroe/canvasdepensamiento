import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Welcome from './pages/Welcome';
import Purpose from './pages/Purpose';
import Problem from './pages/Problem';
import Review from './pages/Review';

function App() {
  // Estado para almacenar los datos ingresados por el usuario
  const [data, setData] = useState({});

  return (
    <Router basename="/canvasdepensamiento">
      <div>
        {/* Encabezado de la aplicación */}
        <header>
          <h1>Web App de Pensamiento para IA</h1>
        </header>
        {/* Definir las rutas de la aplicación */}
        <Switch>
          <Route path="/" exact>
            <Welcome />
          </Route>
          <Route path="/purpose">
            <Purpose data={data} setData={setData} />
          </Route>
          <Route path="/problem">
            <Problem data={data} setData={setData} />
          </Route>
          <Route path="/review">
            <Review data={data} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;

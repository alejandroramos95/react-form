import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Formulario from "./components/Formulario";
import VisualizarFormulario from "./components/VisualizarFormulario";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/form">
          <Formulario></Formulario>
        </Route>
        <Route exact path="/forms_table">
          <VisualizarFormulario></VisualizarFormulario>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;

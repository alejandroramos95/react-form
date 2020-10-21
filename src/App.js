import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Formulario from "./components/Formulario";
import VisualizarFormulario from "./components/VisualizarFormulario";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Formulario></Formulario>
        </Route>
        <Route exact path="/forms_table">
          <VisualizarFormulario ejemplo={[1,2,3,4,5,6,7,8]}></VisualizarFormulario>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;

import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Formulario from "./components/Formulario";
import VisualizarFormulario from "./components/VisualizarFormulario";
import Home from "./components/Home";

function App() {
  return (
    <div className="App">
    <Router>
      <Switch>
        <Route exact path="/">
          <Home></Home>
        </Route>
        <Route exact path="/form">
          <Formulario></Formulario>
        </Route>
        <Route exact path="/forms_table">
          <VisualizarFormulario></VisualizarFormulario>
        </Route>
      </Switch>
    </Router>
    </div>
  );
}

export default App;

// entre <div className="App"> y router colocar el app bar+drawer
    
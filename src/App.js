import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Formulario from "./components/Formulario";
import VisualizarFormulario from "./components/VisualizarFormulario";
import Home from "./components/Home";
import Menu from "./components/Menu";

function App() {
  const routes = () => {
    return (
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
    );
  };

  return (
    <div className="App">
      <Menu></Menu>
      <Router>{routes()}</Router>
    </div>
  );
}

export default App;

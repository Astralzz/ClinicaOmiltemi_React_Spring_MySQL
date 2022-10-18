import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import PageBarraPrincipal from "./components/PageBarraPrincipal";
import PageRutas from "./components/PageRutas";

function App() {
  return (
    //Cuerpo principal
    <div className="App">
      {/*Contenedor de rutas */}
      <BrowserRouter>
        {/*Barra*/}
        <PageBarraPrincipal />
        {/*Rutas */}
        <PageRutas />
      </BrowserRouter>
    </div>
  );
}

export default App;

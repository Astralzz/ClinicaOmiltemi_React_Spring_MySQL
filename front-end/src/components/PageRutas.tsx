import { Routes, Route } from "react-router-dom";
import PagePacientes from "../pages/pacientes/PagePacientes";
import React from "react";
import PageMedicos from "../pages/medicos/PageMedicos";
import PageHabitaciones from "../pages/habitaciones/PageHabitaciones";
import PageCitas from "../pages/citas/PageCitas";

//Rutas
const PageRutas = () => {
  return (
    <Routes>
      <Route path="/" element={<PageCitas Titulo="citas" />} />
      <Route path="/citas" element={<PageCitas Titulo="citas" />} />
      <Route path="/pacientes" element={<PagePacientes Titulo="pacientes" />} />
      <Route path="/medicos" element={<PageMedicos Titulo="medicos" />} />
      <Route
        path="/habitaciones"
        element={<PageHabitaciones Titulo="habitaciones" />}
      />
      <Route
        path="*"
        element={
          <div className="modal-body">
            <h2 className="modal-title fs-5" id="staticBackdropLabel">
              ERROR 404, Pagina no disponible
            </h2>
          </div>
        }
      />
    </Routes>
  );
};

export default PageRutas;

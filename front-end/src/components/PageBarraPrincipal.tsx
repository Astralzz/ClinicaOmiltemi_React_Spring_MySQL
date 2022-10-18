import { Container, Form, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import React from "react";
import Img from "../images/admin.png";
import "../index.css";

interface LinksMenu {
  Titulo: string;
  url: string;
}

//Urls
const MenuItems: LinksMenu[] = [
  {
    Titulo: "Inicio",
    url: "",
  },
  {
    Titulo: "Citas",
    url: "citas",
  },
  {
    Titulo: "Pacientes",
    url: "pacientes",
  },
  {
    Titulo: "Medicos",
    url: "medicos",
  },
  {
    Titulo: "Habitaciones",
    url: "habitaciones",
  },
];

//Barra principal
const PageBarraPrincipal = () => {
  //Devolvemos
  return (
    <div className="table table-striped table-hover ">
      {/* Contenedor */}
      <div className="collapse" id="navbarToggleExternalContent">
        <div className="container d-flex align-items-center flex-column bg-dark p-4">
          <h5 className="text-white h4">Centro Médico Omiltemi</h5>
          <img
            alt="Img"
            width="80"
            className="d-iine-block align-text-top"
            src={Img}
          />
          <span className="text-white">Bienvenido</span>
        </div>
      </div>
      {/* Barra Principal */}
      <nav className="navbar navbar-dark bg-dark">
        {/*Boton de la barra */}
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarToggleExternalContent"
            aria-controls="navbarToggleExternalContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          {/*Conponentes de barra */}
          {MenuItems.map((item, i) => {
            return (
              <li key={i} className="nav-link px-2 text-white">
                <Link
                  className="nav-link"
                  to={`/${item.url}`}
                  style={{ color: "white" }}
                >
                  {item.url}
                </Link>
              </li>
            );
          })}

          <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0"></ul>

          {/*Imagen de perfil */}
          <span className="navbar-brand">
            {" "}
            Administrador{" "}
            <img
              alt="Img"
              width="30"
              height="30"
              className="d-iine-block align-text-top"
              src={Img}
            />
          </span>
        </div>
      </nav>
    </div>
  );
};

export default PageBarraPrincipal;

import React, { useEffect, useState } from "react";
import { DatePicker, TimePicker } from "@material-ui/pickers";
import swal from "sweetalert";
import {
  TelephoneOutboundFill,
  EnvelopeFill,
  PersonFill,
} from "react-bootstrap-icons";
import Habitacion from "./Habitacion";
import { useHref, useNavigate } from "react-router-dom";
import { Button, Modal } from "react-bootstrap";
import { guardarHabitacion } from "./ApiHabitaciones";

interface PropsForm {
  hab: Habitacion;
  show: boolean;
  isNuevo: boolean;
  handleClose(): void;
  actualizarLista(): Promise<void>;
}

//Arreglo;
let array: number[] = [];
for (let i = 1; i < 101; i++) {
  array.push(i);
}

//Formulario de habitaciones
const PageFormularioHabitacion: React.FC<PropsForm> = (Props) => {
  //Habitacion
  let habitacion: Habitacion = Props.isNuevo
    ? {
        id: "",
        nombre: "",
        ocupado: -1,
        piso: 0,
      }
    : Props.hab;

  //Validar datos
  const validarDatos = (): void => {
    //Edad
    if (habitacion.piso < 1 || habitacion.piso > 5) {
      swal("Error!", "Piso no valido!", "error");
      return;
    }

    //Sexo
    const s = habitacion.ocupado;
    if (s !== 1 && s !== 0) {
      swal("Error!", "No no valido!", "error");
      return;
    }

    //Nombre
    if (habitacion.nombre.length < 3) {
      swal("Error!", "El nombre es demasiado corto!", "error");
      return;
    }

    //Validamos y guardamos
    guardarPa();
    Props.handleClose();
  };

  //Guardar nuevo cliente
  const guardarPa = async () => {
    //Comrobamos id
    habitacion.id = Props.isNuevo ? "" : habitacion.id;
    //Guardamos
    await guardarHabitacion(habitacion);
    //Actualizamos lista
    Props.actualizarLista();
  };

  //Formulario
  return (
    // Formulario
    <Modal
      show={Props.show}
      onHide={Props.handleClose}
      backdrop="static"
      keyboard={false}
    >
      {/* Boton X */}
      <Modal.Header
        onAuxClick={() => {
          alert("Salir");
        }}
        closeButton
      >
        {/* Titulo */}
        <Modal.Title>
          {Props.isNuevo ? "Registrar nuevo " : "Editar "} habitacion
        </Modal.Title>
      </Modal.Header>

      {/* Formulario */}
      <Modal.Body>
        {/* Nombre completo */}
        <div className="input-group">
          <span className="input-group-text">
            <PersonFill />
          </span>
          {/* Nombre */}
          <input
            type="text"
            pattern="^[a-zA-Z][a-zA-Z0-9-_\.]{8,20}$"
            aria-label="Nombre"
            placeholder={Props.isNuevo ? "Nombre" : habitacion.nombre}
            className="form-control"
            maxLength={25}
            onChange={(e) => (habitacion.nombre = String(e.target.value))}
          />
        </div>

        {/* Piso y Ocupado */}
        <div className="input-group mb-3">
          {/* Piso */}
          <label className="input-group-text" htmlFor="inputGroupSelect01">
            Piso
          </label>
          <select
            onChange={(e) => (habitacion.piso = Number(e.target.value))}
            className="form-select"
            id="inputGroupSelect01"
          >
            <option>{Props.isNuevo ? "" : habitacion.piso}</option>
            <option value="1">Piso 1</option>
            <option value="2">Piso 2</option>
            <option value="3">Piso 3</option>
            <option value="4">Piso 4</option>
          </select>
          {/* Ocupado */}
          <label className="input-group-text" htmlFor="inputGroupSelect01">
            Ocupado
          </label>
          <select
            onChange={(e) => (habitacion.ocupado = Number(e.target.value))}
            className="form-select"
            id="inputGroupSelect01"
          >
            <option>{Props.isNuevo ? "" : habitacion.ocupado}</option>
            <option value="0">No</option>
            <option value="1">Si</option>
          </select>
        </div>
      </Modal.Body>

      {/* Botones finales */}
      <Modal.Footer>
        {/* Salir */}
        <Button
          variant="secondary"
          onClick={() => {
            Props.handleClose();
          }}
        >
          Salir
        </Button>
        {/* Guardar datos */}
        <Button variant="primary" onClick={() => validarDatos()}>
          Guardar datos
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default PageFormularioHabitacion;


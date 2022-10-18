import React, { useEffect, useState } from "react";
import { DatePicker, TimePicker } from "@material-ui/pickers";
import swal from "sweetalert";
import {
  TelephoneOutboundFill,
  EnvelopeFill,
  PersonFill,
} from "react-bootstrap-icons";
import Paciente from "./Paciente";
import { useHref, useNavigate } from "react-router-dom";
import { Button, Modal } from "react-bootstrap";
import { guardarPaciente } from "./ApiPacientes";

interface PropsForm {
  pa: Paciente;
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

//Formulario de pacientes
const PageFormularioPaciente: React.FC<PropsForm> = (Props) => {
  //Paciente
  let paciente: Paciente = Props.isNuevo
    ? {
        id: "",
        nombre: "",
        apellido_p: "",
        apellido_m: "",
        edad: 0,
        sexo: "",
        telefono: "",
        email: "",
        direccion: "",
      }
    : Props.pa;

  //Validar datos
  const validarDatos = (): void => {
    //Telefono
    if (paciente.telefono.length !== 10) {
      swal("Error!", "El telefono debe de tener 10 dígitos!", "error");
      return;
    }

    //Edad
    if (paciente.edad < 1 || paciente.edad > 120) {
      swal("Error!", "Edad no valida!", "error");
      return;
    }

    //Sexo
    const s = paciente.sexo;
    if (s !== "H" && s !== "M" && s !== "O" && s !== "NP") {
      swal("Error!", "Sexo no valido!", "error");
      return;
    }

    //Apellidos
    if (
      paciente.apellido_p.indexOf(" ") !== -1 ||
      paciente.apellido_m.indexOf(" ") !== -1 ||
      paciente.apellido_p.length < 3 ||
      paciente.apellido_m.length < 3
    ) {
      swal("Error!", "Apellido no valido!", "error");
      return;
    }

    //Nombre
    if (paciente.nombre.length < 3) {
      swal("Error!", "El nombre es demasiado corto!", "error");
      return;
    }

    //email
    if (paciente.email !== "") {
      const a = paciente.email.indexOf("@");
      const b = paciente.email.indexOf(".");

      if (a === -1 || b === -1 || paciente.email.length < 6) {
        swal("Error!", "Email no valido!", "error");
        return;
      }
    }

    //Validamos y guardamos
    guardarPa();
    Props.handleClose();
  };

  //Guardar nuevo cliente
  const guardarPa = async () => {
    //Comrobamos id
    paciente.id = Props.isNuevo ? "" : paciente.id;
    //Guardamos
    await guardarPaciente(paciente);
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
          {Props.isNuevo ? "Registrar nuevo " : "Editar "} paciente
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
            placeholder={Props.isNuevo ? "Nombre" : paciente.nombre}
            className="form-control"
            maxLength={25}
            onChange={(e) => (paciente.nombre = String(e.target.value))}
          />
          {/* Apellido paterno */}
          <input
            type="text"
            aria-label="Apellido p"
            placeholder={Props.isNuevo ? "Apellido p" : paciente.apellido_p}
            className="form-control"
            maxLength={20}
            onChange={(e) => (paciente.apellido_p = String(e.target.value))}
          />
          {/* Apellido materno */}
          <input
            type="text"
            aria-label="Apellido m"
            placeholder={Props.isNuevo ? "Apellido m" : paciente.apellido_m}
            className="form-control"
            maxLength={20}
            onChange={(e) => (paciente.apellido_m = String(e.target.value))}
          />
        </div>

        {/* Sexo y edad */}
        <div className="input-group mb-3">
          {/* Sexo */}
          <label className="input-group-text" htmlFor="inputGroupSelect01">
            Sexo
          </label>
          <select
            onChange={(e) => (paciente.sexo = String(e.target.value))}
            className="form-select"
            id="inputGroupSelect01"
          >
            <option>{Props.isNuevo ? "" : paciente.sexo}</option>
            <option value="H">Hombre</option>
            <option value="M">Mujer</option>
            <option value="O">Otro</option>
            <option value="NP">Prefiero no decirlo</option>
          </select>
          {/* Edad */}
          <label className="input-group-text" htmlFor="inputGroupSelect01">
            Edad
          </label>
          <select
            // value={paciente.edad}
            onChange={(e) => (paciente.edad = Number(e.target.value))}
            className="form-select"
            id="inputGroupSelect01"
          >
            <option>{Props.isNuevo ? "" : paciente.edad}</option>
            {array.map((i) => {
              return (
                <option key={i} value={i}>
                  {i}
                </option>
              );
            })}
          </select>
        </div>

        {/* Telefono y email */}
        <div className="input-group mb-3">
          {/* Telefono */}
          <span className="input-group-text">
            <TelephoneOutboundFill />
          </span>
          <input
            type="number"
            className="form-control"
            placeholder={Props.isNuevo ? "Telefono" : paciente.telefono}
            aria-label="Telefono"
            maxLength={10}
            onChange={(e) => (paciente.telefono = String(e.target.value))}
          />
          {/* Email */}
          <span className="input-group-text">
            <EnvelopeFill />
          </span>
          <input
            type="email"
            className="form-control"
            placeholder={Props.isNuevo ? "Email" : paciente.email}
            aria-label="Email"
            maxLength={25}
            onChange={(e) => (paciente.email = String(e.target.value))}
          />
        </div>

        {/* Dirección */}
        <div className="input-group">
          <span className="input-group-text">Dirección</span>
          <textarea
            onChange={(e) => (paciente.direccion = String(e.target.value))}
            className="form-control"
            aria-label="With textarea"
            placeholder={Props.isNuevo ? "" : paciente.direccion}
            maxLength={300}
          ></textarea>
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

export default PageFormularioPaciente;




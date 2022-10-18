import React, { useEffect, useState } from "react";
import { DatePicker, TimePicker } from "@material-ui/pickers";
import swal from "sweetalert";
import {
  TelephoneOutboundFill,
  EnvelopeFill,
  PersonFill,
} from "react-bootstrap-icons";
import Medico from "./Medico";
import { useHref, useNavigate } from "react-router-dom";
import { Button, Modal } from "react-bootstrap";
import { guardarMedico } from "./ApiMedico";

interface PropsForm {
  me: Medico;
  show: boolean;
  isNuevo: boolean;
  handleClose(): void;
  actualizarLista(): Promise<void>;
}

//Arreglo;
let array: number[] = [];
for (let i = 18; i < 70; i++) {
  array.push(i);
}

//Formulario de medicos
const PageFormularioMedico: React.FC<PropsForm> = (Props) => {
  //Medico
  let medico: Medico = Props.isNuevo
    ? {
        id: "",
        nombre: "",
        apellido_p: "",
        apellido_m: "",
        telefono: "",
        email: "",
        especialidad: "",
        edad: 0,
      }
    : Props.me;

  //Validar datos
  const validarDatos = (): void => {
    //Telefono
    if (medico.telefono.length !== 10) {
      swal("Error!", "El telefono debe de tener 10 dígitos!", "error");
      return;
    }

    //Edad
    if (medico.edad < 18 || medico.edad > 75) {
      swal("Error!", "Edad no valida!", "error");
      return;
    }

    //Apellidos
    if (
      medico.apellido_p.indexOf(" ") !== -1 ||
      medico.apellido_m.indexOf(" ") !== -1 ||
      medico.apellido_p.length < 3 ||
      medico.apellido_m.length < 3
    ) {
      swal("Error!", "Apellido no valido!", "error");
      return;
    }

    //Nombre
    if (medico.nombre.length < 3) {
      swal("Error!", "El nombre es demasiado corto!", "error");
      return;
    }
    
    //Especialidad
    if (medico.especialidad.length < 3) {
      swal("Error!", "La especialidad es demasiado corta!", "error");
      return;
    }

    //email
    if (medico.email.length < 6) {
      const a = medico.email.indexOf("@");
      const b = medico.email.indexOf(".");

      if (a === -1 || b === -1 || medico.email.length < 6) {
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
    medico.id = Props.isNuevo ? "" : medico.id;
    //Guardamos
    await guardarMedico(medico);
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
          {Props.isNuevo ? "Registrar nuevo " : "Editar "} medico
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
            placeholder={Props.isNuevo ? "Nombre" : medico.nombre}
            className="form-control"
            maxLength={25}
            onChange={(e) => (medico.nombre = String(e.target.value))}
          />
          {/* Apellido paterno */}
          <input
            type="text"
            aria-label="Apellido p"
            placeholder={Props.isNuevo ? "Apellido p" : medico.apellido_p}
            className="form-control"
            maxLength={20}
            onChange={(e) => (medico.apellido_p = String(e.target.value))}
          />
          {/* Apellido materno */}
          <input
            type="text"
            aria-label="Apellido m"
            placeholder={Props.isNuevo ? "Apellido m" : medico.apellido_m}
            className="form-control"
            maxLength={20}
            onChange={(e) => (medico.apellido_m = String(e.target.value))}
          />
        </div>

        {/* Especialidad y edad */}
        <div className="input-group mb-3">
          {/* Especialidad */}
          <label className="input-group-text" htmlFor="inputGroupSelect01">
            Especialidad
          </label>
          <select
            onChange={(e) => (medico.especialidad = String(e.target.value))}
            className="form-select"
            id="inputGroupSelect01"
          >
            <option>{Props.isNuevo ? "" : medico.especialidad}</option>
            <option value="General">General</option>
            <option value="Dermatología">Dermatología</option>
            <option value="Cardiología ">Cardiología</option>
            <option value="Gastroenterología">Gastroenterología</option>
            <option value="Pediatría">Pediatría</option>
            <option value="Psiquiatría ">Psiquiatría</option>
            <option value="Urología">Urología</option>
            <option value="Ortopedia">Ortopedia</option>
            <option value="Oftalmología">Oftalmología</option>
            <option value="Infectología ">Infectología</option>
            <option value="Dermatología ">Dermatología</option>
            <option value="Otro ">Otro</option>
          </select>
          {/* Edad */}
          <label className="input-group-text" htmlFor="inputGroupSelect01">
            Edad
          </label>
          <select
            // value={medico.edad}
            onChange={(e) => (medico.edad = Number(e.target.value))}
            className="form-select"
            id="inputGroupSelect01"
          >
            <option>{Props.isNuevo ? "" : medico.edad}</option>
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
            placeholder={Props.isNuevo ? "Telefono" : medico.telefono}
            aria-label="Telefono"
            maxLength={10}
            onChange={(e) => (medico.telefono = String(e.target.value))}
          />
          {/* Email */}
          <span className="input-group-text">
            <EnvelopeFill />
          </span>
          <input
            type="email"
            className="form-control"
            placeholder={Props.isNuevo ? "Email" : medico.email}
            aria-label="Email"
            maxLength={25}
            onChange={(e) => (medico.email = String(e.target.value))}
          />
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

export default PageFormularioMedico;


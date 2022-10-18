import React, { useEffect, useState } from "react";
import { DatePicker, TimePicker } from "@material-ui/pickers";
import swal from "sweetalert";
import Cita from "./Cita";
import { useHref, useNavigate } from "react-router-dom";
import { Button, Modal } from "react-bootstrap";
import { guardarCita } from "./ApiCitas";
import { listaDeNombresCitas } from "./PageCitas";

interface PropsForm {
  ci: Cita;
  show: boolean;
  isNuevo: boolean;
  listaNombres: listaDeNombresCitas;
  citas: Cita[];
  handleClose(): void;
  actualizarLista(): Promise<void>;
}

//Arreglo;
let array: number[] = [];
for (let i = 18; i < 70; i++) {
  array.push(i);
}

let cita: Cita;

//Formulario de citas
const PageFormularioCita: React.FC<PropsForm> = (Props) => {
  //Fecha seleccionada
  const [getFechaSelect, setFechaSelect] = useState<Date | null>(null);
  //Hora seleccionada
  const [getHoraSelect, setHoraSelect] = useState<Date | null>(null);

  //Cita
  if (getHoraSelect === null && getFechaSelect === null) {
    cita = Props.isNuevo
      ? {
          id: "",
          idmedico: "",
          idpaciente: "",
          idhabitacion: "",
          fecha: "",
          hora: "",
        }
      : Props.ci;
  }

  //Validar datos
  const validarDatos = (): void => {
    console.log(cita);

    //Selecciones
    const v =
      cita.idpaciente === "" ||
      cita.idmedico === "" ||
      cita.idhabitacion === "";
    if (v) {
      swal("Error!", "Selecciona todos los campos!", "error");
      return;
    }

    //Hora
    if (getHoraSelect === null) {
      swal("Error!", "Selecciona una hora!", "error");
      return;
    } else {
      cita.hora = getHoraSelect.toLocaleTimeString();
    }

    //Fecha
    if (getFechaSelect === null) {
      swal("Error!", "Selecciona una fecha!", "error");
      return;
    } else {
      const d = getFechaSelect.getDate();
      const m = getFechaSelect.getMonth() + 1;
      const a = getFechaSelect.getFullYear();
      cita.fecha = `${a}-${m}-${d}`;
    }

    //Ponemos null
    setFechaSelect(null);
    setHoraSelect(null);

    //Validamos y guardamos
    guardarCi();
    Props.handleClose();
  };

  //Guardar nueva cita
  const guardarCi = async () => {
    //Comprobamos id
    cita.id = Props.isNuevo ? "" : cita.id;
    //Guardamos
    await guardarCita(cita);
    // Actualizamos lista
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
          {Props.isNuevo ? "Registrar nueva " : "Editar "} cita
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {/* Medico*/}
        <div className="input-group mb-3">
          <label className="input-group-text" htmlFor="inputGroupSelect01">
            Medico
          </label>
          <select
            onChange={(e) => (cita.idmedico = String(e.target.value))}
            className="form-select"
            id="inputGroupSelect01"
          >
            <option>
              {Props.isNuevo || cita.medico === undefined
                ? ""
                : `${cita.medico.nombre} ${cita.medico.apellido_p} ${cita.medico.apellido_m}`}
            </option>
            {Props.listaNombres.ListaMedicos.map((m, i) => {
              return (
                <option key={i} value={m.id}>
                  {`${m.nombre} ${m.apellido_p} ${m.apellido_m}`}
                </option>
              );
            })}
          </select>
        </div>
        {/* paciente*/}
        <div className="input-group mb-3">
          <label className="input-group-text" htmlFor="inputGroupSelect01">
            Paciente
          </label>
          <select
            onChange={(e) => (cita.idpaciente = String(e.target.value))}
            className="form-select"
            id="inputGroupSelect01"
          >
            <option>
              {Props.isNuevo || cita.paciente === undefined
                ? ""
                : `${cita.paciente.nombre} ${cita.paciente.apellido_p} ${cita.paciente.apellido_m}`}
            </option>
            {Props.listaNombres.listaPacientes.map((p, i) => {
              return (
                <option key={i} value={p.id}>
                  {`${p.nombre} ${p.apellido_p} ${p.apellido_m}`}
                </option>
              );
            })}
          </select>
        </div>
        {/* habitaciones*/}
        <div className="input-group mb-3">
          <label className="input-group-text" htmlFor="inputGroupSelect01">
            Habitacion
          </label>
          <select
            onChange={(e) => (cita.idhabitacion = String(e.target.value))}
            className="form-select"
            id="inputGroupSelect01"
          >
            <option>
              {Props.isNuevo || cita.habitacion === undefined
                ? ""
                : `${cita.habitacion.nombre} piso ${cita.habitacion.piso}`}
            </option>
            {Props.listaNombres.ListaHabitaciones.map((h, i) => {
              return (
                <option key={i} value={h.id}>
                  {`${h.nombre}, Piso ${h.piso}`}
                </option>
              );
            })}
          </select>
        </div>
        {/* fecha*/}
        <div className="input-group mb-3">
          <label className="input-group-text" htmlFor="inputGroupSelect01">
            Fecha
          </label>
          <DatePicker
            className="form-select"
            value={getFechaSelect}
            onChange={(newDate) => setFechaSelect(newDate)}
          ></DatePicker>
        </div>

        {/* Hora*/}
        <div className="input-group mb-3">
          <label className="input-group-text" htmlFor="inputGroupSelect01">
            Hora
          </label>
          <TimePicker
            className="form-select"
            value={getHoraSelect}
            onChange={(newDate) => setHoraSelect(newDate)}
          ></TimePicker>
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

export default PageFormularioCita;

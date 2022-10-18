import React, { useEffect } from "react";
import { Pencil, Trash3 } from "react-bootstrap-icons";
import swal from "sweetalert";
import Paciente from "../pacientes/Paciente";
import { removerCita } from "./ApiCitas";
import Cita from "./Cita";

//Interface
interface PropsLista {
  citas: Cita[];
  handleShow(): void;
  hastNuevo(): void;
  hastCita(s: Cita): void;
  actualizarLista(): Promise<void>;
}

//Tabla de citas
const TablaCita: React.FC<PropsLista> = (Props) => {
  //Eliminar cita
  const eliminarCita = async (p: Cita) => {
    //Eliminamos
    await removerCita(p.id);

    //Actualizamos tabla
    Props.actualizarLista();
  };

  // Tabla
  return (
    <table className="table table-striped table-hover table-bordered ">
      {/* Títulos */}
      <thead>
        <tr>
          <th>No</th>
          <th>Medico</th>
          <th>Paciente</th>
          <th>Habitacion</th>
          <th>Fecha</th>
          <th>Hora</th>
          <th>Opciones</th>
        </tr>
      </thead>
      {/* Recorremos datos */}
      <tbody>
        {Props.citas.map((c, i) => {
          //Nombres
          const medico =
            c.medico === undefined
              ? "..."
              : `${c.medico.nombre} ${c.medico.apellido_p} ${c.medico.apellido_m}`;

          const paciente =
            c.paciente === undefined
              ? "..."
              : `${c.paciente.nombre} ${c.paciente.apellido_p} ${c.paciente.apellido_m}`;

          const habitacion =
            c.habitacion === undefined
              ? "..."
              : `${c.habitacion.nombre} Piso ${c.habitacion.piso}`;

          return (
            <tr key={i + 1}>
              {/* Numero */}
              <td>{i + 1}</td>
              {/* Medico */}
              <td>{medico}</td>
              {/* Paciente */}
              <td>{paciente}</td>
              {/* Habitacion */}
              <td>{habitacion}</td>
              {/* Fecha */}
              <td>{c.fecha.replace(/-/g, "/")}</td>
              {/* Hora */}
              <td>{c.hora}</td>
              {/* Editar dato */}
              <td>
                <button
                  type="button"
                  disabled={c.habitacion === undefined}
                  className="btn btn-default"
                  aria-label="Left Align"
                  onClick={() => {
                    Props.hastCita(c);
                    Props.hastNuevo();
                    Props.handleShow();
                  }}
                >
                  <Pencil size={20} />
                </button>
                {/* Eliminar dato */}
                <button
                  type="button"
                  className="btn btn-default"
                  disabled={c.habitacion === undefined}
                  aria-label="Left Align"
                  onClick={async () => {
                    swal({
                      title: `¿Seguro?`,
                      text: `Si eliminas esta cita no podrás recuperarla`,
                      icon: "warning",
                      //buttons: [true],
                      dangerMode: true,
                    }).then(async (res) => {
                      //Aceptar
                      if (res) {
                        //Eliminamos
                        await eliminarCita(c);
                      }
                    });
                  }}
                >
                  <Trash3 size={20} />
                </button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default TablaCita;

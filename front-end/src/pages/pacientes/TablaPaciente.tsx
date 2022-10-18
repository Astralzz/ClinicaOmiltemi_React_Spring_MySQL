import React from "react";
import { Pencil, Trash3 } from "react-bootstrap-icons";
import swal from "sweetalert";
import { removerPaciente } from "./ApiPacientes";
import Paciente from "./Paciente";

//Interface
interface PropsLista {
  pacientes: Paciente[];
  handleShow(): void;
  hastNuevo(): void;
  hastPaciente(p: Paciente): void;
  actualizarLista(): Promise<void>;
}

//Tabla de pacientes
const TablaPaciente: React.FC<PropsLista> = (Props) => {
  //Eliminar paciente
  const eliminarPaciente = async (p: Paciente) => {
    //Eliminamos
    await removerPaciente(p.id);

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
          <th>Nombre</th>
          <th>Apellido M</th>
          <th>Apellido P</th>
          <th>Sexo</th>
          <th>Edad</th>
          <th>Telefono</th>
          <th>Email</th>
          <th>Dirección</th>
          <th>Opciones</th>
        </tr>
      </thead>
      {/* Recorremos datos */}
      <tbody>
        {Props.pacientes.map((p, i) => {
          return (
            <tr key={i + 1}>
              {/* Numero */}
              <td>{i + 1}</td>
              {/* Nombre */}
              <td>{p.nombre}</td>
              {/* Apellido P */}
              <td>{p.apellido_p}</td>
              {/* Apellido M */}
              <td>{p.apellido_m}</td>
              {/* Sexo */}
              <td>{p.sexo}</td>
              {/* Edad */}
              <td>{p.edad}</td>
              {/* Telefono */}
              <td>{p.telefono}</td>
              {/* Correo */}
              <td>{p.email}</td>
              {/* Dirección */}
              <td>{p.direccion}</td>
              {/* Editar dato */}
              <td>
                <button
                  type="button"
                  className="btn btn-default"
                  aria-label="Left Align"
                  onClick={() => {
                    Props.hastPaciente(p);
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
                  aria-label="Left Align"
                  onClick={async () => {
                    swal({
                      title: `¿Seguro?`,
                      text: `Si eliminas a ${p.nombre} no podrás recuperarlo`,
                      icon: "warning",
                      //buttons: [true],
                      dangerMode: true,
                    }).then(async (willDelete) => {
                      //Aceptar
                      if (willDelete) {
                        //Eliminamos
                        await eliminarPaciente(p);
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

export default TablaPaciente;

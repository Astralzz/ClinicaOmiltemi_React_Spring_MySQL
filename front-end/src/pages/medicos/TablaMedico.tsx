import React from "react";
import { Pencil, Trash3 } from "react-bootstrap-icons";
import swal from "sweetalert";
import { removerMedico } from "./ApiMedico";
import Medico from "./Medico";

//Interface
interface PropsLista {
  medicos: Medico[];
  handleShow(): void;
  hastNuevo(): void;
  hastMedico(m: Medico): void;
  actualizarLista(): Promise<void>;
}

//Tabla de medicos
const TablaMedico: React.FC<PropsLista> = (Props) => {
  //Eliminar medico
  const eliminarMedico = async (p: Medico) => {
    //Eliminamos
    await removerMedico(p.id);

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
          <th>Telefono</th>
          <th>Email</th>
          <th>Especialidad</th>
          <th>Edad</th>
          <th>Opciones</th>
        </tr>
      </thead>
      {/* Recorremos datos */}
      <tbody>
        {Props.medicos.map((p, i) => {
          return (
            <tr key={i+1}>
              {/* Numero */}
              <td>{i+1}</td>
              {/* Nombre */}
              <td>{p.nombre}</td>
              {/* Apellido P */}
              <td>{p.apellido_p}</td>
              {/* Apellido M */}
              <td>{p.apellido_m}</td>
              {/* Telefono */}
              <td>{p.telefono}</td>
              {/* Email */}
              <td>{p.email}</td>
              {/* Especialidad */}
              <td>{p.especialidad}</td>
              {/* Edad */}
              <td>{p.edad}</td>
              {/* Editar dato */}
              <td>
                <button
                  type="button"
                  className="btn btn-default"
                  aria-label="Left Align"
                  onClick={() => {
                    Props.hastMedico(p);
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
                        await eliminarMedico(p);
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

export default TablaMedico;

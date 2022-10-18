import React from "react";
import { Pencil, Trash3 } from "react-bootstrap-icons";
import swal from "sweetalert";
import { removerHabitacion } from "./ApiHabitaciones";
import Habitacion from "./Habitacion";

//Interface
interface PropsLista {
  habitaciones: Habitacion[];
  handleShow(): void;
  hastNuevo(): void;
  hastHabitacion(ha: Habitacion): void;
  actualizarLista(): Promise<void>;
}

//Tabla de habitaciones
const TablaHabitacion: React.FC<PropsLista> = (Props) => {
  //Eliminar habitacion
  const eliminarHabitacion = async (p: Habitacion) => {
    //Eliminamos
    await removerHabitacion(p.id);

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
          <th>Piso</th>
          <th>Ocupada</th>
          <th>Opciones</th>
        </tr>
      </thead>
      {/* Recorremos datos */}
      <tbody>
        {Props.habitaciones.map((p, i) => {
          return (
            <tr key={i + 1}>
              {/* Numero */}
              <td>{i + 1}</td>
              {/* Nombre */}
              <td>{p.nombre}</td>
              {/* Piso */}
              <td>{p.piso}</td>
              {/* Ocupado */}
              <td>{p.ocupado === 0 ? "No" : "Si"}</td>
              {/* Editar dato */}
              <td>
                <button
                  type="button"
                  className="btn btn-default"
                  aria-label="Left Align"
                  onClick={() => {
                    Props.hastHabitacion(p);
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
                        await eliminarHabitacion(p);
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

export default TablaHabitacion;

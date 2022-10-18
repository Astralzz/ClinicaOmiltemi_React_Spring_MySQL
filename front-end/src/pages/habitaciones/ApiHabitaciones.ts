//Importaciones
import Habitacion from "./Habitacion";
import swal from "sweetalert";
const URL = "http://localhost:1102/api/";

//Buscar Habitacion
async function buscarHabitacionPorId(id: string) {
  try {
    // process.env.REACT_APP_BASE_URL + "Habitacion/" + id;
    const url = URL + "habitacion/" + id;

    //Respueta
    const Habitacion = await fetch(url, {
      method: "GET",
      headers: {
        "Content-type": "application/json",
      },
    });

    //Devolvemos un json
    return await Habitacion.json();
  } catch {
    return undefined;
  }
}

//Buscar Habitaciones (Función asincrónica)
async function buscarHabitaciones() {
  try {
    //Ruta
    const url = URL + "habitaciones";

    //Respueta
    const lista = await fetch(url, {
      method: "GET",
      headers: {
        "Content-type": "application/json",
      },
    });

    //Devolvemos un json
    return await lista.json();
  } catch {
    return undefined;
  }
}

//Eliminar Habitacion
async function removerHabitacion(id: string) {
  //Ruta
  const url = URL + "habitacion/eliminar/" + id;

  //Enviar
  await fetch(url, {
    method: "DELETE",
    headers: {
      "Content-type": "application/json",
    },
  })
    .then((res) => {
      //Comprobamos estatus
      if (res.status > 399) {
        swal(`Error ${res.status}, No se pudo eliminar el registro`, {
          icon: "error",
        });
        return;
      }
      //Éxito
      swal("Éxito, Registro eliminado correctamente! ", {
        icon: "success",
      });
    })
    .catch((err) => {
      swal(`Error, ${err}`, {
        icon: "error",
      });
    });
}

//Guardar Habitacion
async function guardarHabitacion(newHabitacion: Habitacion) {
  //Ruta
  const url = URL + "habitacion/guardar";

  //Enviar
  await fetch(url, {
    method: "POST",
    body: JSON.stringify(newHabitacion),
    headers: {
      "Content-type": "application/json",
    },
  })
    .then((res) => {
      //Comprobamos estatus
      if (res.status > 399) {
        swal(`Error ${res.status}, No se pudo guardar el registro`, {
          icon: "error",
        });
        return;
      }
      //Éxito
      swal("Éxito, Registro guardado correctamente! ", {
        icon: "success",
      });
    })
    .catch((err) => {
      swal(`Error, ${err}`, {
        icon: "error",
      });
    });
}

//Exportaciones
export {
  buscarHabitaciones,
  buscarHabitacionPorId,
  removerHabitacion,
  guardarHabitacion,
};

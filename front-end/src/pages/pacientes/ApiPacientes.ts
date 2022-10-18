//Importaciones
import Paciente from "./Paciente";
import swal from "sweetalert";
const URL = "http://localhost:1100/api/";

//Buscar Pacientes
async function buscarPacientePorId(id: string) {
  try {
    // process.env.REACT_APP_BASE_URL + "Paciente/" + id;
    const url = URL + "paciente/" + id;

    //Respueta
    const Paciente = await fetch(url, {
      method: "GET",
      headers: {
        "Content-type": "application/json",
      },
    });

    //Devolvemos un json
    return await Paciente.json();
  } catch {
    return undefined;
  }
}

//Buscar Pacientes (Función asincrónica)
async function buscarPacientes() {
  try {
    //Ruta
    const url = URL + "pacientes";

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

//Eliminar Pacientes
async function removerPaciente(id: string) {
  //Ruta
  const url = URL + "paciente/eliminar/" + id;

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

//Guardar Paciente
async function guardarPaciente(newPaciente: Paciente) {
  //Ruta
  const url = URL + "paciente/guardar";

  //Enviar
  await fetch(url, {
    method: "POST",
    body: JSON.stringify(newPaciente),
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
  buscarPacientes,
  buscarPacientePorId,
  removerPaciente,
  guardarPaciente,
};

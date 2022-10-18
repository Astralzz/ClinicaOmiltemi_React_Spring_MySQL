//Importaciones
import Medico from "./Medico";
import swal from "sweetalert";
const URL = "http://localhost:1101/api/";

//Buscar Medicos
async function buscarMedicoPorId(id: string) {
  try {
    // process.env.REACT_APP_BASE_URL + "Medico/" + id;
    const url = URL + "medico/" + id;

    //Respueta
    const Medico = await fetch(url, {
      method: "GET",
      headers: {
        "Content-type": "application/json",
      },
    });

    //Devolvemos un json
    return await Medico.json();
  } catch {
    return undefined;
  }
}

//Buscar Medicos (Función asincrónica)
async function buscarMedicos() {
  try {
    //Ruta
    const url = URL + "medicos";

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

//Eliminar Medicos
async function removerMedico(id: string) {
  //Ruta
  const url = URL + "medico/eliminar/" + id;

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

//Guardar Medico
async function guardarMedico(newMedico: Medico) {
  //Ruta
  const url = URL + "medico/guardar";

  //Enviar
  await fetch(url, {
    method: "POST",
    body: JSON.stringify(newMedico),
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
  buscarMedicos,
  buscarMedicoPorId,
  removerMedico,
  guardarMedico,
};

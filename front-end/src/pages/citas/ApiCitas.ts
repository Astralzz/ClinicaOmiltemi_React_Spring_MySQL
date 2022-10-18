//Importaciones
import Cita from "./Cita";
import swal from "sweetalert";
const URL = "http://localhost:1103/api/";

//Buscar Cita
async function buscarCitaPorId(id: string) {
  try {
    // process.env.REACT_APP_BASE_URL + "Cita/" + id;
    const url = URL + "cita/" + id;

    //Respueta
    const Cita = await fetch(url, {
      method: "GET",
      headers: {
        "Content-type": "application/json",
      },
    });

    //Devolvemos un json
    return await Cita.json();
  } catch {
    return undefined;
  }
}

//Buscar Cita (Función asincrónica)
async function buscarCitas() {
  try {
    //Ruta
    const url = URL + "citas";

    //Respueta
    const lista = await fetch(url, {
      method: "GET",
      headers: {
        "Content-type": "application/json",
      },
    });

    //Devolvemos un json
    const citas: Cita[] = await lista.json();

    //Error
    if (lista.status > 399) {
      return undefined;
    }

    return citas;
  } catch {
    return undefined;
  }
}

//Eliminar Cita
async function removerCita(id: string) {
  //Ruta
  const url = URL + "cita/eliminar/" + id;

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

//Guardar Cita
async function guardarCita(newCita: Cita) {
  //Ruta
  const url = URL + "cita/guardar";

  //Enviar
  await fetch(url, {
    method: "POST",
    body: JSON.stringify(newCita),
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

//Buscar Pacientes por id
async function buscarCitaPacientePorId(id: string) {
  try {
    // process.env.REACT_APP_BASE_URL + "Paciente/" + id;
    const url = URL + "cita/paciente/" + id;

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

//Lista de pacientes
async function buscarListaDePacientes() {
  try {
    //Ruta
    const url = URL + "citas/pacientes";

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

//Buscar Medicos por id
async function buscarCitaMedicoPorId(id: string) {
  try {
    // process.env.REACT_APP_BASE_URL + "Medico/" + id;
    const url = URL + "cita/medico/" + id;

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

//Lista de medicos
async function buscarListaDeMedicos() {
  try {
    //Ruta
    const url = URL + "citas/medicos";

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

//Buscar Habitaciones por id
async function buscarCitaHabitacionPorId(id: string) {
  try {
    // process.env.REACT_APP_BASE_URL + "Habitacion/" + id;
    const url = URL + "cita/habitacion/" + id;

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

//Lista de habitaciones
async function buscarListaDeHabitaciones() {
  try {
    //Ruta
    const url = URL + "citas/habitaciones";

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

//Exportaciones
export {
  buscarCitas,
  buscarCitaPorId,
  removerCita,
  guardarCita,
  buscarCitaPacientePorId,
  buscarCitaHabitacionPorId,
  buscarCitaMedicoPorId,
  buscarListaDeHabitaciones,
  buscarListaDeMedicos,
  buscarListaDePacientes,
};

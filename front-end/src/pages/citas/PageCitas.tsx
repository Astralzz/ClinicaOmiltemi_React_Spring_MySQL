import { Trash3, Pencil } from "react-bootstrap-icons";
import PageCalendario from "../../components/PageCalendario";
import React, { useState } from "react";
import PageFormularioCita from "./PageFormularioCita";
import Cita from "./Cita";
import TablaCita from "./TablaCita";
import {
  buscarCitaHabitacionPorId,
  buscarCitaMedicoPorId,
  buscarCitaPacientePorId,
  buscarCitas,
  buscarListaDeHabitaciones,
  buscarListaDeMedicos,
  buscarListaDePacientes,
} from "./ApiCitas";
import Paciente from "../pacientes/Paciente";
import Medico from "../medicos/Medico";
import Habitacion from "../habitaciones/Habitacion";

interface PropsPas {
  Titulo: string;
}

//Opción
let Obc = 1;

//Lista
let LISTA_C: Cita[] = [];

//Listas de con nombres
export interface listaDeNombresCitas {
  listaPacientes: Paciente[];
  ListaMedicos: Medico[];
  ListaHabitaciones: Habitacion[];
}

//Citas
const PageCitas: React.FC<PropsPas> = ({ Titulo }) => {
  //Cita
  const [cita, setCita] = useState<Cita>({
    id: "",
    idmedico: "",
    idpaciente: "",
    idhabitacion: "",
    fecha: "",
    hora: "",
  });
  const hastCita = (p: Cita): void => setCita(p);

  //valor por defecto arreglo vacío
  const [listaCitas, setListaCitas] = useState<Cita[]>([]);
  const [listaNombres, setListaNombres] = useState<listaDeNombresCitas>({
    ListaHabitaciones: [],
    ListaMedicos: [],
    listaPacientes: [],
  });

  //Ventana flotante
  const [show, setShow] = useState<boolean>(false);
  const handleClose = (): void => setShow(false);
  const handleShow = (): void => setShow(true);

  //Editar/Crear
  const [getIsNuevo, setIsNuevo] = useState<boolean>(true);
  const hastNuevo = (): void => setIsNuevo(false);

  //Buscar citas
  const buscarLista = async () => {
    //Buscamos
    const res = await buscarCitas();

    //Comprobamos
    if (res === undefined || res === null) {
      setListaCitas([]);
      Obc = -1;
      return;
    }

    //Asignamos
    Obc = 1;
    LISTA_C = res;
    setListaCitas(res);
    await obtenerListaDeNombresPorId();
    await obtenerListaNombres();
  };
  const actualizarLista = (): Promise<void> => buscarLista();

  //Buscar citas por nombre
  const buscarCitasPorN = (cadena: string) => {
    // Quitamos Espacios
    cadena = cadena.replace(/ /g, "");

    //Si no esta vació
    if (cadena !== "" || LISTA_C.length < 1) {
      //Lista auxiliar
      let listaAux: Cita[] = [];

      //Recorremos
      LISTA_C.forEach((pass) => {
        //Comprobamos
        if (
          pass.medico === undefined ||
          pass.paciente === undefined ||
          pass.habitacion === undefined
        ) {
          //Ponemos datos
          setListaCitas(listaAux);
          return;
        }

        //Obtenemos las cadenas
        let nombre: string = [
          pass.medico.nombre,
          pass.medico.apellido_p,
          pass.medico.apellido_m,
          pass.paciente.nombre,
          pass.paciente.apellido_p,
          pass.paciente.apellido_m,
          pass.habitacion.nombre,
          pass.habitacion.piso,
        ]
          .join("")
          .replace(/ /g, "");

        //Buscamos
        const index = nombre.indexOf(cadena);

        //Comprobamos
        if (index >= 0) {
          listaAux.push(pass);
        }
      });

      //Ponemos datos
      setListaCitas(listaAux);
      return;
    }

    setListaCitas(LISTA_C);
  };

  //Obtener nombres por id
  const obtenerListaNombres = async () => {
    //Llenamos las listas completas
    const ListasAuxCompletas: listaDeNombresCitas = {
      listaPacientes: [],
      ListaHabitaciones: [],
      ListaMedicos: [],
    };

    //Buscamos
    const ListaPacientes = await buscarListaDePacientes();
    const ListaMedicos = await buscarListaDeMedicos();
    const ListaHabitaciones = await buscarListaDeHabitaciones();
    //Agregamos
    ListasAuxCompletas.listaPacientes = ListaPacientes;
    ListasAuxCompletas.ListaMedicos = ListaMedicos;
    ListasAuxCompletas.ListaHabitaciones = ListaHabitaciones;

    setTimeout(async () => {
      setListaNombres(ListasAuxCompletas);
      setListaCitas(LISTA_C);
    }, 500);
  };

  //Obtener nombres por id
  const obtenerListaDeNombresPorId = async () => {
    //Recorremos por id
    LISTA_C.map(async (cita, i) => {
      //Buscamos
      const paciente = await buscarCitaPacientePorId(cita.idpaciente);
      const medico = await buscarCitaMedicoPorId(cita.idmedico);
      const habitacion = await buscarCitaHabitacionPorId(cita.idhabitacion);
      //Agregamos
      LISTA_C[i].paciente = paciente;
      LISTA_C[i].medico = medico;
      LISTA_C[i].habitacion = habitacion;
    });
  };

  //Opciones para mostrar
  const OpcionesMostrar = (n: number, c: Cita[]) => {
    n = n !== -1 && c.length === 0 ? 2 : n;

    switch (n) {
      //Tabla
      case 1:
        return (
          <TablaCita
            citas={c}
            handleShow={handleShow}
            hastNuevo={hastNuevo}
            hastCita={hastCita}
            actualizarLista={actualizarLista}
          />
        );
      //Error
      case 2:
        return (
          <div className="align-items-center">
            <h2>La lista esta vacía</h2>
          </div>
        );

      default:
        return (
          <div className="align-items-center">
            <h2>Error, No se pudieron obtener los datos</h2>
          </div>
        );
    }
  };

  //Actualizamos
  React.useEffect(() => {
    buscarLista();
  }, []);

  //Escojamos opción
  const Mostrar = OpcionesMostrar(Obc, listaCitas);

  //Citas
  return (
    <>
      <div className="table-responsive-sm">
        <nav className="navbar navbar-light bg-light">
          <div className="container-fluid">
            <a className="navbar-brand">Gestión de {Titulo}</a>
            <form className="d-flex">
              {/* Buscar */}
              <input
                maxLength={25}
                className="form-control"
                type="search"
                placeholder="Buscar"
                aria-label="Search"
                onChange={(e) => buscarCitasPorN(String(e.target.value))}
              />
              {/* Agregar nuevo cita */}
              <button
                style={{ width: 400 }}
                type="button"
                className="btn btn-outline-dark"
                onClick={() => {
                  setIsNuevo(true);
                  handleShow();
                }}
              >
                Agregar Nuevo cita
              </button>
            </form>
          </div>
        </nav>
        <br />
        {/*Opción escogida */}
        {Mostrar}
      </div>

      {/* Formulario*/}
      <PageFormularioCita
        ci={cita}
        show={show}
        isNuevo={getIsNuevo}
        handleClose={handleClose}
        actualizarLista={actualizarLista}
        citas={listaCitas}
        listaNombres={listaNombres}
      />
    </>
  );
};

export default PageCitas;

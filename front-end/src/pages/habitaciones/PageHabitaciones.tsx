import { Trash3, Pencil } from "react-bootstrap-icons";
import PageCalendario from "../../components/PageCalendario";
import React, { useState } from "react";
import PageFormularioHabitacion from "./PageFormularioHabitacion";
import Habitacion from "./Habitacion";
import TablaHabitacion from "./TablaHabitacion";
import { buscarHabitaciones } from "./ApiHabitaciones";

interface PropsPas {
  Titulo: string;
}

//Opción
let Obc = 1;

//Lista
let LISTA_C: Habitacion[];

//Habitaciones
const PageHabitaciones: React.FC<PropsPas> = ({ Titulo }) => {
  //Habitacion
  const [habitacion, setHabitacion] = useState<Habitacion>({
    id: "",
    nombre: "",
    piso: 0,
    ocupado: 0,
  });
  const hastHabitacion = (p: Habitacion): void => setHabitacion(p);

  //valor por defecto arreglo vacío
  const [listaHabitaciones, setListaHabitaciones] = useState<Habitacion[]>([]);

  //Ventana flotante
  const [show, setShow] = useState<boolean>(false);
  const handleClose = (): void => setShow(false);
  const handleShow = (): void => setShow(true);

  //Editar/Crear
  const [getIsNuevo, setIsNuevo] = useState<boolean>(true);
  const hastNuevo = (): void => setIsNuevo(false);

  //Buscar habitaciones
  const buscarLista = async () => {
    //Buscamos
    const res = await buscarHabitaciones();

    //Comprobamos
    if (res === undefined || res === null || res.status > 399) {
      setListaHabitaciones([]);
      Obc = -1;
      return;
    }

    //Asignamos
    Obc = 1;
    LISTA_C = res;
    setListaHabitaciones(res);
  };
  const actualizarLista = (): Promise<void> => buscarLista();

  //Buscar habitaciones por nombre
  const buscarHabitacionesPorN = (nombre: string) => {
    // Quitamos Espacios
    nombre = nombre.replace(/ /g, "");

    //Si no esta vació
    if (nombre !== "") {
      //Lista auxiliar
      let listaAux: Habitacion[] = [];

      //Recorremos
      LISTA_C.forEach((pass) => {
        //Obtenemos las cadenas
        let cadena: string = [pass.nombre, pass.piso]
          .join("")
          .replace(/ /g, "");

        //Buscamos
        const index = cadena.indexOf(nombre);

        //Comprobamos
        if (index >= 0) {
          listaAux.push(pass);
        }
      });

      //Ponemos datos
      setListaHabitaciones(listaAux);
      return;
    }

    actualizarLista();
  };

  //Opciones para mostrar
  const OpcionesMostrar = (n: number, p: Habitacion[]) => {
    n = n !== -1 && p.length === 0 ? 2 : n;

    switch (n) {
      //Tabla
      case 1:
        return (
          <TablaHabitacion
            habitaciones={p}
            handleShow={handleShow}
            hastNuevo={hastNuevo}
            hastHabitacion={hastHabitacion}
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
  }, [location]);

  //Escojamos opción
  const Mostrar = OpcionesMostrar(Obc, listaHabitaciones);

  //Habitaciones
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
                onChange={(e) => buscarHabitacionesPorN(String(e.target.value))}
              />
              {/* Agregar nuevo habitacion */}
              <button
                style={{ width: 400 }}
                type="button"
                className="btn btn-outline-dark"
                onClick={() => {
                  setIsNuevo(true);
                  handleShow();
                }}
              >
                Agregar Nuevo habitacion
              </button>
            </form>
          </div>
        </nav>
        <br />
        {/*Opción escogida */}
        {Mostrar}
      </div>

      {/* Formulario*/}
      <PageFormularioHabitacion
        hab={habitacion}
        show={show}
        isNuevo={getIsNuevo}
        handleClose={handleClose}
        actualizarLista={actualizarLista}
      />
    </>
  );
};

export default PageHabitaciones;

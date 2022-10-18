import { Trash3, Pencil } from "react-bootstrap-icons";
import PageCalendario from "../../components/PageCalendario";
import React, { useState } from "react";
import PageFormularioPaciente from "./PageFormularioPaciente";
import Paciente from "./Paciente";
import TablaPaciente from "./TablaPaciente";
import { buscarPacientes } from "./ApiPacientes";

interface PropsPas {
  Titulo: string;
}

//Opción
let Obc = 1;

//Lista
let LISTA_C: Paciente[];

//Pacientes
const PagePacientes: React.FC<PropsPas> = ({ Titulo }) => {
  //Paciente
  const [paciente, setPaciente] = useState<Paciente>({
    id: "",
    nombre: "",
    apellido_p: "",
    apellido_m: "",
    sexo: "",
    edad: 0,
    telefono: "",
    email: "",
    direccion: "",
  });
  const hastPaciente = (p: Paciente): void => setPaciente(p);

  //valor por defecto arreglo vacío
  const [listaPacientes, setListaPacientes] = useState<Paciente[]>([]);

  //Ventana flotante
  const [show, setShow] = useState<boolean>(false);
  const handleClose = (): void => setShow(false);
  const handleShow = (): void => setShow(true);

  //Editar/Crear
  const [getIsNuevo, setIsNuevo] = useState<boolean>(true);
  const hastNuevo = (): void => setIsNuevo(false);

  //Buscar pacientes
  const buscarLista = async () => {
    //Buscamos
    const res = await buscarPacientes();

    //Comprobamos
    if (res === undefined || res === null || res.status > 399) {
      setListaPacientes([]);
      Obc = -1;
      return;
    }

    //Asignamos
    Obc = 1;
    LISTA_C = res;
    setListaPacientes(res);
  };
  const actualizarLista = (): Promise<void> => buscarLista();

  //Buscar pacientes por nombre
  const buscarPacientesPorN = (nombre: string) => {
    // Quitamos Espacios
    nombre = nombre.replace(/ /g, "");

    //Si no esta vació
    if (nombre !== "") {
      //Lista auxiliar
      let listaAux: Paciente[] = [];

      //Recorremos
      LISTA_C.forEach((pass) => {
        //Obtenemos las cadenas
        let cadena: string = [pass.nombre, pass.apellido_m, pass.apellido_p]
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
      setListaPacientes(listaAux);
      return;
    }

    actualizarLista();
  };

  //Opciones para mostrar
  const OpcionesMostrar = (n: number, p: Paciente[]) => {
    n = n !== -1 && p.length === 0 ? 2 : n;

    switch (n) {
      //Tabla
      case 1:
        return (
          <TablaPaciente
            pacientes={p}
            handleShow={handleShow}
            hastNuevo={hastNuevo}
            hastPaciente={hastPaciente}
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
  const Mostrar = OpcionesMostrar(Obc, listaPacientes);

  //Pacientes
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
                onChange={(e) => buscarPacientesPorN(String(e.target.value))}
              />
              {/* Agregar nuevo paciente */}
              <button
                style={{ width: 400 }}
                type="button"
                className="btn btn-outline-dark"
                onClick={() => {
                  setIsNuevo(true);
                  handleShow();
                }}
              >
                Agregar Nuevo paciente
              </button>
            </form>
          </div>
        </nav>
        <br />
        {/*Opción escogida */}
        {Mostrar}
      </div>

      {/* Formulario*/}
      <PageFormularioPaciente
        pa={paciente}
        show={show}
        isNuevo={getIsNuevo}
        handleClose={handleClose}
        actualizarLista={actualizarLista}
      />
    </>
  );
};

export default PagePacientes;


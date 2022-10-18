import { Trash3, Pencil } from "react-bootstrap-icons";
import PageCalendario from "../../components/PageCalendario";
import React, { useState } from "react";
import PageFormularioMedico from "./PageFormularioMedico";
import Medico from "./Medico";
import TablaMedico from "./TablaMedico";
import { buscarMedicos } from "./ApiMedico";

interface PropsPas {
  Titulo: string;
}

//Opción
let Obc = 1;

//Lista
let LISTA_C: Medico[];

//Medicos
const PageMedicos: React.FC<PropsPas> = ({ Titulo }) => {
  //Medico
  const [medico, setMedico] = useState<Medico>({
    id: "",
    nombre: "",
    apellido_p: "",
    apellido_m: "",
    telefono: "",
    email: "",
    especialidad: "",
    edad: 0,
  });
  const hastMedico = (p: Medico): void => setMedico(p);

  //valor por defecto arreglo vacío
  const [listaMedicos, setListaMedicos] = useState<Medico[]>([]);

  //Ventana flotante
  const [show, setShow] = useState<boolean>(false);
  const handleClose = (): void => setShow(false);
  const handleShow = (): void => setShow(true);

  //Editar/Crear
  const [getIsNuevo, setIsNuevo] = useState<boolean>(true);
  const hastNuevo = (): void => setIsNuevo(false);

  //Buscar medicos
  const buscarLista = async () => {
    //Buscamos
    const res = await buscarMedicos();

    //Comprobamos
    if (res === undefined || res === null || res.status > 399) {
      setListaMedicos([]);
      Obc = -1;
      return;
    }

    //Asignamos
    Obc = 1;
    LISTA_C = res;
    setListaMedicos(res);
  };
  const actualizarLista = (): Promise<void> => buscarLista();

  //Buscar medicos por nombre
  const buscarMedicosPorN = (nombre: string) => {
    // Quitamos Espacios
    nombre = nombre.replace(/ /g, "");

    //Si no esta vació
    if (nombre !== "") {
      //Lista auxiliar
      let listaAux: Medico[] = [];

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
      setListaMedicos(listaAux);
      return;
    }

    actualizarLista();
  };

  //Opciones para mostrar
  const OpcionesMostrar = (n: number, p: Medico[]) => {
    n = n !== -1 && p.length === 0 ? 2 : n;

    switch (n) {
      //Tabla
      case 1:
        return (
          <TablaMedico
            medicos={p}
            handleShow={handleShow}
            hastNuevo={hastNuevo}
            hastMedico={hastMedico}
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
  const Mostrar = OpcionesMostrar(Obc, listaMedicos);

  //Medicos
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
                onChange={(e) => buscarMedicosPorN(String(e.target.value))}
              />
              {/* Agregar nuevo medico */}
              <button
                style={{ width: 400 }}
                type="button"
                className="btn btn-outline-dark"
                onClick={() => {
                  setIsNuevo(true);
                  handleShow();
                }}
              >
                Agregar Nuevo medico
              </button>
            </form>
          </div>
        </nav>
        <br />
        {/*Opción escogida */}
        {Mostrar}
      </div>

      {/* Formulario*/}
      <PageFormularioMedico
        me={medico}
        show={show}
        isNuevo={getIsNuevo}
        handleClose={handleClose}
        actualizarLista={actualizarLista}
      />
    </>
  );
};

export default PageMedicos;

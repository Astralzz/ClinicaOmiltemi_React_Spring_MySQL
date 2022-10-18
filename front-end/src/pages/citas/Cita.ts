import Habitacion from "../habitaciones/Habitacion";
import Medico from "../medicos/Medico";
import Paciente from "../pacientes/Paciente";

//Cita
interface Cita {
  id: string;
  idmedico: string;
  medico?: Medico;
  idpaciente: string;
  paciente?: Paciente;
  idhabitacion: string;
  habitacion?: Habitacion;
  fecha: string;
  hora: string;
}

export default Cita;

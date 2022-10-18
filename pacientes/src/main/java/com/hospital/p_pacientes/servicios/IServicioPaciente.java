package com.hospital.p_pacientes.servicios;

import com.hospital.p_pacientes.entidades.Paciente;

import java.util.List;
public interface IServicioPaciente {

    //Lista completa
    List<Paciente> getAll();

    //Devolver por id
    Paciente getById(Long id);

    //Remover por id
    void removeById(Long id);

    //Guardar
    void savePaciente(Paciente paciente);

}

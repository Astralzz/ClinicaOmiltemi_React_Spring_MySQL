package com.hospital.p_citas.pacientes.servicios;

import com.hospital.p_citas.pacientes.entidades.Paciente;

import java.util.List;

public interface IServicioPaciente {

    //Devolver por id
    Paciente getById(Long id);

    //Lista completa
    List<Paciente> getAll();


}

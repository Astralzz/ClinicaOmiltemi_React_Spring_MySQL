package com.hospital.p_citas.medicos.servicios;

import com.hospital.p_citas.medicos.entidades.Medico;

import java.util.List;

public interface IServicioMedico {

    //Devolver por id
    Medico getById(Long id);

    //Lista completa
    List<Medico> getAll();


}

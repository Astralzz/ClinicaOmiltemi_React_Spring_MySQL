package com.hospital.p_medicos.servicios;

import com.hospital.p_medicos.entidades.Medico;

import java.util.List;
public interface IServicioMedico {

    //Lista completa
    List<Medico> getAll();

    //Devolver por id
    Medico getById(Long id);

    //Remover por id
    void removeById(Long id);

    //Guardar
    void saveMedico(Medico medico);

}

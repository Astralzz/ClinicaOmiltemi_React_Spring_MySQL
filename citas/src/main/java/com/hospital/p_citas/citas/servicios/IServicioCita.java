package com.hospital.p_citas.citas.servicios;

import com.hospital.p_citas.citas.entidades.Cita;

import java.util.List;
public interface IServicioCita {

    //Lista completa
    List<Cita> getAll();

    //Devolver por id
    Cita getById(String id);

    //Remover por id
    void removeById(String id);

    //Guardar
    void saveCita(Cita cita);

}

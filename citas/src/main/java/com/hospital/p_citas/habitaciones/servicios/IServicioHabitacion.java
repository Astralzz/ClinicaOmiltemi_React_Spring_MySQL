package com.hospital.p_citas.habitaciones.servicios;

import com.hospital.p_citas.habitaciones.entidades.Habitacion;

import java.util.List;

public interface IServicioHabitacion {

    //Devolver por id
    Habitacion getById(Long id);

    //Lista completa
    List<Habitacion> getAll();


}

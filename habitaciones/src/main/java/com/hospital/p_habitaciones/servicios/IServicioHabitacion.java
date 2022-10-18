package com.hospital.p_habitaciones.servicios;

import com.hospital.p_habitaciones.entidades.Habitacion;

import java.util.List;
public interface IServicioHabitacion {

    //Lista completa
    List<Habitacion> getAll();

    //Devolver por id
    Habitacion getById(Long id);

    //Remover por id
    void removeById(Long id);

    //Guardar
    void saveHabitacion(Habitacion habitacion);

}

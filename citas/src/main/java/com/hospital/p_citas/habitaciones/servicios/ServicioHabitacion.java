package com.hospital.p_citas.habitaciones.servicios;

import com.hospital.p_citas.habitaciones.entidades.Habitacion;
import com.hospital.p_citas.habitaciones.repositorios.RepositorioHabitacion;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ServicioHabitacion implements IServicioHabitacion {

    @Autowired
    private RepositorioHabitacion repositorio;

    @Override
    public Habitacion getById(Long id) {
        return (Habitacion) repositorio.findById(id).get();
    }

    @Override
    public List<Habitacion> getAll() {
        return (List<Habitacion>) repositorio.findAll();
    }
}

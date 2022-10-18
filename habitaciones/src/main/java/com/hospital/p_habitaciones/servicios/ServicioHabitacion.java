package com.hospital.p_habitaciones.servicios;

import com.hospital.p_habitaciones.repositorios.RepositorioHabitacion;
import com.hospital.p_habitaciones.entidades.Habitacion;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import java.util.List;

@Service
public class ServicioHabitacion implements IServicioHabitacion {

    @PersistenceContext
    private EntityManager entityManager;

    @Autowired
    private RepositorioHabitacion repositorio;

    @Override
    public List<Habitacion> getAll() {
        return (List<Habitacion>) repositorio.findAll();
    }

    @Override
    public Habitacion getById(Long id) {
        return (Habitacion) repositorio.findById(id).get();
    }

    @Override
    public void removeById(Long id) {
        repositorio.deleteById(id);
    }

    @Override
    public void saveHabitacion(Habitacion habitacion) {
        repositorio.save(habitacion);
    }

}

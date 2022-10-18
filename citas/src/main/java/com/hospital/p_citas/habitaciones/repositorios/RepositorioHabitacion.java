package com.hospital.p_citas.habitaciones.repositorios;
import com.hospital.p_citas.habitaciones.entidades.Habitacion;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface RepositorioHabitacion extends CrudRepository<Habitacion, Long> {
}

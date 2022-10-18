package com.hospital.p_citas.citas.repositorios;
import com.hospital.p_citas.citas.entidades.Cita;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface RepositorioCitas extends CrudRepository<Cita, String> {
}

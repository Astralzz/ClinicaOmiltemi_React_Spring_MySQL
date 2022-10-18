package com.hospital.p_medicos.repositorios;
import com.hospital.p_medicos.entidades.Medico;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface RepositorioMedico extends CrudRepository<Medico, Long> {
}

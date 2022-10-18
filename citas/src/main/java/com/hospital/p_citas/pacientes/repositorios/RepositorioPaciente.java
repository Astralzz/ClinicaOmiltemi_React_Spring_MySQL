package com.hospital.p_citas.pacientes.repositorios;
import com.hospital.p_citas.pacientes.entidades.Paciente;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface RepositorioPaciente extends CrudRepository<Paciente, Long> {
}

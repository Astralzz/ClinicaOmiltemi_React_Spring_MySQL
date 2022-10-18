package com.hospital.p_pacientes.repositorios;
import com.hospital.p_pacientes.entidades.Paciente;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface RepositorioPaciente extends CrudRepository<Paciente, Long> {
}

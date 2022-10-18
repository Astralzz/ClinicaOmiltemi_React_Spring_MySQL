package com.hospital.p_pacientes.servicios;

import com.hospital.p_pacientes.repositorios.RepositorioPaciente;
import com.hospital.p_pacientes.entidades.Paciente;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import java.util.List;

@Service
public class ServicioPaciente implements IServicioPaciente {

    @PersistenceContext
    private EntityManager entityManager;

    @Autowired
    private RepositorioPaciente repositorio;

    @Override
    public List<Paciente> getAll() {
        return (List<Paciente>) repositorio.findAll();
    }

    @Override
    public Paciente getById(Long id) {
        return (Paciente) repositorio.findById(id).get();
    }

    @Override
    public void removeById(Long id) {
        repositorio.deleteById(id);
    }

    @Override
    public void savePaciente(Paciente paciente) {
        repositorio.save(paciente);
    }

}

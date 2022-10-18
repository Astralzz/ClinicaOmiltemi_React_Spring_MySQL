package com.hospital.p_citas.pacientes.servicios;

import com.hospital.p_citas.pacientes.entidades.Paciente;
import com.hospital.p_citas.pacientes.repositorios.RepositorioPaciente;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ServicioPaciente implements IServicioPaciente {

    @Autowired
    private RepositorioPaciente repositorio;

    @Override
    public Paciente getById(Long id) {
        return (Paciente) repositorio.findById(id).get();
    }

    @Override
    public List<Paciente> getAll() {
        return (List<Paciente>) repositorio.findAll();
    }
}

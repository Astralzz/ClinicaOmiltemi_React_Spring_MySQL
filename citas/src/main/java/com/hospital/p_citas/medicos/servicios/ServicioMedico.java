package com.hospital.p_citas.medicos.servicios;

import com.hospital.p_citas.medicos.entidades.Medico;
import com.hospital.p_citas.medicos.repositorios.RepositorioMedico;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ServicioMedico implements IServicioMedico {

    @Autowired
    private RepositorioMedico repositorio;

    @Override
    public Medico getById(Long id) {
        return (Medico) repositorio.findById(id).get();
    }

    @Override
    public List<Medico> getAll() {
        return  (List<Medico>) repositorio.findAll();
    }
}

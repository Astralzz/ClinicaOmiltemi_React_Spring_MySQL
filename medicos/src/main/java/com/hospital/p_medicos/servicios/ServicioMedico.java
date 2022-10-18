package com.hospital.p_medicos.servicios;

import com.hospital.p_medicos.repositorios.RepositorioMedico;
import com.hospital.p_medicos.entidades.Medico;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import java.util.List;

@Service
public class ServicioMedico implements IServicioMedico {

    @PersistenceContext
    private EntityManager entityManager;

    @Autowired
    private RepositorioMedico repositorio;

    @Override
    public List<Medico> getAll() {
        return (List<Medico>) repositorio.findAll();
    }

    @Override
    public Medico getById(Long id) {
        return (Medico) repositorio.findById(id).get();
    }

    @Override
    public void removeById(Long id) {
        repositorio.deleteById(id);
    }

    @Override
    public void saveMedico(Medico medico) {
        repositorio.save(medico);
    }

}

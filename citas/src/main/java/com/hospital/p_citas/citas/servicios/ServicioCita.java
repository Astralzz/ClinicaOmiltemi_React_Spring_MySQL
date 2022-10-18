package com.hospital.p_citas.citas.servicios;

import com.hospital.p_citas.citas.entidades.Cita;
import com.hospital.p_citas.citas.repositorios.RepositorioCitas;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import java.util.List;

@Service
public class ServicioCita implements IServicioCita {

    @PersistenceContext
    private EntityManager entityManager;

    @Autowired
    private RepositorioCitas repositorio;

    @Override
    public List<Cita> getAll() {
        return (List<Cita>) repositorio.findAll();
    }

    @Override
    public Cita getById(String id) {
        return (Cita) repositorio.findById(id).get();
    }

    @Override
    public void removeById(String id) {
        repositorio.deleteById(id);
    }

    @Override
    public void saveCita(Cita cita) {
        repositorio.save(cita);
    }

}

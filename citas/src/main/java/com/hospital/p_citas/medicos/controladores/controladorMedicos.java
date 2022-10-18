package com.hospital.p_citas.medicos.controladores;


import com.hospital.p_citas.medicos.entidades.Medico;
import com.hospital.p_citas.medicos.servicios.IServicioMedico;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class controladorMedicos {

    @Autowired
    private IServicioMedico servicio;

    //Optener habitacion por id
    @GetMapping("/api/cita/medico/{id}")//Ruta
    public Medico devolverPorId(@PathVariable String id) {

        //Convertimos a Long
        Long NewId = Long.parseLong(id);

        //Retornamos el servicio
        return servicio.getById(NewId);

    }

    //Optener lista
    @GetMapping("/api/citas/medicos")//Ruta
    public List<Medico> devolverListaMedicoss() {

        //Retornamos el servicio
        return servicio.getAll();

    }


}

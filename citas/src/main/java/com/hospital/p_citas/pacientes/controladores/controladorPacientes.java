package com.hospital.p_citas.pacientes.controladores;


import com.hospital.p_citas.pacientes.entidades.Paciente;
import com.hospital.p_citas.pacientes.servicios.IServicioPaciente;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class controladorPacientes {

    @Autowired
    private IServicioPaciente servicio;

    //Optener habitacion por id
    @GetMapping("/api/cita/paciente/{id}")//Ruta
    public Paciente devolverPorId(@PathVariable String id) {

        //Convertimos a Long
        Long NewId = Long.parseLong(id);

        //Retornamos el servicio
        return servicio.getById(NewId);

    }

    //Optener lista
    @GetMapping("/api/citas/pacientes")//Ruta
    public List<Paciente> devolverListaPacientes() {

        //Retornamos el servicio
        return servicio.getAll();

    }


}

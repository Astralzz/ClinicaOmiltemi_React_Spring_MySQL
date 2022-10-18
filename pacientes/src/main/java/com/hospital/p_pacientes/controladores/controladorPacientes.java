package com.hospital.p_pacientes.controladores;

import com.hospital.p_pacientes.entidades.Paciente;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import com.hospital.p_pacientes.servicios.IServicioPaciente;

import java.util.List;

@RestController
public class controladorPacientes {

    @Autowired
    private IServicioPaciente servicio;

    //Optener lista de trabajadores
    @GetMapping("/api/pacientes")//Ruta
    public List<Paciente> devolverLista() {

        //Retornamos el servicio
        return servicio.getAll();

    }

    //Optener paciente por id
    @GetMapping("/api/paciente/{id}")//Ruta
    public Paciente devolverPorId(@PathVariable String id) {

        //Convertimos a Long
        Long NewId = Long.parseLong(id);

        //Retornamos el servicio
        return servicio.getById(NewId);

    }

    @DeleteMapping("/api/paciente/eliminar/{id}")//Ruta
    public void removerPorId(@PathVariable String id) {

        //Convertimos a Long
        Long NewId = Long.parseLong(id);

        //Eliminamos por el servicio
        servicio.removeById(NewId);

    }

    @PostMapping("/api/paciente/guardar")//Ruta
    public void guardarPaciente(@RequestBody Paciente paciente) {

        //Guardamos por el servicio
        servicio.savePaciente(paciente);

    }

}

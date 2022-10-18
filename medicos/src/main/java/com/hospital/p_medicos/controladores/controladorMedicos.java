package com.hospital.p_medicos.controladores;

import com.hospital.p_medicos.entidades.Medico;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import com.hospital.p_medicos.servicios.IServicioMedico;

import java.util.List;

@RestController
public class controladorMedicos {

    @Autowired
    private IServicioMedico servicio;

    //Optener lista de medicos
    @GetMapping("/api/medicos")//Ruta
    public List<Medico> devolverLista() {

        //Retornamos el servicio
        return servicio.getAll();

    }

    //Optener paciente por id
    @GetMapping("/api/medico/{id}")//Ruta
    public Medico devolverPorId(@PathVariable String id) {

        //Convertimos a Long
        Long NewId = Long.parseLong(id);

        //Retornamos el servicio
        return servicio.getById(NewId);

    }

    @DeleteMapping("/api/medico/eliminar/{id}")//Ruta
    public void removerPorId(@PathVariable String id) {

        //Convertimos a Long
        Long NewId = Long.parseLong(id);

        //Eliminamos por el servicio
        servicio.removeById(NewId);

    }

    @PostMapping("/api/medico/guardar")//Ruta
    public void guardarMedico(@RequestBody Medico medico) {

        //Guardamos por el servicio
        servicio.saveMedico(medico);

    }

}

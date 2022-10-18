package com.hospital.p_citas.citas.controladores;

import com.hospital.p_citas.citas.entidades.Cita;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import com.hospital.p_citas.citas.servicios.IServicioCita;

import java.util.List;

import static com.hospital.p_citas.citas.funciones.Funciones.generarId;

@RestController
public class controladorCita {

    @Autowired
    private IServicioCita servicio;

    //Optener lista de citas
    @GetMapping("/api/citas")//Ruta
    public List<Cita> devolverLista() {

        //Retornamos el servicio
        return servicio.getAll();

    }

    //Optener cita por id
    @GetMapping("/api/cita/{id}")//Ruta
    public Cita devolverPorId(@PathVariable String id) {

        //Retornamos el servicio
        return servicio.getById(id);

    }

    @DeleteMapping("/api/cita/eliminar/{id}")//Ruta
    public void removerPorId(@PathVariable String id) {

        //Eliminamos por el servicio
        servicio.removeById(id);

    }

    @PostMapping("/api/cita/guardar")//Ruta
    public void guardarCita(@RequestBody Cita cita) {

        //Si no ahi id
        if (cita.getId().length() != 10) {
            //Creamos un id
            String id = generarId(10);
            cita.setId(id);
            //Guardamos por el servicio
            servicio.saveCita(cita);
            return;
        }

        //Guardamos por el servicio
        servicio.saveCita(cita);

    }

}

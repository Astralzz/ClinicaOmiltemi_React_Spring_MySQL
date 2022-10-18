package com.hospital.p_habitaciones.controladores;

import com.hospital.p_habitaciones.entidades.Habitacion;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import com.hospital.p_habitaciones.servicios.IServicioHabitacion;

import java.util.List;

@RestController
public class controladorHabitaciones {

    @Autowired
    private IServicioHabitacion servicio;

    //Optener lista de habitaciones
    @GetMapping("/api/habitaciones")//Ruta
    public List<Habitacion> devolverLista() {

        //Retornamos el servicio
        return servicio.getAll();

    }

    //Optener habitacion por id
    @GetMapping("/api/habitacion/{id}")//Ruta
    public Habitacion devolverPorId(@PathVariable String id) {

        //Convertimos a Long
        Long NewId = Long.parseLong(id);

        //Retornamos el servicio
        return servicio.getById(NewId);

    }

    @DeleteMapping("/api/habitacion/eliminar/{id}")//Ruta
    public void removerPorId(@PathVariable String id) {

        //Convertimos a Long
        Long NewId = Long.parseLong(id);

        //Eliminamos por el servicio
        servicio.removeById(NewId);

    }

    @PostMapping("/api/habitacion/guardar")//Ruta
    public void guardarHabitacion(@RequestBody Habitacion habitacion) {

        //Guardamos por el servicio
        servicio.saveHabitacion(habitacion);

    }

}

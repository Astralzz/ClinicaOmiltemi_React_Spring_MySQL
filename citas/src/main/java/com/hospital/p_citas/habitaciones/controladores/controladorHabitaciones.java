package com.hospital.p_citas.habitaciones.controladores;


import com.hospital.p_citas.habitaciones.entidades.Habitacion;
import com.hospital.p_citas.habitaciones.servicios.IServicioHabitacion;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class controladorHabitaciones {

    @Autowired
    private IServicioHabitacion servicio;

    //Optener habitacion por id
    @GetMapping("/api/cita/habitacion/{id}")//Ruta
    public Habitacion devolverPorId(@PathVariable String id) {

        //Convertimos a Long
        Long NewId = Long.parseLong(id);

        //Retornamos el servicio
        return servicio.getById(NewId);

    }


    //Optener lista
    @GetMapping("/api/citas/habitaciones")//Ruta
    public List<Habitacion> devolverListaHabitaciones() {

        //Retornamos el servicio
        return servicio.getAll();

    }


}

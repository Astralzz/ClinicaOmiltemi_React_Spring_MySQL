package com.hospital.p_citas.pacientes.entidades;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import javax.persistence.*;

@Entity
@Getter
@Setter
@ToString
@Table(name = "pacientes")
public class Paciente {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String nombre;

    private String apellido_p;

    private String apellido_m;

    private String sexo;

    private int edad;

    private String telefono;

    private String email;

    private String direccion;

}
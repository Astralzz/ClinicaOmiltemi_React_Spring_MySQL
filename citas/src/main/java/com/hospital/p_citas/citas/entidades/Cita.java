package com.hospital.p_citas.citas.entidades;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import javax.persistence.*;

@Entity
@Getter
@Setter
@ToString
@Table(name = "citas")
public class Cita {

    @Id
    private String id;

    private long idmedico;

    private long idpaciente;

    private long idhabitacion;

    private String fecha;

    private String hora;

}

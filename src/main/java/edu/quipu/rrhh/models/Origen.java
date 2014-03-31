package edu.quipu.rrhh.models;

import java.io.Serializable;

public class Origen implements Serializable {

    private String origenCodigo;
    private String origenDescripcion;

    public String getOrigenCodigo() {
        return origenCodigo;
    }

    public void setOrigenCodigo(String origenCodigo) {
        this.origenCodigo = origenCodigo;
    }

    public String getOrigenDescripcion() {
        return origenDescripcion;
    }

    public void setOrigenDescripcion(String origenDescripcion) {
        this.origenDescripcion = origenDescripcion;
    }
}

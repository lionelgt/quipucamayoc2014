package edu.quipu.rrhh.models;

import java.io.Serializable;
import java.util.Date;

public class PlanillaCAS implements Serializable {

    private static final long serialVersionUID = 2338227269483582956L;
    private Integer anio;
    private Integer mes;
    private String numero;
    private Date fecha;
    private Double monto;
    private String estado;
    private String codigoOrigen;
    private Integer codigoDependencia;
    private String origenDescripcion;
    private String unidadDescripcion;
    private String colorEstado;

    public Integer getAnio() {
        return anio;
    }

    public void setAnio(Integer anio) {
        this.anio = anio;
    }

    public Integer getMes() {
        return mes;
    }

    public void setMes(Integer mes) {
        this.mes = mes;
    }

    public String getNumero() {
        return numero;
    }

    public void setNumero(String numero) {
        this.numero = numero;
    }

    public Date getFecha() {
        return fecha;
    }

    public void setFecha(Date fecha) {
        this.fecha = fecha;
    }

    public Double getMonto() {
        return monto;
    }

    public void setMonto(Double monto) {
        this.monto = monto;
    }

    public String getEstado() {
        return estado;
    }

    public void setEstado(String estado) {
        this.estado = estado;
    }

    public String getCodigoOrigen() {
        return codigoOrigen;
    }

    public void setCodigoOrigen(String codigoOrigen) {
        this.codigoOrigen = codigoOrigen;
    }

    public Integer getCodigoDependencia() {
        return codigoDependencia;
    }

    public void setCodigoDependencia(Integer codigoDependencia) {
        this.codigoDependencia = codigoDependencia;
    }

    public String getOrigenDescripcion() {
        return origenDescripcion;
    }

    public void setOrigenDescripcion(String origenDescripcion) {
        this.origenDescripcion = origenDescripcion;
    }

    public String getUnidadDescripcion() {
        return unidadDescripcion;
    }

    public void setUnidadDescripcion(String unidadDescripcion) {
        this.unidadDescripcion = unidadDescripcion;
    }

    public String getColorEstado() {
        return colorEstado;
    }

    public void setColorEstado(String colorEstado) {
        this.colorEstado = colorEstado;
    }

}

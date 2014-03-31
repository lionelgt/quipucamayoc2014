package edu.quipu.rrhh.models;

public class MotivoTrabajador {
    private String idMotivoTraba;
    private String resolucion;
    private String codTraba;
    private int serviEstado;
    private String nroMotivo;
    private String fechaIni;
    private String fechaFin;
    private String descrip;

    public String getIdMotivoTraba() {
        return idMotivoTraba;
    }

    public void setIdMotivoTraba(String idMotivoTraba) {
        this.idMotivoTraba = idMotivoTraba;
    }

    public String getDescrip() {
        return descrip;
    }

    public void setDescrip(String descrip) {
        this.descrip = descrip;
    }

    public String getFechaIni() {
        return fechaIni;
    }

    public void setFechaIni(String fechaIni) {
        this.fechaIni = fechaIni;
    }

    public int getServiEstado() {
        return serviEstado;
    }

    public void setServiEstado(int serviEstado) {
        this.serviEstado = serviEstado;
    }

    public String getCodTraba() {
        return codTraba;
    }

    public void setCodTraba(String codTraba) {
        this.codTraba = codTraba;
    }

    public String getResolucion() {
        return resolucion;
    }

    public void setResolucion(String resolucion) {
        this.resolucion = resolucion;
    }

    public String getNroMotivo() {
        return nroMotivo;
    }

    public void setNroMotivo(String nroMotivo) {
        this.nroMotivo = nroMotivo;
    }

    public String getFechaFin() {
        return fechaFin;
    }

    public void setFechaFin(String fechaFin) {
        this.fechaFin = fechaFin;
    }
}

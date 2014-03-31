package edu.quipu.rrhh.models;

import java.util.List;

public class Unidad {

    private Integer udId;
    private String udCod;
    private String dsc;
    private Integer nivel;
    List<Unidad> unidades;


    public Integer getUdId() {
        return udId;
    }

    public List<Unidad> getUnidades() {
        return unidades;
    }

    public void setUnidades(List<Unidad> unidades) {
        this.unidades = unidades;
    }

    public void setUdId(Integer udId) {
        this.udId = udId;
    }

    public String getUdCod() {
        return udCod;
    }

    public void setUdCod(String udCod) {
        this.udCod = udCod;
    }

    public String getDsc() {
        return dsc;
    }

    public void setDsc(String dsc) {
        this.dsc = dsc;
    }

    public Integer getNivel() {
        return nivel;
    }

    public void setNivel(Integer nivel) {
        this.nivel = nivel;
    }
}

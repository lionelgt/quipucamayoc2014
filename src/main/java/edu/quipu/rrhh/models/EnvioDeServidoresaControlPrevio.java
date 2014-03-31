package edu.quipu.rrhh.models;

/**
 * Created with IntelliJ IDEA.
 * User: GEINNER
 * Date: 21/08/13
 * Time: 11:27 AM
 * To change this template use File | Settings | File Templates.
 */
public class EnvioDeServidoresaControlPrevio {
    private char plaest;
    private Integer udid;
    private Integer anio;
    private Integer mes;
    private String[] rucs;
    private String[] numerodeplanilla;
    private String[] planillacorrelativo;
    private String origen;
    private String planilla;

    public char getPlaest() {
        return plaest;
    }

    public void setPlaest(char plaest) {
        this.plaest = plaest;
    }

    public Integer getUdid() {
        return udid;
    }

    public void setUdid(Integer udid) {
        this.udid = udid;
    }

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

    public String[] getRucs() {
        return rucs;
    }

    public void setRucs(String[] rucs) {
        this.rucs = rucs;
    }

    public String[] getNumerodeplanilla() {
        return numerodeplanilla;
    }

    public void setNumerodeplanilla(String[] numerodeplanilla) {
        this.numerodeplanilla = numerodeplanilla;
    }

    public String[] getPlanillacorrelativo() {
        return planillacorrelativo;
    }

    public void setPlanillacorrelativo(String[] planillacorrelativo) {
        this.planillacorrelativo = planillacorrelativo;
    }

    public String getOrigen() {
        return origen;
    }

    public void setOrigen(String origen) {
        this.origen = origen;
    }

    public String getPlanilla() {
        return planilla;
    }

    public void setPlanilla(String planilla) {
        this.planilla = planilla;
    }
}

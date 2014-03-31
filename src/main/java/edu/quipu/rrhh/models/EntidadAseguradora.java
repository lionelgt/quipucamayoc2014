package edu.quipu.rrhh.models;

public class EntidadAseguradora {
    Integer cod;
    /**
     * Regimen Pensionario
     */
    Integer rpe;
    String dsc;

    public Integer getCod() {
        return cod;
    }

    public void setCod(Integer cod) {
        this.cod = cod;
    }

    public Integer getRpe() {
        return rpe;
    }

    public void setRpe(Integer rpe) {
        this.rpe = rpe;
    }

    public String getDsc() {
        return dsc;
    }

    public void setDsc(String dsc) {
        this.dsc = dsc;
    }
}


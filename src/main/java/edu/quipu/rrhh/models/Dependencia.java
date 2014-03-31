package edu.quipu.rrhh.models;

public class Dependencia {
    private int IdDependencia;
    private String abreviatura;
    private String descriDepen;
    private int tr;

    public int getIdDependencia() {
        return IdDependencia;
    }

    public void setIdDependencia(int idDependencia) {
        IdDependencia = idDependencia;
    }

    public String getAbreviatura() {
        return abreviatura;
    }

    public void setAbreviatura(String abreviatura) {
        this.abreviatura = abreviatura;
    }

    public String getDescriDepen() {
        return descriDepen;
    }

    public void setDescriDepen(String descriDepen) {
        this.descriDepen = descriDepen;
    }

    public int getTr() {
        return tr;
    }

    public void setTr(int tr) {
        this.tr = tr;
    }
}

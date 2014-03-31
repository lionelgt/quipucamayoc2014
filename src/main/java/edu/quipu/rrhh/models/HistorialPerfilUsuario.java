package edu.quipu.rrhh.models;

import java.util.Date;

public class HistorialPerfilUsuario {

    private String dni;
    private  Integer moduleCode;
    private Integer dependencyId;
    private Character state;
    private Integer historyId;
    private Date dateChange;
    private Integer profileCode;


    public String getDni() {
        return dni;
    }

    public void setDni(String dni) {
        this.dni = dni;
    }

    public Integer getModuleCode() {
        return moduleCode;
    }

    public void setModuleCode(Integer moduleCode) {
        this.moduleCode = moduleCode;
    }

    public Integer getDependencyId() {
        return dependencyId;
    }

    public void setDependencyId(Integer dependencyId) {
        this.dependencyId = dependencyId;
    }

    public Character getState() {
        return state;
    }

    public void setState(Character state) {
        this.state = state;
    }

    public Integer getHistoryId() {
        return historyId;
    }

    public void setHistoryId(Integer historyId) {
        this.historyId = historyId;
    }

    public Date getDateChange() {
        return dateChange;
    }

    public void setDateChange(Date dateChange) {
        this.dateChange = dateChange;
    }

    public Integer getProfileCode() {
        return profileCode;
    }

    public void setProfileCode(Integer profileCode) {
        this.profileCode = profileCode;
    }
}

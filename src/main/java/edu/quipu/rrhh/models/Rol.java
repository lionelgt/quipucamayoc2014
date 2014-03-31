package edu.quipu.rrhh.models;

public class Rol {

    private Integer id;
    private String description;
    private Boolean active;

    public Rol(){

    }

    public Rol(int id, String description) {
        this.id = id;
        this.description = description;

    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public Boolean getActive() {
        return active;
    }

    public void setActive(Boolean active) {
        this.active = active;
    }
}

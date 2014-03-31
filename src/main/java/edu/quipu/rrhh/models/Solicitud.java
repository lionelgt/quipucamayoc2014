package edu.quipu.rrhh.models;

public class Solicitud {
    private String dni;
    private String nombre;
    private String apellidos;
    private String email;
    private String dependencia;
    private Integer dependenciaId;
    private String modulo;
    private String tipodeServidor;
    private String estado;
    private String categoria;
    private String estadoenplanilla;
    private Integer estadoPerfil;

    public String getDni() {
        return dni;
    }

    public void setDni(String dni) {
        this.dni = dni;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public String getApellidos() {
        return apellidos;
    }

    public void setApellidos(String apellidos) {
        this.apellidos = apellidos;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getDependencia() {
        return dependencia;
    }

    public void setDependencia(String dependencia) {
        this.dependencia = dependencia;
    }

    public String getModulo() {
        return modulo;
    }

    public void setModulo(String modulo) {
        this.modulo = modulo;
    }

    public String getTipodeServidor() {
        return tipodeServidor;
    }

    public void setTipodeServidor(String tipodeServidor) {
        this.tipodeServidor = tipodeServidor;
    }

    public String getEstado() {
        return estado;
    }

    public void setEstado(String estado) {
        this.estado = estado;
    }

    public String getCategoria() {
        return categoria;
    }

    public void setCategoria(String categoria) {
        this.categoria = categoria;
    }

    public String getEstadoenplanilla() {
        return estadoenplanilla;
    }

    public void setEstadoenplanilla(String estadoenplanilla) {
        this.estadoenplanilla = estadoenplanilla;
    }


    public Integer getDependenciaId() {
        return dependenciaId;
    }

    public void setDependenciaId(Integer dependenciaId) {
        this.dependenciaId = dependenciaId;
    }

    public Integer getEstadoPerfil() {
        return estadoPerfil;
    }

    public void setEstadoPerfil(Integer estadoPerfil) {
        this.estadoPerfil = estadoPerfil;
    }
}

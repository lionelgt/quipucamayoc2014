package edu.quipu.rrhh.models;

import java.util.Date;

/**
 * El contrato es tomado como una adenda numero null
 */
public class AdendaCAS {

    PlazaCAS plazaCAS;
    CargoCAS cargoCAS;
    Servidor servidor;

    Integer id;
    String numCont;
    Integer numAden;
    Date ini;
    Date fin;
    String estado;
    Integer horas;
    String tipo;
    Integer monto;
    Integer udId;

    //json from frontend
    String idServidor;
    Integer idPlaza;
    Integer idCargo;

    public AdendaCAS() {
        this.plazaCAS = new PlazaCAS();
        this.cargoCAS = new CargoCAS();
        this.servidor = new Servidor();
    }

    public PlazaCAS getPlazaCAS() {
        return plazaCAS;
    }

    public void setPlazaCAS(PlazaCAS plazaCAS) {
        this.plazaCAS = plazaCAS;
    }

    public CargoCAS getCargoCAS() {
        return cargoCAS;
    }

    public void setCargoCAS(CargoCAS cargoCAS) {
        this.cargoCAS = cargoCAS;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getNumCont() {
        return numCont;
    }

    public void setNumCont(String numCont) {
        this.numCont = numCont;
    }

    public Integer getNumAden() {
        return numAden;
    }

    public void setNumAden(Integer numAden) {
        this.numAden = numAden;
    }

    public Date getIni() {
        return ini;
    }

    public void setIni(Date ini) {
        this.ini = ini;
    }

    public Date getFin() {
        return fin;
    }

    public void setFin(Date fin) {
        this.fin = fin;
    }

    public String getEstado() {
        return estado;
    }

    public void setEstado(String estado) {
        this.estado = estado;
    }

    public Integer getHoras() {
        return horas;
    }

    public void setHoras(Integer horas) {
        this.horas = horas;
    }

    public String getTipo() {
        return tipo;
    }

    public void setTipo(String tipo) {
        this.tipo = tipo;
    }

    public Integer getMonto() {
        return monto;
    }

    public void setMonto(Integer monto) {
        this.monto = monto;
    }

    public Servidor getServidor() {
        return servidor;
    }

    public void setServidor(Servidor servidor) {
        this.servidor = servidor;
    }

    public Integer getUdId() {
        return udId;
    }

    public void setUdId(Integer udId) {
        this.udId = udId;
    }

    public String getIdServidor() {
        return idServidor;
    }

    public void setIdServidor(String idServidor) {
        this.idServidor = idServidor;
    }

    public Integer getIdPlaza() {
        return idPlaza;
    }

    public void setIdPlaza(Integer idPlaza) {
        this.idPlaza = idPlaza;
    }

    public Integer getIdCargo() {
        return idCargo;
    }

    public void setIdCargo(Integer idCargo) {
        this.idCargo = idCargo;
    }
}


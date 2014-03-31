package edu.quipu.rrhh.models;

/**
 * Created with IntelliJ IDEA.
 * User: GEINNER
 * Date: 14/11/13
 * Time: 03:42 PM
 * To change this template use File | Settings | File Templates.
 */
public class TiempoServicio {

    private String codigo;
    private String desc_ser_estado;
    private Integer id_tipo_servicio;
    private String desc_tipo_servicio;
    private String tipo_tiempo_servicio;
    private Integer id_tiempo_servicio ;
    private String fecha;
    private String id_resol;
    private Integer anio;
    private Integer mes;
    private Integer dia;

    public String getCodigo() {
        return codigo;
    }

    public void setCodigo(String codigo) {
        this.codigo = codigo;
    }

    public String getDesc_ser_estado() {
        return desc_ser_estado;
    }

    public void setDesc_ser_estado(String desc_ser_estado) {
        this.desc_ser_estado = desc_ser_estado;
    }

    public Integer getId_tipo_servicio() {
        return id_tipo_servicio;
    }

    public void setId_tipo_servicio(Integer id_tipo_servicio) {
        this.id_tipo_servicio = id_tipo_servicio;
    }

    public String getDesc_tipo_servicio() {
        return desc_tipo_servicio;
    }

    public void setDesc_tipo_servicio(String desc_tipo_servicio) {
        this.desc_tipo_servicio = desc_tipo_servicio;
    }

    public String getTipo_tiempo_servicio() {
        return tipo_tiempo_servicio;
    }

    public void setTipo_tiempo_servicio(String tipo_tiempo_servicio) {
        this.tipo_tiempo_servicio = tipo_tiempo_servicio;
    }

    public Integer getId_tiempo_servicio() {
        return id_tiempo_servicio;
    }

    public void setId_tiempo_servicio(Integer id_tiempo_servicio) {
        this.id_tiempo_servicio = id_tiempo_servicio;
    }

    public String getFecha() {
        return fecha;
    }

    public void setFecha(String fecha) {
        this.fecha = fecha;
    }

    public String getId_resol() {
        return id_resol;
    }

    public void setId_resol(String id_resol) {
        this.id_resol = id_resol;
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

    public Integer getDia() {
        return dia;
    }

    public void setDia(Integer dia) {
        this.dia = dia;
    }
}

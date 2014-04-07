package edu.quipu.rrhh.models;


public class Asistencia {

    //para ADMINISTRATIVO
    private String codigo_serv;
    private String codigo_hor;
    private Integer numero_hor;
    private String[] numero_dia;
    private String[] ingreso_dia;

    private int ingreso;
    private int salida;
    private int dia;

    private String[] salida_dia;
    private String descripcion_hor;
    private Integer tipo_ser;
    private Integer tolerancia;
    private String clase_hor;
    private String total_horas_sem;
    private String lactancia;
    private String tipo_hor;
    private String codigo_doc;
    private String descripcion_doc;
    private String fecha_ini_actual;
    private String fecha_fin_actual;

    public String getFecha_ini_actual() {
        return fecha_ini_actual;
    }

    public void setFecha_ini_actual(String fecha_ini_actual) {
        this.fecha_ini_actual = fecha_ini_actual;
    }

    public String getFecha_fin_actual() {
        return fecha_fin_actual;
    }

    public void setFecha_fin_actual(String fecha_fin_actual) {
        this.fecha_fin_actual = fecha_fin_actual;
    }

    public String getCodigo_serv() {
        return codigo_serv;
    }

    public void setCodigo_serv(String codigo_serv) {
        this.codigo_serv = codigo_serv;
    }

    public String getCodigo_doc() {
        return codigo_doc;
    }

    public void setCodigo_doc(String codigo_doc) {
        this.codigo_doc = codigo_doc;
    }

    public String getDescripcion_doc() {
        return descripcion_doc;
    }

    public void setDescripcion_doc(String descripcion_doc) {
        this.descripcion_doc = descripcion_doc;
    }

    public int getIngreso() {
        return ingreso;
    }

    public void setIngreso(int ingreso) {
        this.ingreso = ingreso;
    }

    public int getSalida() {
        return salida;
    }

    public void setSalida(int salida) {
        this.salida = salida;
    }

    public int getDia() {
        return dia;
    }

    public void setDia(int dia) {
        this.dia = dia;
    }

    public String getTipo_hor() {
        return tipo_hor;
    }

    public void setTipo_hor(String tipo_hor) {
        this.tipo_hor = tipo_hor;
    }

    public String getCodigo_hor() {
        return codigo_hor;
    }

    public void setCodigo_hor(String codigo_hor) {
        this.codigo_hor = codigo_hor;
    }

    public Integer getNumero_hor() {
        return numero_hor;
    }

    public void setNumero_hor(Integer numero_hor) {
        this.numero_hor = numero_hor;
    }

    public String[] getNumero_dia() {
        return numero_dia;
    }

    public void setNumero_dia(String[] numero_dia) {
        this.numero_dia = numero_dia;
    }

    public String[] getIngreso_dia() {
        return ingreso_dia;
    }

    public void setIngreso_dia(String[] ingreso_dia) {
        this.ingreso_dia = ingreso_dia;
    }

    public String[] getSalida_dia() {
        return salida_dia;
    }

    public void setSalida_dia(String[] salida_dia) {
        this.salida_dia = salida_dia;
    }

    public String getDescripcion_hor() {
        return descripcion_hor;
    }

    public void setDescripcion_hor(String descripcion_hor) {
        this.descripcion_hor = descripcion_hor;
    }

    public Integer getTipo_ser() {
        return tipo_ser;
    }

    public void setTipo_ser(Integer tipo_ser) {
        this.tipo_ser = tipo_ser;
    }

    public Integer getTolerancia() {
        return tolerancia;
    }

    public void setTolerancia(Integer tolerancia) {
        this.tolerancia = tolerancia;
    }

    public String getClase_hor() {
        return clase_hor;
    }

    public void setClase_hor(String clase_hor) {
        this.clase_hor = clase_hor;
    }

    public String getTotal_horas_sem() {
        return total_horas_sem;
    }

    public void setTotal_horas_sem(String total_horas_sem) {
        this.total_horas_sem = total_horas_sem;
    }

    public String getLactancia() {
        return lactancia;
    }

    public void setLactancia(String lactancia) {
        this.lactancia = lactancia;
    }
}

package edu.quipu.rrhh.models;

public class Legajos {

    private String codigo;
    private Integer id;
    private String paterno;
    private String materno;
    private String nombre;
    private String TipCod;
    private String TipEstDesc;
    private String xhoras;
    private int nivelcod;
    private String niveldescripcion;
    private String codpais;
    private String pais;
    private String centro_estudio;
    private String f_inicio;
    private String f_fin;
    private String duracion;
    private String especialidad;
    private String certificado;
    private int  horas;
    private String nro_titulacion;
    private String grado_titulacion;
    private String fecha_expedicion;
    private String nro_colegiatura;
    private String desc_estcivil;
    private String codcivil;
    private int cod_tip_benef;
    private String desc_tip_benef;
    private String id_doc;

    public int getCod_tip_benef() {
        return cod_tip_benef;
    }

    public void setCod_tip_benef(int cod_tip_benef) {
        this.cod_tip_benef = cod_tip_benef;
    }

    public String getDesc_tip_benef() {
        return desc_tip_benef;
    }

    public void setDesc_tip_benef(String desc_tip_benef) {
        this.desc_tip_benef = desc_tip_benef;
    }

    private String desc_doc;
    private String cod_parent;
    private String desc_parent;
    private String idioma_cod;
    private String idioma_nom;
    private int id_tip_pago;
    private String desc_tip_pago;
    private String abv_tip_pago;

    public int getId_tip_pago() {
        return id_tip_pago;
    }

    public void setId_tip_pago(int id_tip_pago) {
        this.id_tip_pago = id_tip_pago;
    }

    public String getDesc_tip_pago() {
        return desc_tip_pago;
    }

    public void setDesc_tip_pago(String desc_tip_pago) {
        this.desc_tip_pago = desc_tip_pago;
    }

    public String getAbv_tip_pago() {
        return abv_tip_pago;
    }

    public void setAbv_tip_pago(String abv_tip_pago) {
        this.abv_tip_pago = abv_tip_pago;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getNro_colegiatura() {
        return nro_colegiatura;
    }

    public void setNro_colegiatura(String nro_colegiatura) {
        this.nro_colegiatura = nro_colegiatura;
    }

    public String getDuracion() {
        return duracion;
    }

    public void setDuracion(String duracion) {
        this.duracion = duracion;
    }

    public String getFecha_expedicion() {
        return fecha_expedicion;
    }

    public void setFecha_expedicion(String fecha_expedicion) {
        this.fecha_expedicion = fecha_expedicion;
    }

    public String getNro_titulacion() {
        return nro_titulacion;
    }

    public void setNro_titulacion(String nro_titulacion) {
        this.nro_titulacion = nro_titulacion;
    }

    public String getIdioma_cod() {
        return idioma_cod;
    }

    public void setIdioma_cod(String idioma_cod) {
        this.idioma_cod = idioma_cod;
    }

    public String getIdioma_nom() {
        return idioma_nom;
    }

    public void setIdioma_nom(String idioma_nom) {
        this.idioma_nom = idioma_nom;
    }

    public String getXhoras() {
        return xhoras;
    }

    public void setXhoras(String xhoras) {
        this.xhoras = xhoras;
    }

    public String getDesc_estcivil() {
        return desc_estcivil;
    }

    public void setDesc_estcivil(String desc_estcivil) {
        this.desc_estcivil = desc_estcivil;
    }

    public String getCodcivil() {
        return codcivil;
    }

    public void setCodcivil(String codcivil) {
        this.codcivil = codcivil;
    }

    public String getId_doc() {
        return id_doc;
    }

    public void setId_doc(String id_doc) {
        this.id_doc = id_doc;
    }

    public String getDesc_doc() {
        return desc_doc;
    }

    public void setDesc_doc(String desc_doc) {
        this.desc_doc = desc_doc;
    }

    public String getCod_parent() {
        return cod_parent;
    }

    public void setCod_parent(String cod_parent) {
        this.cod_parent = cod_parent;
    }

    public String getDesc_parent() {
        return desc_parent;
    }

    public void setDesc_parent(String desc_parent) {
        this.desc_parent = desc_parent;
    }

    public String getNiveldescripcion() {
        return niveldescripcion;
    }

    public void setNiveldescripcion(String niveldescripcion) {
        this.niveldescripcion = niveldescripcion;
    }

    public String getTipCod() {
        return TipCod;
    }

    public void setTipCod(String tipCod) {
        TipCod = tipCod;
    }

    public String getTipEstDesc() {
        return TipEstDesc;
    }

    public void setTipEstDesc(String tipEstDesc) {
        TipEstDesc = tipEstDesc;
    }

    public int getNivelcod() {
        return nivelcod;
    }

    public void setNivelcod(int nivelcod) {
        this.nivelcod = nivelcod;
    }

    public String getCodpais() {
        return codpais;
    }

    public void setCodpais(String codpais) {
        this.codpais = codpais;
    }

    public String getCodigo() {
        return codigo;
    }

    public void setCodigo(String codigo) {
        this.codigo = codigo;
    }

    public String getPaterno() {
        return paterno;
    }

    public void setPaterno(String paterno) {
        this.paterno = paterno;
    }

    public String getMaterno() {
        return materno;
    }

    public void setMaterno(String materno) {
        this.materno = materno;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public String getPais() {
        return pais;
    }

    public void setPais(String pais) {
        this.pais = pais;
    }

    public String getCentro_estudio() {
        return centro_estudio;
    }

    public void setCentro_estudio(String centro_estudio) {
        this.centro_estudio = centro_estudio;
    }

    public String getF_inicio() {
        return f_inicio;
    }

    public void setF_inicio(String f_inicio) {
        this.f_inicio = f_inicio;
    }

    public String getF_fin() {
        return f_fin;
    }

    public void setF_fin(String f_fin) {
        this.f_fin = f_fin;
    }

    public String getEspecialidad() {
        return especialidad;
    }

    public void setEspecialidad(String especialidad) {
        this.especialidad = especialidad;
    }

    public String getCertificado() {
        return certificado;
    }

    public void setCertificado(String certificado) {
        this.certificado = certificado;
    }

    public int getHoras() {
        return horas;
    }

    public void setHoras(int horas) {
        this.horas = horas;
    }

    public String getGrado_titulacion() {
        return grado_titulacion;
    }

    public void setGrado_titulacion(String grado_titulacion) {
        this.grado_titulacion = grado_titulacion;
    }
}

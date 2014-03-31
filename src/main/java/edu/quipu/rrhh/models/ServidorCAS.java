package edu.quipu.rrhh.models;


public class ServidorCAS extends Servidor {

    private static final long serialVersionUID = 9189949042451604211L;
    private String numeroContrato;
    private String ultimaAdenda;
    private String importeContratado;
    private Integer unidadId;
    private Integer diasInasistencia;
    private Integer minutosTardanza;
    private Integer horasCumplir;
    private Integer honorarioMensual;
    private String numeroOperacionCuarta;
    private String estadoServidor;
    private String codigoObservacion;
    private int numeroObservaciones;
    private String numeroPlanilla;
    private String planillaCorrelativo;
    private String detallePlanillaCorrelativo;
    private float monto;
    private float totalPago;

    public String getNumeroContrato() {
        return numeroContrato;
    }

    public void setNumeroContrato(String numeroContrato) {
        this.numeroContrato = numeroContrato;
    }

    public String getUltimaAdenda() {
        return ultimaAdenda;
    }

    public void setUltimaAdenda(String ultimaAdenda) {
        this.ultimaAdenda = ultimaAdenda;
    }

    public String getImporteContratado() {
        return importeContratado;
    }

    public void setImporteContratado(String importeContratado) {
        this.importeContratado = importeContratado;
    }

    public Integer getUnidadId() {
        return unidadId;
    }

    public void setUnidadId(Integer unidadId) {
        this.unidadId = unidadId;
    }

    public Integer getDiasInasistencia() {
        return diasInasistencia;
    }

    public void setDiasInasistencia(Integer diasInasistencia) {
        this.diasInasistencia = diasInasistencia;
    }

    public Integer getMinutosTardanza() {
        return minutosTardanza;
    }

    public void setMinutosTardanza(Integer minutosTardanza) {
        this.minutosTardanza = minutosTardanza;
    }

    public Integer getHorasCumplir() {
        return horasCumplir;
    }

    public void setHorasCumplir(Integer horasCumplir) {
        this.horasCumplir = horasCumplir;
    }

    public Integer getHonorarioMensual() {
        return honorarioMensual;
    }

    public void setHonorarioMensual(Integer honorarioMensual) {
        this.honorarioMensual = honorarioMensual;
    }

    public String getEstadoServidor() {
        return estadoServidor;
    }

    public void setEstadoServidor(String estadoServidor) {
        this.estadoServidor = estadoServidor;
    }

    public String getCodigoObservacion() {
        return codigoObservacion;
    }

    public void setCodigoObservacion(String codigoObservacion) {
        this.codigoObservacion = codigoObservacion;
    }

    public float getMonto() {
        return monto;
    }

    public void setMonto(float monto) {
        this.monto = monto;
    }

    public float getTotalPago() {
        return totalPago;
    }

    public void setTotalPago(float totalPago) {
        this.totalPago = totalPago;
    }

    public int getNumeroObservaciones() {
        return numeroObservaciones;
    }

    public void setNumeroObservaciones(int numeroObservaciones) {
        this.numeroObservaciones = numeroObservaciones;
    }

    public String getNumeroOperacionCuarta() {
        return numeroOperacionCuarta;
    }

    public void setNumeroOperacionCuarta(String numeroOperacionCuarta) {
        this.numeroOperacionCuarta = numeroOperacionCuarta;
    }

    public String getNumeroPlanilla() {
        return numeroPlanilla;
    }

    public void setNumeroPlanilla(String numeroPlanilla) {
        this.numeroPlanilla = numeroPlanilla;
    }

    public String getPlanillaCorrelativo() {
        return planillaCorrelativo;
    }

    public void setPlanillaCorrelativo(String planillaCorrelativo) {
        this.planillaCorrelativo = planillaCorrelativo;
    }

    public String getDetallePlanillaCorrelativo() {
        return detallePlanillaCorrelativo;
    }

    public void setDetallePlanillaCorrelativo(String detallePlanillaCorrelativo) {
        this.detallePlanillaCorrelativo = detallePlanillaCorrelativo;
    }


}

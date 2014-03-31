package edu.quipu.rrhh.services;

import javax.servlet.http.HttpServletResponse;


public interface ReportService {

    void cargarReporteDeConformidad(HttpServletResponse response, Integer anio, Integer mes, Integer udid, String usuario, String uddesc, String origen, String planilla, String[] rucs);

    void cargarReporteDePagosTardanzas(HttpServletResponse response, int anio, int mes, int udid, String usuario, String uddesc, String origen, String planilla, String[] rucs);

}

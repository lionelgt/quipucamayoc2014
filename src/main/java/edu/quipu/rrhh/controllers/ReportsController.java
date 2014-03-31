package edu.quipu.rrhh.controllers;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import edu.quipu.rrhh.services.ReportService;

import javax.servlet.http.HttpServletResponse;


@Controller
@RequestMapping("/rest/reportes")
public class ReportsController {

	protected static Logger logger = LoggerFactory.getLogger(ReportsController.class);

    @Autowired
    private ReportService reportsService;


    @RequestMapping(value = "/planillasCAS/unidades/{unidadId}/anio/{anio}/mes/{mes}/reporteConformidad/pdf", consumes = "application/json", method = RequestMethod.GET, params = {"rucs"})
    public void mostrarReporteConformidad(HttpServletResponse response, @PathVariable(value="anio") int anio, @PathVariable(value="mes") int mes, @PathVariable(value="unidadId") int unidadId,@RequestParam(value="rucs", required=false)String[] rucs) {
        logger.info("adsfAAAAAAAAAAAAAAAAAAAAAAAAAa"+anio+" "+mes+" "+unidadId);
    }

    @RequestMapping(value = "/planillasCAS/reporteConformidad/pdf",method = RequestMethod.POST)
    public void mostrarReporteConformidad(HttpServletResponse response,Integer anio, Integer mes,  Integer unidadId,String usuario, String uddesc, String origen,String rucs, String planilla) {
        String cortar_cadena=rucs;
        int tamaño=cortar_cadena.length()/11;
          int k=0;
          String[] array_rucs=new String[tamaño];
          for(int i=0;i<=(cortar_cadena.length()-11);i=i+11){
             array_rucs[k]=cortar_cadena.substring(i,i+11);
             System.out.println(array_rucs[k]);
             k=k+1;
          }
        reportsService.cargarReporteDeConformidad(response, anio,mes,unidadId,"geiner",uddesc,origen,planilla,array_rucs);

    }

    @RequestMapping(value = "/planillasCAS/reporteConformidadPagos/pdf", method = RequestMethod.POST)
    public void mostrarReporteConformidadPagos(HttpServletResponse response, int anio, int mes,  int unidadId, String uddesc, String origen, String planilla, String rucs) {
        String cortar_cadena=rucs;
        int tamaño=cortar_cadena.length()/11;
        int j=0;
        int k=0;
        String[] array_rucs=new String[tamaño];
        for(int i=0;i<=cortar_cadena.length()-11;i=i+11){
            array_rucs[k]=cortar_cadena.substring(i,i+11);
            System.out.println(array_rucs[k]+"-");
            k=k+1;
        }
        reportsService.cargarReporteDePagosTardanzas(response, anio, mes, unidadId, "wmanriques", uddesc, origen, planilla, array_rucs);
    }


}

package edu.quipu.rrhh.controllers;

/**
 * Created with IntelliJ IDEA.
 * User: GEINNER
 * Date: 11/03/14
 * Time: 03:09 PM
 * To change this template use File | Settings | File Templates.
 */
import edu.quipu.rrhh.models.*;
import edu.quipu.rrhh.services.AsistenciaAdministrativoService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@Controller
@RequestMapping(value = "/api/asistencia/administrativo")
public class AsistenciaAdministrativoController {

    private static final Logger log= LoggerFactory.getLogger(LegajosController.class);

    @Autowired
    AsistenciaAdministrativoService asistenciaAdministrativoService;

    @RequestMapping(method = RequestMethod.GET,produces ="application/json",value = "/servidores")
    @PreAuthorize("hasAnyRole('admin')")
    @ResponseBody
    public List<Servidor> buscarServidores(){
        return asistenciaAdministrativoService.buscarServidores();
    }

    @RequestMapping(method = RequestMethod.POST,consumes = "application/json",produces = "application/json",value = "/addhorario")
    @ResponseStatus(HttpStatus.CREATED)
    @ResponseBody
    public String guardar_horario(@RequestBody Asistencia asistencia){
        for(int i=0;i<asistencia.getNumero_dia().length;i++){
            System.out.println("dia "+asistencia.getNumero_dia()[i]);
            System.out.println("ingreso "+asistencia.getIngreso_dia()[i]);
            System.out.println("salida "+asistencia.getSalida_dia()[i]);
            System.out.println("tolerancia "+asistencia.getTolerancia()+"  lactancia"+asistencia.getLactancia()+"tipo "+asistencia.getTipo_hor());
            System.out.println(" /n");
        }
        asistenciaAdministrativoService.guardar_horario_service(asistencia);
        return "";
    }

    @RequestMapping(method = RequestMethod.GET,produces ="application/json",value = "/codigo/{codigo}/tolerancia/{tol}/lactancia/{lac}")
    @ResponseBody
    public List<Asistencia> buscarHorarios(@PathVariable(value = "codigo") String codigo, @PathVariable(value = "tol") String tol, @PathVariable(value = "lac") String lac){

        System.out.println( "codigo "+codigo);
        return asistenciaAdministrativoService.buscarHorarios(codigo,tol,lac);
    }

    @RequestMapping(method = RequestMethod.GET,produces ="application/json",value = "/tipo_documentos")
    @ResponseBody
    public List<Asistencia> buscarTipoDocumentos(){
        return asistenciaAdministrativoService.buscarTipoDocumentos();
    }

    @RequestMapping(method = RequestMethod.GET,produces ="application/json",value = "/horarioNoct/{codigo}")
    @ResponseBody
    public List<Asistencia> buscarTipHorarios(@PathVariable(value = "codigo") String codigo){

       // System.out.println("tipo "+tipo+" codigo "+codigo);
        //return asistenciaAdministrativoService.buscarHorarios(tipo,codigo,tol,lac);
        System.out.println("codigo:"+codigo);
        return asistenciaAdministrativoService.buscarTipoHorario(codigo);
    }

    @RequestMapping(method = RequestMethod.GET,produces ="application/json",value = "/selectHorario/{codigo}")
    @ResponseBody
    public List<Asistencia> selectTipHorarios(@PathVariable(value = "codigo") String codigoHor){


        System.out.println("codigo:"+codigoHor);
        return asistenciaAdministrativoService.selectTipoHorario(codigoHor);
    }

}

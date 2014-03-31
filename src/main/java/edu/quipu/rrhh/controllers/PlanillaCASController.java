package edu.quipu.rrhh.controllers;

//import edu.quipu.rrhh.models.EnvioDeServidoresaControlPrevio;
import edu.quipu.rrhh.models.EnvioDeServidoresaControlPrevio;
import edu.quipu.rrhh.models.PlanillaCAS;
import edu.quipu.rrhh.services.PlanillaCASService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.security.access.annotation.Secured;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;

//import edu.quipu.rrhh.services.ServidorCASService;
@Controller
@RequestMapping(value = "/api/planillasCAS")
public class PlanillaCASController {

    private static final Logger log = LoggerFactory.getLogger(PlanillaCASController.class);

    @Autowired
    PlanillaCASService planillaCASService;

    /*@Autowired
    ServidorCASService servidorCASServicio;*/

    @RequestMapping(method = RequestMethod.GET, produces = "application/json", value="/unidades/{unidadId}/anio/{anio}/mes/{mes}")
    @ResponseBody
    public List<PlanillaCAS> get(@PathVariable(value="anio") int anio, @PathVariable(value="mes") int mes, @PathVariable(value="unidadId") int unidadId) {
        List<PlanillaCAS> planillasCAS=planillaCASService.obtenerPlanillasCAS(unidadId, anio, mes, 0);
        return planillasCAS;
    }

    /*@RequestMapping(method = RequestMethod.POST, consumes = "application/json", produces = "application/json")
    @ResponseStatus(HttpStatus.CREATED)
    @ResponseBody
    public String create(@RequestBody String algo) {
        String mensaje = "adfsaiwehjriaeshjoiwaer";
        return mensaje;
    }*/

    @RequestMapping(method = RequestMethod.POST,consumes = "application/json",produces = "application/json",value = "/aperturaPlanilla")
    @ResponseStatus(HttpStatus.CREATED)
    @ResponseBody
    public PlanillaCAS save(@RequestBody PlanillaCAS planillascas){
        planillaCASService.crearAperturaPlanilla(planillascas.getAnio(),planillascas.getMes(),planillascas.getCodigoOrigen(),planillascas.getCodigoDependencia());
        return planillaCASService.obtenerPlanillasCAS(planillascas.getCodigoDependencia(),planillascas.getAnio(),planillascas.getMes(),0).get(0);
    }

    @RequestMapping(method = RequestMethod.PUT,consumes = "application/json",produces = "application/json",value = "/updateEstadoServidor")
    @ResponseStatus(HttpStatus.CREATED)
    @ResponseBody
    public String updateEstadoServidor(@RequestBody EnvioDeServidoresaControlPrevio servidores){
        planillaCASService.cambiarEstadoPlanillas(servidores.getPlaest(),servidores.getUdid(),servidores.getAnio(),servidores.getMes(),servidores.getRucs(),
                    servidores.getNumerodeplanilla(),servidores.getPlanillacorrelativo(),servidores.getOrigen(),servidores.getPlanilla());
        return "";
     }

}

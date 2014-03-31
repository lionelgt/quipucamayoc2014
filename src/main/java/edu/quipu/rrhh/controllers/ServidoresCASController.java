package edu.quipu.rrhh.controllers;

import edu.quipu.rrhh.models.ServidorCAS;
import edu.quipu.rrhh.services.ServidorCASService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.List;

@Controller
@RequestMapping(value = "/api/servidoresCAS")
public class ServidoresCASController {

    private static final Logger log = LoggerFactory.getLogger(ServidoresCASController.class);

    @Autowired
    @Qualifier("servidorCASServiceImpl")
    ServidorCASService servidorCASServicio;

//    @RequestMapping(method = RequestMethod.GET, produces = "application/json", params = {"anio", "mes", "unidadId"})
//    @ResponseBody
//    public List<ServidorCAS> get(@RequestParam(value="anio") int anio, @RequestParam(value="mes") int mes, @RequestParam(value="unidadId") int unidadId) {
//        log.info("METHOD: get( parameters: "+anio+ ", "+ mes +", "+unidadId+ ")");
//        List<ServidorCAS> servidoresCAS = servidorCASServicio.buscarServidoresCAS(unidadId, anio, mes);
//        return servidoresCAS;
//    }

    /*@RequestMapping(method = RequestMethod.GET, produces = "application/json", value="/unidades/{unidadId}/anio/{anio}/mes/{mes}")
    @ResponseBody
    public List<ServidorCAS> getServidores(@PathVariable(value="anio") int anio, @PathVariable(value="mes") int mes, @PathVariable(value="unidadId") int unidadId) {
        log.info("/unidades/{unidadId}/anio/{anio}/mes/{mes}: get( pathvariables: "+anio+ ", "+ mes +", "+unidadId+ ")");
        List<ServidorCAS> servidoresCAS = servidorCASServicio.buscarServidoresCAS(unidadId, anio, mes);
        return servidoresCAS;
    }*/

    @RequestMapping(method = RequestMethod.GET, produces = "application/json", value="/unidades/{unidadId}/anio/{anio}/mes/{mes}/planillasCAS/{planilla}")
    @ResponseBody
    public List<ServidorCAS> getServidoresEnPlanilla(@PathVariable(value="anio") int anio, @PathVariable(value="mes") int mes, @PathVariable(value="unidadId") int unidadId, @PathVariable(value="planilla") String planilla) {
        log.info("/{planilla}/unidades/{unidadId}/anio/{anio}/mes/{mes}/servidoresCAS: getServidoresEnPlanilla( pathvariables: "+anio+ ", "+ mes +", "+unidadId+", "+planilla+ ")");
        List<ServidorCAS> servidoresCAS = servidorCASServicio.buscarServidoresCASEnPlanilla(unidadId, anio, mes, planilla);
        return servidoresCAS;
    }


    /*@RequestMapping(method = RequestMethod.POST, consumes = "application/json", produces = "application/json")
    @ResponseStatus(HttpStatus.CREATED)
    @ResponseBody
    public String create(@RequestBody String algo) {
        String mensaje = "adfsaiwehjriaeshjoiwaer";
    *//*    List<ServidorCAS> servidoresCAS=servidorCASServicio.buscarServidoresCASEnPlanilla(10225, 2013, 2, "P0085");
        for (ServidorCAS s:servidoresCAS){
            System.out.println(s.getCodigo());
        }*//*
        return mensaje;
    }*/

}


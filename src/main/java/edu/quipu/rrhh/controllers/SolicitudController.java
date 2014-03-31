package edu.quipu.rrhh.controllers;


import edu.quipu.rrhh.models.Perfil;
import edu.quipu.rrhh.models.Solicitud;
import edu.quipu.rrhh.services.SolicitudService;
import edu.quipu.rrhh.services.WorkerEntityService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Controller
@RequestMapping(value = "/api/solicitudes")
public class SolicitudController {

    private static final Logger log = LoggerFactory.getLogger(SolicitudController.class);

    @Autowired
    SolicitudService solicitudService;

    @Autowired
    WorkerEntityService workerEntityService;


    @RequestMapping(method = RequestMethod.GET, produces = "application/json", value = "/estados")
    @ResponseBody
    public List<Solicitud> findAll() {
        System.out.println("controlador back");
        List<Solicitud> solicitudes= solicitudService.obtenerSolicitudesdePerfil();
        return   solicitudes;
    }

    @RequestMapping(method = RequestMethod.PUT, consumes = "application/json", produces = "application/json", value = "/updateEstado"/*, params ={"c_usuid"}*/)
    @ResponseStatus(HttpStatus.CREATED)
    @ResponseBody
    public String updateEstado(@RequestBody Solicitud worker){
        System.out.println(worker.getDni()+"-"+worker.getEmail());

        solicitudService.updateEstado(worker.getDni());
        return "";

    }

    @RequestMapping(method = RequestMethod.GET,produces = "application/json",value = "/update/{dni}/{percod}")
    @ResponseStatus(HttpStatus.CREATED)
    @ResponseBody
    public void updateEstados(@PathVariable(value= "dni")String dni, @PathVariable (value= "percod") Integer percod){

        while(dni.length()<10){
            dni=dni+" ";
        }
        workerEntityService.deleteUserHistUsu(dni.trim());
        solicitudService.update(dni.trim(), percod);
    }

    @RequestMapping(method = RequestMethod.GET, produces = "application/json", value = "/perfil/{per_cod}")
    @ResponseBody
    public List<Perfil> findPerfil(@PathVariable(value="per_cod") int perf_cod) {
        System.out.println("controlador buscando perfil");
        List<Perfil> perfil= solicitudService.findPerfil(perf_cod);
        return   perfil;

    }

    @RequestMapping(method = RequestMethod.GET, produces = "application/json", value = "/perfiles")
    @ResponseBody
    public List<Perfil> findTodosPerfiles() {
        System.out.println("controlador buscando perfil");
        List<Perfil> perfil= solicitudService.findTodosPerfiles();
        return  perfil;
    }
}

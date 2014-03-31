package edu.quipu.rrhh.controllers;


import edu.quipu.rrhh.models.AdendaCAS;
import edu.quipu.rrhh.models.Unidad;
import edu.quipu.rrhh.persistence.ContratoCASMapper;
import edu.quipu.rrhh.persistence.PlazaCASMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Controller
@RequestMapping(value = "/rest/cas/plazas")
public class ContratoCASController {

    @Autowired
    private ContratoCASMapper contratoCASMapper;

    @Autowired
    private PlazaCASMapper plazaCASMapper;

    @RequestMapping(method = RequestMethod.GET, produces = "application/json", value = "/unidad/{unidad}")
    @ResponseStatus(HttpStatus.ACCEPTED)
    @ResponseBody
    public List<AdendaCAS> listarContratosCAS(@PathVariable(value = "unidad") Integer udIdUnidad) {
        Unidad unidad = new Unidad();
        unidad.setUdId(udIdUnidad);
        return contratoCASMapper.findByUnidad(unidad);
    }

    @RequestMapping(method = RequestMethod.DELETE, produces = "application/json", value = "/plaza/{plazaId}")
    @ResponseStatus(HttpStatus.ACCEPTED)
    @ResponseBody
    public String eliminarPlaza(@PathVariable(value = "plazaId") Integer plazaId) {
        AdendaCAS contrato = new AdendaCAS();
        contrato.setIdPlaza(plazaId);

        plazaCASMapper.removePlaza(contrato);
        return "delete " + plazaId;
    }

    @RequestMapping(method = RequestMethod.POST, consumes = "application/json", produces = "application/json", value = "/new")
    @ResponseStatus(HttpStatus.CREATED)
    @ResponseBody
    public AdendaCAS save(@RequestBody AdendaCAS contrato) {
        plazaCASMapper.savePlaza(contrato);
        return contrato;
    }

}

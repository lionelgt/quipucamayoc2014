package edu.quipu.rrhh.controllers;

import edu.quipu.rrhh.models.Perfil;
import edu.quipu.rrhh.services.PerfilService;
import edu.quipu.rrhh.services.RolService;
import edu.quipu.rrhh.services.SolicitudService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Controller
@RequestMapping(value = "/rest/cas/profile")
public class PerfilController {

    @Autowired
    private PerfilService perfilService;
    @Autowired
    private SolicitudService solicitudService;
    @Autowired
    private RolService rolService;

    @RequestMapping(method = RequestMethod.GET, produces = "application/json", value = "/profiles")
    @ResponseStatus(HttpStatus.ACCEPTED)
    @ResponseBody
    public List<Perfil> getProfiles() {
        return perfilService.getProfiles();
    }

    /*@RequestMapping(method = RequestMethod.POST, produces = "application/json", value = "/add/{desc}")
    @ResponseStatus(HttpStatus.ACCEPTED)
    @ResponseBody
    public void addProfile(@PathVariable(value="desc")String description) {
        perfilService.addProfile(description);
    }  */

    @RequestMapping(method = RequestMethod.POST, produces = "application/json", value = "/add")
    @ResponseStatus(HttpStatus.ACCEPTED)
    @ResponseBody
    public void addProfile(@RequestBody Perfil perfil ) {
        perfilService.addProfile(perfil.getDescripcion());
    }

    /*@RequestMapping(method = RequestMethod.DELETE, produces = "application/json", value = "/delete/{id}" )
    @ResponseStatus(HttpStatus.ACCEPTED)
    @ResponseBody
    public void deleteProfile(@PathVariable(value= "id")Integer id) {

        solicitudService.deletePerfil(id);
        rolService.deleteRolPerfilByPerfCode(id);
        perfilService.deleteProfile(id);

    }    */

    @RequestMapping(method = RequestMethod.POST, produces = "application/json", value = "/delete" )
    @ResponseStatus(HttpStatus.ACCEPTED)
    @ResponseBody
    public void deleteProfile(@RequestBody Perfil perfil) {

        solicitudService.deletePerfil(perfil.getCodigo());
        rolService.deleteRolPerfilByPerfCode(perfil.getCodigo());
        perfilService.deleteProfile(perfil.getCodigo());

    }

}

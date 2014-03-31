package edu.quipu.rrhh.controllers;

import edu.quipu.rrhh.models.Rol;
import edu.quipu.rrhh.models.RolPerfil;
import edu.quipu.rrhh.services.RolService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Controller
@RequestMapping(value = "/rest/cas/roles")
public class RolController {

    @Autowired
    private RolService rolService;

    @RequestMapping(method = RequestMethod.GET, produces = "application/json", value = "/rols/{perfcode}")
    @ResponseStatus(HttpStatus.ACCEPTED)
    @ResponseBody
    public List<Rol> getRols(@PathVariable(value="perfcode") int perfCode) {
        return rolService.getRols(perfCode);
    }

    /*@RequestMapping(method = RequestMethod.GET, produces = "application/json", value = "/rol/add/{desc}")
    @ResponseStatus(HttpStatus.ACCEPTED)
    @ResponseBody
    public void addRol(@PathVariable(value="desc")String description) {
        rolService.addRol(description);
    }     */
    @RequestMapping(method = RequestMethod.POST, produces = "application/json", value = "/rol/add")
    @ResponseStatus(HttpStatus.CREATED)
    @ResponseBody
    public void addRol(@RequestBody Rol rol) {
        rolService.addRol(rol.getDescription());
    }

    /*@RequestMapping( method = RequestMethod.POST, value="/rol/update/{desc}/{id}")
    @ResponseBody
    public void updateRol( @PathVariable(value = "id")Integer id, @PathVariable(value = "desc")String description){
        rolService.updateRol(id,description);
    } */
    @RequestMapping( method = RequestMethod.POST, value="/rol/update")
    @ResponseBody
    public void updateRol(@RequestBody Rol rol){
        rolService.updateRol(rol.getId(),rol.getDescription());
    }

    /*@RequestMapping(method = RequestMethod.DELETE, produces = "application/json", value = "/rol/delete/{id}" )
    @ResponseStatus(HttpStatus.ACCEPTED)
    @ResponseBody
    public void deleteRol(@PathVariable(value= "id")Integer id) {

        rolService.deleteRol(id);

    }   */
    @RequestMapping(method = RequestMethod.DELETE, produces = "application/json", value = "/rol/delete" )
    @ResponseStatus(HttpStatus.ACCEPTED)
    @ResponseBody
    public void deleteRol(@RequestBody Rol rol) {

        rolService.deleteRol(rol.getId());

    }

    /*@RequestMapping(method = RequestMethod.POST, produces = "application/json", value = "/rolperfil/add/{idRol}/{idPro}")
    @ResponseStatus(HttpStatus.ACCEPTED)
    @ResponseBody
    public void assignRol(@PathVariable(value="idRol")Integer idRol, @PathVariable(value="idPro") int idProfile) {
        rolService.assignRol(idRol,idProfile);
    }      */

    @RequestMapping(method = RequestMethod.POST, produces = "application/json", value = "/rolperfil/add")
    @ResponseStatus(HttpStatus.ACCEPTED)
    @ResponseBody
    public void assignRol(@RequestBody RolPerfil rolPerfil) {
        rolService.assignRol(rolPerfil.getRolId(),rolPerfil.getProfileId());
    }

    @RequestMapping(method = RequestMethod.GET, produces = "application/json", value = "/rolperfil")
    @ResponseStatus(HttpStatus.ACCEPTED)
    @ResponseBody
    public List<RolPerfil> getRolPerfil() {
        return rolService.getRolPerfil();
    }

    /*@RequestMapping( method = RequestMethod.POST, value="/rolperfil/update/{idRol}/{idPerfil}")
    @ResponseBody
    public void updateRolPerfil(@PathVariable(value = "idRol")Integer idRol, @PathVariable(value = "idPerfil") Integer idPerfil){
        rolService.updateRolPerfil(idRol, idPerfil);
    }*/

    @RequestMapping( method = RequestMethod.POST, value="/rolperfil/update")
    @ResponseBody
    public void updateRolPerfil(@RequestBody RolPerfil rolPerfil){
        rolService.updateRolPerfil(rolPerfil.getRolId(), rolPerfil.getProfileId());
    }

   /* @RequestMapping(method = RequestMethod.POST, produces = "application/json", value = "/rolperfil/delete/{id}" )
    @ResponseStatus(HttpStatus.ACCEPTED)
    @ResponseBody
    public void deleteRolPerfil(@PathVariable(value= "id")Integer id) {

        rolService.deleteRolPerfil(id);
    }  */

    @RequestMapping(method = RequestMethod.POST, produces = "application/json", value = "/rolperfil/delete" )
    @ResponseStatus(HttpStatus.ACCEPTED)
    @ResponseBody
    public void deleteRolPerfil(@RequestBody RolPerfil rolPerfil) {

        rolService.deleteRolPerfil(rolPerfil.getRolId());
    }

    /*@RequestMapping(method = RequestMethod.POST, produces = "application/json", value = "rolperfil/delete/perfilid/{id}")
    @ResponseStatus(HttpStatus.ACCEPTED)
    @ResponseBody
    public void deleteRolPerfilByPerfCode(@PathVariable(value = "id")Integer id){
        rolService.deleteRolPerfilByPerfCode(id);
    }   */
    @RequestMapping(method = RequestMethod.POST, produces = "application/json", value = "rolperfil/delete/perfilid")
    @ResponseStatus(HttpStatus.ACCEPTED)
    @ResponseBody
    public void deleteRolPerfilByPerfCode(@RequestBody RolPerfil rolPerfil){
        rolService.deleteRolPerfilByPerfCode(rolPerfil.getProfileId());
    }

}

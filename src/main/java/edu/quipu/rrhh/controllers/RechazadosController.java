package edu.quipu.rrhh.controllers;


import edu.quipu.rrhh.models.Rechazados;
import edu.quipu.rrhh.services.RechazadosService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

@Controller
@RequestMapping(value = "/api/solicitudes/reject")
public class RechazadosController {

    @Autowired
    RechazadosService rechazadosService;

    @RequestMapping(method = RequestMethod.POST, produces = "application/json",consumes = "application/json", value = "/add" )
    @ResponseStatus(HttpStatus.CREATED)
    @ResponseBody
    public void addRejected(@RequestBody Rechazados rechazados) {
        rechazadosService.addRejected(rechazados.getDni()+"  ", rechazados.getUd(), rechazados.getModcod(), rechazados.getObs());

    }
//    public void addRejected(@PathVariable(value= "dni")String dni, @PathVariable (value= "ud")Integer ud, @PathVariable (value= "modcod") Integer modcod, @PathVariable (value="obs") String obs) {
//        System.out.println("entro addReject:"+dni);
//        rechazadosService.addRejected(dni, ud, modcod, obs);
//
//    }

    @RequestMapping(method = RequestMethod.POST, produces = "application/json", value = "/remove/{dni}/{modcod}" )
    @ResponseStatus(HttpStatus.ACCEPTED)
    @ResponseBody
    public void removeRejected(@PathVariable(value= "dni")String dni, @PathVariable (value= "modcod") Integer modcod) {
        System.out.println("entro addReject:"+modcod);
        rechazadosService.removeRejected(dni+"  ", modcod);

    }

    @RequestMapping(method = RequestMethod.POST, produces = "application/json", value = "/update/{dni}/{modcod}" )
    @ResponseStatus(HttpStatus.ACCEPTED)
    @ResponseBody
    public void updateRejected(@PathVariable(value= "dni")String dni, @PathVariable (value= "modcod") Integer modcod) {
        System.out.println("entro addReject:"+modcod);
        rechazadosService.updateRejected(dni+"  ", modcod);

    }




}

package edu.quipu.rrhh.controllers;

import edu.quipu.rrhh.models.WorkerEntity;
import edu.quipu.rrhh.services.WorkerEntityService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

@Controller
@RequestMapping(value = "/rest/cas/worker")
public class WorkerController {

    @Autowired
    private WorkerEntityService workerEntityService;

    @RequestMapping(method = RequestMethod.GET, produces = "application/json", value = "/worker/{dni}")
    @ResponseStatus(HttpStatus.ACCEPTED)
    @ResponseBody
    public WorkerEntity findWorker(@PathVariable(value = "dni")String id) {
        return workerEntityService.findWorker(id+"  ");
    }

    @RequestMapping(method = RequestMethod.GET, value = "/worker/add/erp/{dni}/{email}/{fullname}/{lastname}" /*, produces = "application/json"*/)
    @ResponseStatus(HttpStatus.ACCEPTED)
    @ResponseBody
    public void addUser(@PathVariable (value= "dni")String dni, @PathVariable (value= "email")String email, @PathVariable (value= "fullname")String fullname, @PathVariable (value= "lastname")String lastname) {
        System.out.println("entron add erp:"+email);
        workerEntityService.addUser(dni,email,fullname,lastname);
    }

    @RequestMapping(method = RequestMethod.GET, value = "/add/hist/{dni}/{email}/{dependencyId}" /*, produces = "application/json"*/)
    @ResponseStatus(HttpStatus.ACCEPTED)
    @ResponseBody
    public void addUser(@PathVariable (value= "dni")String dni, @PathVariable (value= "dependencyId")int dependencyId,@PathVariable (value= "email")String email) {
        System.out.println("entro add hist:"+dni+" - "+dependencyId+"correo : "+email);
        workerEntityService.addHistUserPerf(dni,dependencyId,email);

    }

    @RequestMapping(method = RequestMethod.GET, produces = "application/json", value = "/worker/validationDni/{dni}")
    @ResponseStatus(HttpStatus.ACCEPTED)
    @ResponseBody
    public WorkerEntity validationDni(@PathVariable(value = "dni")String id) {
        return workerEntityService.validationDni(id+"  ");
    }

    @RequestMapping(value="/worker/update/{dni}", method = RequestMethod.POST)
    @ResponseBody
    public void updateStateHistUsuPerf(@PathVariable(value = "dni")String id){
        workerEntityService.updateStateHistUsuPerf(id);
    }

    @RequestMapping(method = RequestMethod.GET, produces = "application/json", value = "/worker/findHistUser/{dni}")
    @ResponseStatus(HttpStatus.ACCEPTED)
    @ResponseBody
    public WorkerEntity findHistUser(@PathVariable(value = "dni")String id) {

        return workerEntityService.findHistUser(id+"  ");
    }

    @RequestMapping(method = RequestMethod.GET, produces = "application/json", value = "/worker/findEstHistUser/{dni}")
    @ResponseStatus(HttpStatus.ACCEPTED)
    @ResponseBody
    public WorkerEntity findEstHistUser(@PathVariable(value = "dni")String id) {

        return workerEntityService.findEstHistUser(id+"  ");
    }
}

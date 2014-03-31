package edu.quipu.rrhh.controllers;

import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

@Controller
@RequestMapping(value = "/rest/template")

public class TemplateController {

//    @Autowired
//    private UserService userService;

    @PreAuthorize("hasRole('admin')")
    @RequestMapping(value = "/inicio", method = RequestMethod.GET)
    public String inicio() {

        return "templates/inicio";
    }


    @PreAuthorize("hasRole('userperfil')")
    @RequestMapping(value = "/form", method = RequestMethod.GET)
    public String form() {

        return "templates/form";
    }

}

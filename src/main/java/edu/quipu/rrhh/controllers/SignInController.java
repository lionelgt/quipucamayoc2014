package edu.quipu.rrhh.controllers;

import edu.quipu.rrhh.services.ServidorService;
import org.json.JSONException;
import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Scope;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.authentication.AnonymousAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import javax.servlet.http.HttpServletRequest;
import java.io.*;
import java.net.URL;
import java.nio.charset.Charset;
import java.util.Collection;
import java.util.Iterator;

@Controller
@Scope("session")
public class SignInController implements Serializable{

    @Autowired
    private UserService userService;

    @Autowired
    private ServidorService servidorservice;

    public String readAll(Reader rd) throws IOException {
        StringBuilder sb = new StringBuilder();
        int cp;
        while ((cp = rd.read()) != -1) {
            sb.append((char) cp);
        }
        return sb.toString();
    }

    public JSONObject readJsonFromUrl(String url) throws IOException, JSONException {
        InputStream is = new URL(url).openStream();
        try {
            BufferedReader rd = new BufferedReader(new InputStreamReader(is, Charset.forName("UTF-8")));
            String jsonText = readAll(rd);
            JSONObject json = new JSONObject(jsonText);
            return json;
        } finally {
            is.close();
        }
    }

    @RequestMapping(value = "/", method = RequestMethod.GET)
    public String index(ModelMap map) {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        if (!(authentication instanceof AnonymousAuthenticationToken)) {
            UserDetails userDetails =
                    (UserDetails) authentication.getPrincipal();
            map.addAttribute("userDetails", userDetails);
        }
        return "index";
    }

//    @PreAuthorize("hasRole('userperfil')")
    @RequestMapping(value = "/perfil", method = RequestMethod.GET)
    public String page_perfil(ModelMap map) {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        if (!(authentication instanceof AnonymousAuthenticationToken)) {
            UserDetails userDetails =
                    (UserDetails) authentication.getPrincipal();
            map.addAttribute("userDetails", userDetails);
        }
        return "perfil";
    }

    @PreAuthorize("hasRole('admin')")
    @RequestMapping(value = "/admin", method = RequestMethod.GET)
    public String admin(ModelMap map) {
        UserDetails userDetails =(UserDetails) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        Collection<? extends GrantedAuthority> securedMessage = userService.getAuthorities(userDetails);
        System.out.println(securedMessage.toString().split(",") + "----------");
        String rol="";
        if(securedMessage.toString().indexOf(",")>0){
            String[] arrayColores = securedMessage.toString().split(",");
            for (int i = 0; i < arrayColores.length; i++) {
                System.out.println(arrayColores[i]);
                if(i==0){
                   rol=arrayColores[i].substring(1,6);
                    System.out.println(rol+" - cortado");
                }
            }
        }else{
            rol=securedMessage.toString().substring(1,securedMessage.toString().length()-2);
        };
        System.out.println(rol+"----");
        map.addAttribute("userDetails", userDetails);
        map.addAttribute("userAuthorities", securedMessage);
        map.addAttribute("userAccess",rol);
        return "admin";
    }

    @PreAuthorize("hasRole('admin')")
    @RequestMapping(value = "/planilla", method = RequestMethod.GET)
    public String planilla(ModelMap map) {
        UserDetails userDetails =
                (UserDetails) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        Collection<? extends GrantedAuthority> securedMessage = userService.getAuthorities(userDetails);
        map.addAttribute("userDetails", userDetails);
        map.addAttribute("userAuthorities", securedMessage);
        return "planilla";
    }

    //    @PreAuthorize("hasRole('admin')")
    @RequestMapping(value = "/pages/custom", method = RequestMethod.GET)
    public String custom(ModelMap map) {
        return "custom";
    }

    @RequestMapping(value = "/adminis/{token}", method = RequestMethod.GET)
         public String index(@PathVariable(value = "token") String token, ModelMap model, final HttpServletRequest request)
            throws IOException, JSONException {

        //read info from Google APIs
        String[] parts = request.getRequestURI().split("/");
        token = parts[parts.length - 1];
        JSONObject json = readJsonFromUrl("https://www.googleapis.com/oauth2/v1/userinfo?access_token=" + token);

        //para pasar parametros por get addAttribute
//        model.addAttribute("email",(String)json.get("email"));

        //authentication
        String email= (String) json.get("email");
        int pos=email.indexOf("@unmsm.edu.pe");
        if(servidorservice.Existe_servidor((String) json.get("email"))&(pos>0)){
            Authentication result = userService.login((String) json.get("email"));
            return "redirect:/admin";
        }else{
            return "fail";
        }
    }

    @RequestMapping(value = "/perfiles/{token}", method = RequestMethod.GET)
    public String perfil(@PathVariable(value = "token") String token, ModelMap model, final HttpServletRequest request)
            throws IOException, JSONException {

        //read info from Google APIs
        String[] parts = request.getRequestURI().split("/");
        token = parts[parts.length - 1];
        JSONObject json = readJsonFromUrl("https://www.googleapis.com/oauth2/v1/userinfo?access_token=" + token);

        //para pasar parametros por get addAttribute
        // model.addAttribute("email",(String)json.get("email"));
        System.out.println("entro perfiles");
        //authentication
        String email= (String) json.get("email");
        int pos=email.indexOf("@unmsm.edu.pe");
        if(pos>0){
            if(!servidorservice.Existe_histusu(email)){
               servidorservice.insertUsuPerfil(email);
            }
            Authentication result = userService.login((String) json.get("email"));
            return "redirect:/perfil";
        }else{
            return "fail";
        }
    }


    @PreAuthorize("hasRole('userperfil')")
    @RequestMapping(value = "/admin/solicitudes", method = RequestMethod.GET)
    public String adminAng(ModelMap map) {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        if (!(authentication instanceof AnonymousAuthenticationToken)) {
            UserDetails userDetails =
                    (UserDetails) authentication.getPrincipal();
            map.addAttribute("userDetails", userDetails);
        }
        return "templates/solicitudes";
    }

}


package edu.quipu.rrhh.services.implement;


import edu.quipu.rrhh.models.Perfil;
import edu.quipu.rrhh.models.Solicitud;
import edu.quipu.rrhh.persistence.SolicitudMapper;
import edu.quipu.rrhh.services.SolicitudService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class SolicitudServiceImpl implements SolicitudService{

    @Autowired
    private SolicitudMapper solicitudMapper;

    @Override
    public List<Solicitud> obtenerSolicitudesdePerfil() {
        List<Solicitud> solicitudes=solicitudMapper.findSolicitudes();
        return solicitudes;
    }



    @Override
    public void updateEstado(String c_usuid) {
        System.out.println("service "+c_usuid);
        solicitudMapper.updateEstado(c_usuid);
    }

    @Override
    public void update(String dni, Integer percod) {
       solicitudMapper.update(dni,percod); //To change body of implemented methods use File | Settings | File Templates.
    }

    @Override
    public List<Perfil> findPerfil(int perf_cod) {

        return solicitudMapper.findPerfil(perf_cod);  //To change body of implemented methods use File | Settings | File Templates.
    }

    @Override
    public List<Perfil> findTodosPerfiles() {
        return solicitudMapper.findTodosPerfiles();  //To change body of implemented methods use File | Settings | File Templates.
    }

    @Override
    public List<Solicitud> findSolicitudes() {
        return solicitudMapper.findSolicitudes();  //To change body of implemented methods use File | Settings | File Templates.
    }

    @Override
    public void deletePerfil(Integer perfilId){
        solicitudMapper.deletePerfil(perfilId);
    }

}

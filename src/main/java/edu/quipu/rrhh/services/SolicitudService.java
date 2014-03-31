package edu.quipu.rrhh.services;

import edu.quipu.rrhh.models.Perfil;
import edu.quipu.rrhh.models.Solicitud;

import java.util.List;

public interface SolicitudService {

    //List<Solicitud> obtenerSolicitudesdePerfil(char estado);
    List<Solicitud> obtenerSolicitudesdePerfil();

    public void updateEstado(String c_usuid);

    //agregado de paolo
    public void update(String dni, Integer percod);
    List<Perfil> findPerfil(int perf_cod);
    List<Perfil> findTodosPerfiles();
    List<Solicitud> findSolicitudes();
    public void deletePerfil(Integer pefilId);


}

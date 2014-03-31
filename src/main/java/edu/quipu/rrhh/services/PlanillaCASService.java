package edu.quipu.rrhh.services;

import edu.quipu.rrhh.models.PlanillaCAS;
import org.springframework.security.access.prepost.PreAuthorize;

import java.util.List;


public interface PlanillaCASService {

    @PreAuthorize("hasAuthority('userperfil')")
    List<PlanillaCAS> obtenerPlanillasCAS(int udid, int anio, int mes, int perfil);

//    List<PlanillaCAS> obtenerPlanillasCASVacias(int udid, int anio, int mes);
//
//    List<PlanillaCAS> obtenerPlanillasCASConMontos(int anio, int mes);
//
//    PlanillaCAS obtenerPlanillaCAS(int anio, int mes, String planilla);
//
//    void agregarServidorAPlanilla(int udid, int anio, int mes, ServidorCAS servidorCAS, String origen, String planilla);
//
//    boolean existeDetallePlanillaxPlanilla(int udid, int anio, int mes, String apnum);
//
//    void generarPlanillas(int udid, int anios, int mes, List<ServidorCAS> servidoresCAS, String origen, String planilla, String[] servidoresSeleccionadosRUC);//se debe agregar el vector de rucs seleccionado

    @PreAuthorize("hasRole('userperfil')")
    void cambiarEstadoPlanillas(char plaest, int udid, int anios, int mes, String[] rucs, String[] numerodeplanilla, String[] planillacorrelativo, String origen, String planilla);

    void crearAperturaPlanilla(int anio, int mes, String origen, int udid);

    void updateAperturaPlanilla(char apest, int anio, int mes, int udid, String origen, String planilla);

//    boolean existenPlanillasVacias(int unidadId, int anio, int mes);
}

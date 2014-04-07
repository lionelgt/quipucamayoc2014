package edu.quipu.rrhh.services;

import edu.quipu.rrhh.models.Asistencia;
import edu.quipu.rrhh.models.Servidor;

import java.util.List;


public interface AsistenciaAdministrativoService {

    List<Servidor> buscarServidores();

    void guardar_horario_service(Asistencia asistencia);

    List<Asistencia> buscarHorarios( String codigo, String tol, String lac);

    List<Asistencia> buscarTipoDocumentos();

    List<Asistencia> buscarTipoHorario(String codigo);

    List<Asistencia> selectTipoHorario(String codigoHor);

    Asistencia buscarHorarioActual(String codigo);
}

package edu.quipu.rrhh.services;

import edu.quipu.rrhh.models.ServidorCAS;
import org.springframework.dao.DataAccessException;

import java.util.List;


public interface ServidorCASService {
//    List<Observacion> obtenerObservacionesDeServidor(String codigoServidor, int anio, int mes) throws DataAccessException;

//    void guardarObservacion(String codigoServidor, int anio, int mes, String observacion);

//    void actualizarObservaciones(int anio, int mes, String[] servidoresSeleccionadosRUC);

//    int obtenerNroObservaciones(String codigo, int anio, int mes) throws DataAccessException;

//    List<ServidorCAS> buscarServidoresCAS(int codigoDependencia, int anio, int mes) throws DataAccessException;

    List<ServidorCAS> buscarServidoresCASEnPlanilla(int codigoDependencia, int anio, int mes, String numeroPlanilla) throws DataAccessException;

//    List<ServidorCAS> buscarServidoresCASSinPlanilla(int codigoDependencia, int anio, int mes) throws DataAccessException;

//    boolean existenServidoresSinPlanilla(int unidadId, int anio, int mes);

}

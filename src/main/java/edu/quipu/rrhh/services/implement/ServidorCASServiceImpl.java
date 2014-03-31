package edu.quipu.rrhh.services.implement;

import edu.quipu.rrhh.models.ServidorCAS;
import edu.quipu.rrhh.persistence.ServidorCASMapper;
import edu.quipu.rrhh.services.ServidorCASService;
import edu.quipu.rrhh.services.UnidadService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataAccessException;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

//import edu.quipu.rrhh.models.Observacion;
//import edu.quipu.rrhh.persistence.ObservacionMapper;
//import edu.quipu.rrhh.persistence.UnidadMapper;

@Service
@Transactional
public class ServidorCASServiceImpl implements ServidorCASService {

    /*@Autowired
    public ObservacionMapper observacionMapper;*/

    @Autowired
    private ServidorCASMapper servidorCASMapper;

    @Autowired
    private UnidadService unidadService;

    /*@Override
    public int obtenerNroObservaciones(String codigo, int anio, int mes) throws DataAccessException {
        return observacionMapper.countBySercodAnioMes(codigo, anio, mes);
    }

    @Override
    public List<Observacion> obtenerObservacionesDeServidor(
            String codigoServidor, int anio, int mes) {
        return observacionMapper.findBySercodAnioMes(codigoServidor, anio, mes);
    }

    @Override
    public void guardarObservacion(String codigoServidor, int anio, int mes,
                                   String observacion) {
        observacionMapper.create(codigoServidor, anio, mes, observacion);

    }

    @Override
    public void actualizarObservaciones(int anio, int mes,
                                        String[] servidoresSeleccionadosRUC) {
        observacionMapper.updateByAnioMesServidoresSeleccionadosRUC(anio, mes, servidoresSeleccionadosRUC);
    }


    @Override
    public List<ServidorCAS> buscarServidoresCAS(int codigoDependencia, int anio, int mes) throws DataAccessException {
        boolean esFacultad = unidadService.unidadEsFacultad(codigoDependencia);
        return servidorCASMapper.find(codigoDependencia, anio, mes, esFacultad);
    }*/

    @Override
    public List<ServidorCAS> buscarServidoresCASEnPlanilla(int codigoDependencia, int anio, int mes, String numeroPlanilla) throws DataAccessException {
        boolean esFacultad = unidadService.unidadEsFacultad(codigoDependencia);
        return servidorCASMapper.findEnPlanilla(codigoDependencia, anio, mes, numeroPlanilla, esFacultad);
    }

    /*@Override
    public List<ServidorCAS> buscarServidoresCASSinPlanilla(int codigoDependencia, int anio, int mes) throws DataAccessException {
        boolean esFacultad = unidadService.unidadEsFacultad(codigoDependencia);
        return servidorCASMapper.findSinPlanilla(codigoDependencia, anio, mes, esFacultad);
    }


    @Override
    public boolean existenServidoresSinPlanilla(int unidadId, int anio, int mes) {
        List<ServidorCAS> servidores = buscarServidoresCASSinPlanilla(
                unidadId, anio, mes);
        boolean existen = false;
        if (servidores.size() != 0) {
            existen = true;
        }
        return existen;
    }*/

}


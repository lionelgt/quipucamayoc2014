package edu.quipu.rrhh.services.implement;

import edu.quipu.rrhh.models.Asistencia;
import edu.quipu.rrhh.models.Servidor;
import edu.quipu.rrhh.persistence.AsistenciaAdministrativoMapper;
import edu.quipu.rrhh.services.AsistenciaAdministrativoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * Created with IntelliJ IDEA.
 * User: GEINNER
 * Date: 11/03/14
 * Time: 03:22 PM
 * To change this template use File | Settings | File Templates.
 */
@Service
public class AsistenciaAdministrativoServiceImpl implements AsistenciaAdministrativoService {

    @Autowired
    AsistenciaAdministrativoMapper asistenciaAdministrativoMapper;

    @Override
    public List<Servidor> buscarServidores() {
        return asistenciaAdministrativoMapper.buscarServidores();
    }

    @Override
    public void guardar_horario_service(Asistencia asistencia) {
        String dias="";
        int total_horas=0;
        List<Asistencia> asis=asistenciaAdministrativoMapper.devolver_id_horario();
        asistencia.setCodigo_hor(asis.get(0).getCodigo_hor());
        for(int i=0;i<asistencia.getNumero_dia().length;i++){
            if (asistencia.getTipo_hor().equals("D")){
                dias=dias+asistencia.getNumero_dia()[i];
                total_horas=total_horas+(Integer.parseInt(asistencia.getSalida_dia()[i]) - Integer.parseInt(asistencia.getIngreso_dia()[i]));
            }else{
                dias="8";
                int rebaja=24*60-Integer.parseInt(asistencia.getIngreso_dia()[i]);
                total_horas=total_horas+(rebaja + Integer.parseInt(asistencia.getSalida_dia()[i]));
            }

            asistenciaAdministrativoMapper.insertarHorario(asistencia.getCodigo_hor(), Integer.parseInt(asistencia.getIngreso_dia()[i]) ,
                    Integer.parseInt(asistencia.getSalida_dia()[i]) ,Integer.parseInt(asistencia.getNumero_dia()[i]) );
        };
        int minutos=total_horas%60 ;

        asistenciaAdministrativoMapper.insertarTipoHorario(asistencia.getCodigo_hor(), asistencia.getTolerancia(), (total_horas / 60+":"+minutos),
                Integer.parseInt(asistencia.getLactancia()), Integer.parseInt(dias), asistencia.getDescripcion_hor());



    }

    @Override
    public List<Asistencia> buscarHorarios( String codigo, String tol, String lac) {
           int tol1=Integer.parseInt(tol);

        System.out.println("entro");
        return asistenciaAdministrativoMapper.buscarHorarios(codigo,tol1,lac);
    }

    @Override
    public List<Asistencia> buscarTipoDocumentos() {
        return asistenciaAdministrativoMapper.buscarTipodocumentos();
    }

    @Override
    public List<Asistencia> buscarTipoHorario(String codigo) {
        return asistenciaAdministrativoMapper.buscarTipoHorario(codigo);
    }

    @Override
    public List<Asistencia> selectTipoHorario(String codigoHor) {
        return asistenciaAdministrativoMapper.selectTipoHorario(codigoHor);
    }
}

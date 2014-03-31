package edu.quipu.rrhh.persistence;

import edu.quipu.rrhh.models.ServidorCAS;
import org.apache.ibatis.annotations.Param;
import org.apache.ibatis.annotations.Result;
import org.apache.ibatis.annotations.Results;
import org.springframework.dao.DataAccessException;

import java.util.List;

public interface ServidorCASMapper {

//    @Results(value = {@Result(javaType = ServidorCAS.class),
//            @Result(property = "unidadId", column = "UD_ID"),
//            @Result(property = "ruc", column = "ser_num_ruc"),
//            @Result(property = "paterno", column = "ser_ape_pat"),
//            @Result(property = "materno", column = "ser_ape_mat"),
//            @Result(property = "nombre", column = "ser_nom"),
//            @Result(property = "numeroContrato", column = "t_contrato_numero"),
//            @Result(property = "ultimaAdenda", column = "t_adenda_numero"),
//            @Result(property = "horasCumplir", column = "horas_laboradas"),
//            @Result(property = "minutosTardanza", column = "minutos_laborados"),
//            @Result(property = "monto", column = "monto"),
//            @Result(property = "totalPago", column = "total_pago"),
//            @Result(property = "honorarioMensual", column = "total"),
//            @Result(property = "codigo", column = "ser_cod"),
//            @Result(property = "numeroOperacionCuarta", column = "suspension"),
//            @Result(property = "codigoObservacion", column = "c_ser_cod")})
//    List<ServidorCAS> find(@Param("udid") int udid, @Param("anio") int anio, @Param("mes") int mes, @Param("esFacultad") boolean esFacultad);

    @Results(value = {
            @Result(javaType = ServidorCAS.class),
            @Result(property = "unidadId", column = "UD_ID"),
            @Result(property = "ruc", column = "ser_num_ruc"),
            @Result(property = "paterno", column = "ser_ape_pat"),
            @Result(property = "materno", column = "ser_ape_mat"),
            @Result(property = "nombre", column = "ser_nom"),
            @Result(property = "numeroContrato", column = "t_contrato_numero"),
            @Result(property = "ultimaAdenda", column = "t_adenda_numero"),
            @Result(property = "horasCumplir", column = "horas_laboradas"),
            @Result(property = "minutosTardanza", column = "minutos_laborados"),
            @Result(property = "monto", column = "monto"),
            @Result(property = "totalPago", column = "total_pago"),
            @Result(property = "honorarioMensual", column = "total"),
            @Result(property = "numeroPlanilla", column = "apnum"),
            @Result(property = "planillaCorrelativo", column = "placod"),
            @Result(property = "detallePlanillaCorrelativo", column = "dplacod"),
            @Result(property = "estadoServidor", column = "plaest"),
            @Result(property = "codigo", column = "ser_cod"),
            @Result(property = "numeroOperacionCuarta", column = "suspension"),
            @Result(property = "codigoObservacion", column = "c_ser_cod")})
    List<ServidorCAS> findEnPlanilla(@Param("udid") int udid, @Param("anio") int anio, @Param("mes") int mes, @Param("apnum") String apnum, @Param("esFacultad") boolean esFacultad) throws DataAccessException;

//    @Results(value = {@Result(javaType = ServidorCAS.class),
//            @Result(property = "unidadId", column = "UD_ID"),
//            @Result(property = "ruc", column = "ser_num_ruc"),
//            @Result(property = "paterno", column = "ser_ape_pat"),
//            @Result(property = "materno", column = "ser_ape_mat"),
//            @Result(property = "nombre", column = "ser_nom"),
//            @Result(property = "numeroContrato", column = "t_contrato_numero"),
//            @Result(property = "ultimaAdenda", column = "t_adenda_numero"),
//            @Result(property = "horasCumplir", column = "horas_laboradas"),
//            @Result(property = "minutosTardanza", column = "minutos_laborados"),
//            @Result(property = "monto", column = "monto"),
//            @Result(property = "totalPago", column = "total_pago"),
//            @Result(property = "honorarioMensual", column = "total"),
//            @Result(property = "codigo", column = "ser_cod"),
//            @Result(property = "numeroOperacionCuarta", column = "suspension"),
//            @Result(property = "codigoObservacion", column = "c_ser_cod")})
//    List<ServidorCAS> findSinPlanilla(@Param("udid") int udid, @Param("anio") int anio, @Param("mes") int mes, @Param("esFacultad") boolean esFacultad) throws DataAccessException;
}

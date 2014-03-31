package edu.quipu.rrhh.persistence;


import org.apache.ibatis.annotations.Param;
import org.apache.ibatis.annotations.Result;
import org.apache.ibatis.annotations.Results;
import org.apache.ibatis.annotations.Select;
import edu.quipu.rrhh.models.ServidorGenerico;
import edu.quipu.rrhh.models.ServidorTipo;

import java.util.List;

public interface ServidorTipoMapper {

    @Select(value = "SELECT cod_tip_ser AS cod, " +
            "  des_tip_ser      AS dsc " +
            "FROM datapersuel.tip_servidor " +
            "WHERE trim(des_tip_ser) in ('ADMINISTRATIVO','DOCENTE') " +
            "ORDER BY dsc")
    @Results(value = {
            @Result(javaType = ServidorTipo.class),
            @Result(column = "cod", property = "cod"),
            @Result(column = "dsc", property = "dsc")
    })
    public List<ServidorTipo> findAll();


    @Select(value = "SELECT tip.cod_tip_ser AS cod, " +
            "  tip.des_tip_ser      AS dsc " +
            "FROM datapersuel.tip_servidor tip " +
            "INNER JOIN DATAPERSUEL.tb_tip_gen_tip enl " +
            "ON tip.cod_tip_ser                = enl.cod_tip_ser " +
            "WHERE enl.cod_tip_ser_gen         = #{tipGen.cod} " +
            "AND trim(upper(tip.des_tip_ser)) IN ('ADMINISTRATIVO','DOCENTE') " +
            "ORDER BY dsc")
    @Results(value = {
            @Result(javaType = ServidorTipo.class),
            @Result(column = "cod", property = "cod"),
            @Result(column = "dsc", property = "dsc")
    })
    public List<ServidorTipo> findByTipGen(@Param("tipGen") ServidorGenerico tipGen);


}

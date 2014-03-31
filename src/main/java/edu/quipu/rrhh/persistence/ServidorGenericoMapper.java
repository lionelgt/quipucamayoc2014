package edu.quipu.rrhh.persistence;


import org.apache.ibatis.annotations.Result;
import org.apache.ibatis.annotations.Results;
import org.apache.ibatis.annotations.Select;
import edu.quipu.rrhh.models.ServidorGenerico;

import java.util.List;

public interface ServidorGenericoMapper {

    @Select(value = "SELECT cod_tip_ser_gen AS cod, " +
            "  des_tip_ser_gen      AS dsc " +
            "FROM datapersuel.tip_servidor_gen " +
            "WHERE trim(des_tip_ser_gen) in ('ADMINISTRATIVO','DOCENTE') " +
            "ORDER BY dsc")
    @Results(value = {
            @Result(column = "cod", property = "cod"),
            @Result(column = "dsc", property = "dsc"),
    })
    List<ServidorGenerico> findAll();
}

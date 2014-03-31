package edu.quipu.rrhh.persistence;


import org.apache.ibatis.annotations.Result;
import org.apache.ibatis.annotations.Results;
import org.apache.ibatis.annotations.Select;
import edu.quipu.rrhh.models.ServidorCargo;

import java.util.List;

public interface ServidorCargoMapper {

    @Select(value = "SELECT c_cargo_id     AS cod, " +
            "  t_cargo_descripcion AS dsc " +
            "FROM qpdatagestion.tb_cargos " +
            "ORDER BY dsc")
    @Results(value = {
            @Result(javaType = ServidorCargo.class),
            @Result(column = "cod",property = "cod"),
            @Result(column = "dsc",property = "dsc"),
    })
    public List<ServidorCargo> findAll();
}

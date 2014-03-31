package edu.quipu.rrhh.persistence;

import edu.quipu.rrhh.models.NivelEducacion;
import org.apache.ibatis.annotations.Param;
import org.apache.ibatis.annotations.Result;
import org.apache.ibatis.annotations.Results;
import org.apache.ibatis.annotations.Select;

import java.util.List;

public interface NivelEducacionMapper {

    @Select(value = "select * from DATAPERLIQU.tipo_nivel_est where tipestcod = #{tipEst}")
    @Results(value =  {
            @Result(javaType = NivelEducacion.class),
            @Result(column = "NVLEST",property = "id"),
            @Result(column = "NVLDESC",property = "descripcion")

    })
    public List<NivelEducacion> findAll(@Param("tipEst") String tipEstudio);
}

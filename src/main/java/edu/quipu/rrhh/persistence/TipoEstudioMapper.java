package edu.quipu.rrhh.persistence;

import edu.quipu.rrhh.models.TipoEstudio;
import org.apache.ibatis.annotations.Result;
import org.apache.ibatis.annotations.Results;
import org.apache.ibatis.annotations.Select;

import java.util.List;

public interface TipoEstudioMapper {

    @Select(value = "select * from DATAPERLIQU.tipo_estudio")
    @Results(value =  {
            @Result(javaType = TipoEstudio.class),
            @Result(column = "TIPESTCOD",property = "id"),
            @Result(column = "TIPESTDES",property = "descripcion")

    })
    public List<TipoEstudio> findAll();
}

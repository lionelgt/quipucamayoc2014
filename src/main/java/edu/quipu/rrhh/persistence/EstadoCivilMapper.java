package edu.quipu.rrhh.persistence;
import org.apache.ibatis.annotations.Result;
import org.apache.ibatis.annotations.Results;
import org.apache.ibatis.annotations.Select;
import edu.quipu.rrhh.models.EstadoCivil;

import java.util.List;

public interface EstadoCivilMapper {

    @Select(value = "SELECT cod_estciv AS civId, " +
            "  desc_estciv     AS civDsc " +
            "FROM datapersuel.estado_civil " +
            "ORDER BY civDsc")
    @Results(value = {
            @Result(javaType = EstadoCivil.class),
            @Result(column = "civId", property = "id"),
            @Result(column = "civDsc", property = "descripcion")
    })
    public List<EstadoCivil> findAllCivil();
}


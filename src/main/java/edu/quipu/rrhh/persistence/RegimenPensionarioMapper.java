package edu.quipu.rrhh.persistence;

import org.apache.ibatis.annotations.Result;
import org.apache.ibatis.annotations.Results;
import org.apache.ibatis.annotations.Select;
import edu.quipu.rrhh.models.RegimenPensionario;

import java.util.List;

public interface RegimenPensionarioMapper {

    @Select(value = "SELECT cod_reg_pen AS cod, " +
            "  desc_reg_pen     AS dsc " +
            "FROM datapersuel.reg_pension " +
            "ORDER BY dsc")
    @Results(value = {
            @Result(javaType = RegimenPensionario.class),
            @Result(column = "cod",property = "cod"),
            @Result(column = "dsc",property = "dsc")
    })
    public List<RegimenPensionario> findAll();
}


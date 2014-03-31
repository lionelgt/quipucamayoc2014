package edu.quipu.rrhh.persistence;

import org.apache.ibatis.annotations.Param;
import org.apache.ibatis.annotations.Result;
import org.apache.ibatis.annotations.Results;
import org.apache.ibatis.annotations.Select;
import  edu.quipu.rrhh.models.Origen;

import java.util.List;

public interface OrigenMapper {

    @Select(value = "SELECT oricod, orides FROM QPRODATACONTA.origen WHERE UD_ID=#{udid}")
    @Results(value = {@Result(javaType = Origen.class),
            @Result(property = "origenCodigo", column = "oricod"),
            @Result(property = "origenDescripcion", column = "orides")})
    List<Origen> findByUdid(@Param("udid") int udid);


}

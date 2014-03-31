package edu.quipu.rrhh.persistence;

import edu.quipu.rrhh.models.Perfil;
import org.apache.ibatis.annotations.*;

import java.util.List;

public interface PerfilMapper {

    @Select(value="select PERF_COD, PERF_DESC from QPRODATAQUIPU.tb_perfil where modu_cod=24 ORDER BY PERF_COD")
    @Results(value={
            @Result(javaType =Perfil.class),
            @Result(property = "codigo", column="PERF_COD"),
            @Result(property="descripcion", column="PERF_DESC")

    })
    public List<Perfil> getProfiles();

    @Insert(value="insert into QPRODATAQUIPU.TB_PERFIL (PERF_DESC, PERF_EST, PERF_COD, MODU_COD) values (#{desc},1,perfil_seq.nextval,24)")
    public void addProfile(@Param("desc") String description);

    @Delete(value = "delete QPRODATAQUIPU.TB_PERFIL where perf_cod = #{id} ")
    public void deleteProfile(@Param("id") Integer id);

}
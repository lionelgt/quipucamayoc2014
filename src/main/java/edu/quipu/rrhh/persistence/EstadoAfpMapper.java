package edu.quipu.rrhh.persistence;

import org.apache.ibatis.annotations.Param;
import org.apache.ibatis.annotations.Result;
import org.apache.ibatis.annotations.Results;
import org.apache.ibatis.annotations.Select;
import edu.quipu.rrhh.models.EstadoAfp;
import edu.quipu.rrhh.models.RegimenPensionario;

import java.util.List;
public interface EstadoAfpMapper {
    @Select(value = "SELECT cod_est_afp AS cod, " +
            "  des_est_afp      AS dsc " +
            "FROM datapersuel.estados_afp " +
            "ORDER BY dsc")
    @Results(value = {
            @Result(column = "cod", property = "cod"),
            @Result(column = "dsc", property = "dsc")
    })
    public List<EstadoAfp> findAll();


    @Select(value = "SELECT tb_1.cod_est_afp AS cod, " +
            "  tb_1.des_est_afp      AS dsc " +
            "FROM datapersuel.estados_afp tb_1 " +
            "INNER JOIN datapersuel.tb_reg_pen_est tb_2 " +
            "ON tb_1.cod_est_afp  = tb_2.cod_est_afp " +
            "AND tb_2.cod_reg_pen = #{regimenPensionario.cod} " +
            "ORDER BY dsc")
    @Results(value = {
            @Result(javaType = EstadoAfp.class),
            @Result(column = "cod", property = "cod"),
            @Result(column = "dsc", property = "dsc")
    })
    public List<EstadoAfp> findByRpe(@Param("regimenPensionario") RegimenPensionario regimenPensionario);
}

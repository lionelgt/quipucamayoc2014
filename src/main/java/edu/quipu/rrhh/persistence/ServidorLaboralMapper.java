package edu.quipu.rrhh.persistence;

import org.apache.ibatis.annotations.Param;
import org.apache.ibatis.annotations.Result;
import org.apache.ibatis.annotations.Results;
import org.apache.ibatis.annotations.Select;
import edu.quipu.rrhh.models.ServidorLaboral;

import java.util.List;

public interface ServidorLaboralMapper {

    @Select(value = "SELECT ser_cod        AS cod, " +
            "  ser_est_act         AS estLab, " +
            "  ser_rpe_act         AS regPen, " +
            "  ser_ent_aseg        AS entAse, " +
            "  ser_est_afp         AS estAfp, " +
            "  ser_cat_act         AS cat, " +
            "  ser_con_pla_act     AS conPla, " +
            "  ser_tip_ser_gen     AS tipGen, " +
            "  ser_tip_act         AS tip, " +
            "  ser_tip_pag_act     AS tipPag, " +
            "  ser_cta_ban_act     AS cueBan, " +
            "  ser_fech_reg_lab    AS regLab, " +
            "  ser_num_sis_pri_pen AS numPen " +
            "FROM datapersuel.servidor_estado " +
            "WHERE trim(ser_cod) = trim(#{servidorLaboral.cod}) " +
            "ORDER BY conPla, " +
            "  cat")
    @Results(value = {
            @Result(javaType = ServidorLaboral.class),
            @Result(column = "cod", property = "cod"),
            @Result(column = "estLab", property = "estLab"),
            @Result(column = "regPen", property = "regPen"),
            @Result(column = "entAse", property = "entAse"),
            @Result(column = "estAfp", property = "estAfp"),
            @Result(column = "cat", property = "cat"),
            @Result(column = "conPla", property = "conPla"),
            @Result(column = "tipGen", property = "tipGen"),
            @Result(column = "tip", property = "tip"),
            @Result(column = "tipPag", property = "tipPag"),
            @Result(column = "cueBan", property = "cueBan"),
            @Result(column = "regLab", property = "regLab"),
            @Result(column = "numPen", property = "numPen"),
    })
    public List<ServidorLaboral> findByCod(@Param("servidorLaboral") ServidorLaboral servidorLaboral);

    @Select(value = "{call qpdatagestion.servidor_wkg.sp_grabar_servidor_estado(#{ser.cod}," +
            "#{ser.estLab},#{ser.cat},#{ser.tip},#{ser.regPen},#{ser.cueBan,jdbcType=VARCHAR}," +
            "#{ser.tipPag},#{ser.conPla},#{ser.entAse,jdbcType=VARCHAR},#{ser.tipGen}," +
            "#{ser.regLab},#{ser.estAfp,jdbcType=INTEGER},#{ser.numPen,jdbcType=VARCHAR}) }")
    void save(@Param("ser") ServidorLaboral servidorLaboral);

}

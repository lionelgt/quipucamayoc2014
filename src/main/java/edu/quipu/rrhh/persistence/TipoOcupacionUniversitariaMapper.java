package edu.quipu.rrhh.persistence;

import edu.quipu.rrhh.models.TipOcupacionUni;
import org.apache.ibatis.annotations.Result;
import org.apache.ibatis.annotations.Results;
import org.apache.ibatis.annotations.Select;

import java.util.List;

public interface TipoOcupacionUniversitariaMapper {

    @Select(value = "SELECT c_cod_tipocupuniv AS codTipOcpu, t_dsc_tipocupuniv AS dsdTipOcup FROM datapersuel.tb_tip_ocupac_univ")

    @Results(value = {
            @Result(javaType = TipOcupacionUni.class),
            @Result(column = "codTipOcpu", property = "cod"),
            @Result(column = "dsdTipOcup", property = "descripcion")
    })
    public List<TipOcupacionUni> findAll();
}

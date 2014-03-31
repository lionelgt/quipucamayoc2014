package edu.quipu.rrhh.persistence;


import org.apache.ibatis.annotations.Param;
import org.apache.ibatis.annotations.Result;
import org.apache.ibatis.annotations.Results;
import org.apache.ibatis.annotations.Select;
import edu.quipu.rrhh.models.AdendaCAS;
import edu.quipu.rrhh.models.Unidad;

import java.util.List;

public interface ContratoCASMapper {

    @Select(value = "SELECT * " +
            "FROM " +
            "  (SELECT p.c_plaza_id            AS idplaza, " +
            "    p.t_plaza_codigo              AS codplaza, " +
            "    p.n_id_dep                    AS depplaza, " +
            "    p.n_plaza_estado              AS estplaza, " +
            "    se.ser_cod                    AS idserv, " +
            "    se.ser_ape_pat                AS patserv, " +
            "    se.ser_ape_mat                AS matserv, " +
            "    se.ser_nom                    AS nomserv, " +
            "    se.ser_num_ruc                AS rucserv, " +
            "    cr.c_cargo_id                 AS idcarg, " +
            "    cr.t_cargo_descripcion        AS descarg, " +
            "    ca.c_contratoadenda_id        AS idcont, " +
            "    ca.t_contrato_numero          AS numcont, " +
            "    ca.f_contratoadenda_fecha_ini AS inicont, " +
            "    ca.f_contratoadenda_fecha_fin AS fincont, " +
            "    ca.t_contratoadenda_estado    AS estcont, " +
            "    ca.n_contratoadenda_horas     AS horcont, " +
            "    ca.t_contratoadenda_tipo      AS tipcont, " +
            "    ca.n_monto                    AS moncont, " +
            "    rank() over(partition BY p.c_plaza_id order by ( " +
            "    CASE " +
            "      WHEN ca.f_contratoadenda_fecha_ini IS NULL " +
            "      THEN 1 " +
            "      ELSE 0 " +
            "    END),ca.f_contratoadenda_fecha_ini) AS rank " +
            "  FROM qpdatagestion.tb_plazas p " +
            "  LEFT JOIN qpdatagestion.tb_plazas_historial ph " +
            "  ON p.c_plaza_id = ph.c_plaza_id " +
            "  LEFT JOIN qpdatagestion.tb_contratos_adendas ca " +
            "  ON ph.c_contratoadenda_id = ca.c_contratoadenda_id " +
            "  LEFT JOIN qpdatagestion.tb_cargos cr " +
            "  ON cr.c_cargo_id = ca.c_cargo_id " +
            "  LEFT JOIN datapersuel.servidor se " +
            "  ON ca.ser_cod           = se.ser_cod " +
            "  WHERE p.n_id_dep        = #{uni.udId} " +
            "  AND ca.t_adenda_numero IS NULL " +
            "  GROUP BY p.c_plaza_id , " +
            "    p.t_plaza_codigo , " +
            "    p.n_id_dep , " +
            "    p.n_plaza_estado , " +
            "    se.ser_cod , " +
            "    se.ser_ape_pat , " +
            "    se.ser_ape_mat , " +
            "    se.ser_nom , " +
            "    se.ser_num_ruc , " +
            "    cr.c_cargo_id , " +
            "    cr.t_cargo_descripcion , " +
            "    ca.c_contratoadenda_id , " +
            "    ca.t_contrato_numero , " +
            "    ca.f_contratoadenda_fecha_ini , " +
            "    ca.f_contratoadenda_fecha_fin , " +
            "    ca.t_contratoadenda_estado , " +
            "    ca.n_contratoadenda_horas , " +
            "    ca.t_contratoadenda_tipo , " +
            "    ca.n_monto " +
            "  ORDER BY se.ser_ape_pat, " +
            "    se.ser_ape_mat , " +
            "    se.ser_nom " +
            "  ) a " +
            "WHERE a.rank = 1")
    @Results(value = {
            @Result(javaType = AdendaCAS.class),
            @Result(property = "plazaCAS.id", column = "idplaza"),
            @Result(property = "plazaCAS.cod", column = "codplaza"),
            @Result(property = "plazaCAS.udId", column = "depplaza"),
            @Result(property = "plazaCAS.estado", column = "estplaza"),
            @Result(property = "servidor.codigo", column = "idserv"),
            @Result(property = "servidor.paterno", column = "patserv"),
            @Result(property = "servidor.materno", column = "matserv"),
            @Result(property = "servidor.nombre", column = "nomserv"),
            @Result(property = "servidor.ruc", column = "rucserv"),
            @Result(property = "cargoCAS.id", column = "idcarg"),
            @Result(property = "cargoCAS.dsc", column = "descarg"),
            @Result(property = "id", column = "idcont"),
            @Result(property = "numCont", column = "numcont"),
            @Result(property = "ini", column = "inicont"),
            @Result(property = "fin", column = "fincont"),
            @Result(property = "estado", column = "estcont"),
            @Result(property = "horas", column = "horcont"),
            @Result(property = "tipo", column = "tipcont"),
            @Result(property = "monto", column = "moncont")
    })
    List<AdendaCAS> findByUnidad(@Param("uni") Unidad unidad);


    @Select(value = "SELECT * " +
            "FROM " +
            "  (SELECT p.c_plaza_id            AS idplaza, " +
            "    p.t_plaza_codigo              AS codplaza, " +
            "    p.n_id_dep                    AS depplaza, " +
            "    p.n_plaza_estado              AS estplaza, " +
            "    se.ser_cod                    AS idserv, " +
            "    se.ser_ape_pat                AS patserv, " +
            "    se.ser_ape_mat                AS matserv, " +
            "    se.ser_nom                    AS nomserv, " +
            "    se.ser_num_ruc                AS rucserv, " +
            "    cr.c_cargo_id                 AS idcarg, " +
            "    cr.t_cargo_descripcion        AS descarg, " +
            "    ca.c_contratoadenda_id        AS idcont, " +
            "    ca.t_contrato_numero          AS numcont, " +
            "    ca.f_contratoadenda_fecha_ini AS inicont, " +
            "    ca.f_contratoadenda_fecha_fin AS fincont, " +
            "    ca.t_contratoadenda_estado    AS estcont, " +
            "    ca.n_contratoadenda_horas     AS horcont, " +
            "    ca.t_contratoadenda_tipo      AS tipcont, " +
            "    ca.n_monto                    AS moncont, " +
            "    rank() over(partition BY p.c_plaza_id order by ( " +
            "    CASE " +
            "      WHEN ca.f_contratoadenda_fecha_ini IS NULL " +
            "      THEN 1 " +
            "      ELSE 0 " +
            "    END),ca.f_contratoadenda_fecha_ini) AS rank " +
            "  FROM qpdatagestion.tb_plazas p " +
            "  LEFT JOIN qpdatagestion.tb_plazas_historial ph " +
            "  ON p.c_plaza_id = ph.c_plaza_id " +
            "  LEFT JOIN qpdatagestion.tb_contratos_adendas ca " +
            "  ON ph.c_contratoadenda_id = ca.c_contratoadenda_id " +
            "  LEFT JOIN qpdatagestion.tb_cargos cr " +
            "  ON cr.c_cargo_id = ca.c_cargo_id " +
            "  LEFT JOIN datapersuel.servidor se " +
            "  ON ca.ser_cod           = se.ser_cod " +
            "  WHERE ca.t_contrato_numero        = #{cont.numCont} " +
            "  AND ca.t_adenda_numero IS NULL " +
            "  GROUP BY p.c_plaza_id , " +
            "    p.t_plaza_codigo , " +
            "    p.n_id_dep , " +
            "    p.n_plaza_estado , " +
            "    se.ser_cod , " +
            "    se.ser_ape_pat , " +
            "    se.ser_ape_mat , " +
            "    se.ser_nom , " +
            "    se.ser_num_ruc , " +
            "    cr.c_cargo_id , " +
            "    cr.t_cargo_descripcion , " +
            "    ca.c_contratoadenda_id , " +
            "    ca.t_contrato_numero , " +
            "    ca.f_contratoadenda_fecha_ini , " +
            "    ca.f_contratoadenda_fecha_fin , " +
            "    ca.t_contratoadenda_estado , " +
            "    ca.n_contratoadenda_horas , " +
            "    ca.t_contratoadenda_tipo , " +
            "    ca.n_monto " +
            "  ORDER BY se.ser_ape_pat, " +
            "    se.ser_ape_mat , " +
            "    se.ser_nom " +
            "  ) a " +
            "WHERE a.rank = 1")
    @Results(value = {
            @Result(javaType = AdendaCAS.class),
            @Result(property = "plazaCAS.id", column = "idplaza"),
            @Result(property = "plazaCAS.cod", column = "codplaza"),
            @Result(property = "plazaCAS.udId", column = "depplaza"),
            @Result(property = "plazaCAS.estado", column = "estplaza"),
            @Result(property = "servidor.codigo", column = "idserv"),
            @Result(property = "servidor.paterno", column = "patserv"),
            @Result(property = "servidor.materno", column = "matserv"),
            @Result(property = "servidor.nombre", column = "nomserv"),
            @Result(property = "servidor.ruc", column = "rucserv"),
            @Result(property = "cargoCAS.id", column = "idcarg"),
            @Result(property = "cargoCAS.dsc", column = "descarg"),
            @Result(property = "id", column = "idcont"),
            @Result(property = "numCont", column = "numcont"),
            @Result(property = "ini", column = "inicont"),
            @Result(property = "fin", column = "fincont"),
            @Result(property = "estado", column = "estcont"),
            @Result(property = "horas", column = "horcont"),
            @Result(property = "tipo", column = "tipcont"),
            @Result(property = "monto", column = "moncont")
    })
    List<AdendaCAS> findByNumContrato(@Param("cont") AdendaCAS adendaCAS);

    @Select(value = "{call qpdatagestion.plaza_wkg.sp_remove_contrato( #{cont.numCont} ) }")
    void removeContrato(@Param("cont") AdendaCAS adendaCAS);

}

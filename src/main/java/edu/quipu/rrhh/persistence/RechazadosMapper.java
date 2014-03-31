package edu.quipu.rrhh.persistence;

import org.apache.ibatis.annotations.*;
import org.springframework.dao.DataAccessException;

public interface RechazadosMapper {

    @Insert(value = "INSERT INTO QPRODATAQUIPU.TB_RECHAZADOS VALUES (rec_seq.nextval,#{dni},#{ud},#{modcod}, #{obs}, (select sysdate from dual)) ")
    public  void  add(@Param("dni") String dni, @Param("ud") Integer ud, @Param("modcod") Integer modcod, @Param("obs") String obs) throws DataAccessException;

    @Delete(value = "delete QPRODATAQUIPU.TB_HIST_USU_PERF where est = 0 and c_usuid=#{dni} and modcod=#{modcod}")
    public void delete(@Param("dni") String id, @Param("modcod") Integer modcod) throws DataAccessException;

    @Update(value = "update QPRODATAQUIPU.tb_hist_usu_perf set est=1, f_camb_est=(select sysdate from SYS.dual) where est=3 and c_usuid=#{dni} and modcod=#{modcod}")
    public void update(@Param("dni") String id, @Param("modcod") Integer modcod) throws DataAccessException;

}

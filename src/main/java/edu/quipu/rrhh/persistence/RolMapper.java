package edu.quipu.rrhh.persistence;

import edu.quipu.rrhh.models.Rol;
import edu.quipu.rrhh.models.RolPerfil;
import org.apache.ibatis.annotations.*;
import org.springframework.dao.DataAccessException;

import java.util.List;

public interface RolMapper {


    /*@Select(value="select * from QPRODATAQUIPU.tb_rol_erp")*/
    /*@Select(value=
            "select ROL_ID, DESCRIPCION,(case perf_cod when #{perf_cod} then 1 else 0 end) as ACTIVE from " +
            "(select a.rol_id, descripcion, b.perf_cod, " +
            "case when b.perf_cod IS NULL then NULL else 1 end as active " +
            "from QPRODATAQUIPU.tb_rol_erp a " +
            "LEFT JOIN QPRODATAQUIPU.rol_perfil b ON a.rol_id = b.rol_id order by a.rol_id desc)  d")   */
    /*@Select(value = "select rol_id, descripcion,(case perf_cod when #{perf_cod} then 1 else NULL end) as active from \n" +
            "(select a.rol_id, descripcion, b.perf_cod, \n" +
            "case when b.perf_cod IS NULL then NULL else b.rol_id end as active \n" +
            "from QPRODATAQUIPU.tb_rol_erp a \n" +
            "left JOIN QPRODATAQUIPU.rol_perfil b ON a.rol_id = b.rol_id where b.perf_cod = #{perf_cod} order by a.rol_id desc)  d") */

    @Select(value = "select rol_erp.rol_id, rol_erp.descripcion,(case perf_cod when #{perf_cod} then 1 else 0 end) as active from \n" +
            "(select a.rol_id, descripcion, b.perf_cod, \n" +
            "case when b.perf_cod IS NULL then NULL else b.rol_id end as active \n" +
            "from QPRODATAQUIPU.tb_rol_erp a \n" +
            "left JOIN QPRODATAQUIPU.rol_perfil b ON a.rol_id = b.rol_id where b.perf_cod = #{perf_cod} order by a.rol_id desc)  d right join QPRODATAQUIPU.tb_rol_erp ROL_ERP ON rol_erp.rol_id = d.rol_id order by rol_erp.descripcion asc")

    @Results(value = {
            @Result(javaType = Rol.class),
            @Result(property = "id", column = "ROL_ID"),
            @Result(property = "description", column = "DESCRIPCION"),
            @Result(property = "active", column = "ACTIVE"),


})
    public List<Rol> getRols(@Param("perf_cod") int perfCode) throws DataAccessException;

    @Insert(value="insert into QPRODATAQUIPU.tb_rol_erp values(rol_seq.nextval,#{desc})")
    public void addRol(@Param("desc") String description);

    @Update(value = "update QPRODATAQUIPU.tb_rol_erp set descripcion = #{desc} where rol_id = #{id}")
    public void updateRol(@Param("id") Integer id, @Param("desc") String description)  throws DataAccessException;

    @Delete(value = "delete QPRODATAQUIPU.tb_rol_erp where rol_id = #{id}")
    public void deleteRol(@Param("id") Integer id);

    @Insert(value = "insert into QPRODATAQUIPU.ROL_PERFIL values (#{idRol},#{idPro})")
    void assignRol(@Param("idRol") Integer idRol, @Param("idPro") int idProfile);

    @Select(value="select * from QPRODATAQUIPU.rol_perfil")

    @Results(value = {
            @Result(javaType = RolPerfil.class),
            @Result(property = "rolId", column = "rol_id"),
            @Result(property = "profileId", column = "profile_id")

    })
    public List<RolPerfil> getRolPerfil() throws DataAccessException;

    @Update(value = "update QPRODATAQUIPU.rol_perfil set rol_id = #{idRol} where perf_cod = #{idPerfil}")
    public void updateRolPerfil(@Param("idRol") Integer idRol, @Param("idPerfil") Integer idPerfil)  throws DataAccessException;


    /*Delete perfil de  rolperfil*/
    @Delete(value = "delete QPRODATAQUIPU.rol_perfil where rol_id = #{id}")
    public void deleteRolPerfil(@Param("id") Integer id);

    /*Delete rols fro a profile*/
    @Delete(value = "delete QPRODATAQUIPU.rol_perfil WHERE perf_cod = #{perfCode}")
    public void deleteRolPerfilByPerfCode(@Param("perfCode") Integer perfCode);

}
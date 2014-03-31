package edu.quipu.rrhh.persistence;

import edu.quipu.rrhh.models.DocumentoIdentidad;
import org.apache.ibatis.annotations.Result;
import org.apache.ibatis.annotations.Results;
import org.apache.ibatis.annotations.Select;

import java.util.List;

public interface DocumentoIdentidadMapper {

    @Select(value = "SELECT cod_doc_id AS docId, " +
            "  des_doc_id      AS docDsc, " +
            "  abv_doc_id      AS docAbv " +
            "FROM datapersuel.doc_identidad " +
            "ORDER BY docDsc")
    @Results(value = {
            @Result(javaType = DocumentoIdentidad.class),
            @Result(column = "docId", property = "id"),
            @Result(column = "docDsc", property = "descripcion"),
            @Result(column = "docAbv", property = "abreviatura")
    })
    public List<DocumentoIdentidad> findAll();
}

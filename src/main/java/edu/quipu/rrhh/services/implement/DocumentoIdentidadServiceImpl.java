package edu.quipu.rrhh.services.implement;

import edu.quipu.rrhh.models.DocumentoIdentidad;
import edu.quipu.rrhh.persistence.DocumentoIdentidadMapper;
import edu.quipu.rrhh.services.DocumentoIdentidadService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@Repository
@Transactional
public class DocumentoIdentidadServiceImpl implements DocumentoIdentidadService {

    @Autowired
    private DocumentoIdentidadMapper documentoIdentidadMapper;

    @Override
    public List<DocumentoIdentidad> findAllIdentidad() {
        return documentoIdentidadMapper.findAll();
    }
}

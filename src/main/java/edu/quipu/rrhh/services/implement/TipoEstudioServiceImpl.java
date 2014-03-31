package edu.quipu.rrhh.services.implement;

import edu.quipu.rrhh.models.TipoEstudio;
import edu.quipu.rrhh.persistence.TipoEstudioMapper;
import edu.quipu.rrhh.services.TipoEstudioService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@Repository
@Transactional
public class TipoEstudioServiceImpl implements TipoEstudioService {
    @Autowired
    private TipoEstudioMapper tipoEstudioMapper;

    @Override
    public List<TipoEstudio> findAll() {
        List<TipoEstudio> tiposEstudio=tipoEstudioMapper.findAll();
        return tiposEstudio;
    }

}

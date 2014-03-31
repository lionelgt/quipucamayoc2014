package edu.quipu.rrhh.services.implement;

import edu.quipu.rrhh.models.TipOcupacionUni;
import edu.quipu.rrhh.persistence.TipoOcupacionUniversitariaMapper;
import edu.quipu.rrhh.services.TipOcupacionUniService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@Repository
@Transactional
public class TipOcupacionUniServiceImpl implements TipOcupacionUniService {
    @Autowired
    private TipoOcupacionUniversitariaMapper tipoOcupacionMapper;

    @Override
    public List<TipOcupacionUni> findAllOcupacion() {
        return tipoOcupacionMapper.findAll();
    }
}

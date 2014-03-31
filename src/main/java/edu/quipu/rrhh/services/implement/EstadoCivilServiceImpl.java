package edu.quipu.rrhh.services.implement;

import edu.quipu.rrhh.models.EstadoCivil;
import edu.quipu.rrhh.persistence.EstadoCivilMapper;
import edu.quipu.rrhh.services.EstadoCivilService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@Repository
@Transactional
public class EstadoCivilServiceImpl implements EstadoCivilService{
    @Autowired
    private EstadoCivilMapper estadoCivilMapper;

    @Override
    public List<EstadoCivil> findAllCivil() {
        List<EstadoCivil> estadoCivil=estadoCivilMapper.findAllCivil();
        return estadoCivil;
    }

}

package edu.quipu.rrhh.services.implement;

import edu.quipu.rrhh.models.NivelEducacion;
import edu.quipu.rrhh.persistence.NivelEducacionMapper;
import edu.quipu.rrhh.services.NivelEducacionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@Repository
@Transactional
public class NivelEducacionServiceImpl implements NivelEducacionService {
    @Autowired
    private NivelEducacionMapper nivelEducacionMapper;

    @Override
    public List<NivelEducacion> findAll(String tipEst) {
        List<NivelEducacion> nivelesEducacion = nivelEducacionMapper.findAll(tipEst);
        return nivelesEducacion;
    }

}

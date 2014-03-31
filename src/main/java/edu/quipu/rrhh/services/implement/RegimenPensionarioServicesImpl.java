package edu.quipu.rrhh.services.implement;

import edu.quipu.rrhh.persistence.RegimenPensionarioMapper;
import edu.quipu.rrhh.services.RegimenPensionarioService;
import org.springframework.beans.factory.annotation.Autowired;
import edu.quipu.rrhh.models.RegimenPensionario;
import org.springframework.stereotype.Repository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@Repository
@Transactional
public class RegimenPensionarioServicesImpl implements RegimenPensionarioService {
     @Autowired
    private RegimenPensionarioMapper regimenPensionarioMapper;

    @Override
    public List<RegimenPensionario> findAllRegimen() {
            List<RegimenPensionario> regimen=regimenPensionarioMapper.findAll();
            return  regimen;
    }
}

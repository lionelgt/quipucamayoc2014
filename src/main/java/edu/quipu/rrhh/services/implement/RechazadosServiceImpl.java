package edu.quipu.rrhh.services.implement;

import edu.quipu.rrhh.persistence.RechazadosMapper;
import edu.quipu.rrhh.services.RechazadosService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@Repository
@Transactional
public class RechazadosServiceImpl implements RechazadosService {

    @Autowired
    private RechazadosMapper rechazadosMapper;

    @Override
    public void addRejected(String dni, Integer ud, Integer modcod, String obs) {
        //To change body of implemented methods use File | Settings | File Templates.

        rechazadosMapper.add(dni, ud, modcod, obs);
    }

    @Override
    public void removeRejected(String dni, Integer modcod){
        rechazadosMapper.delete(dni,modcod);
    }

    @Override
    public void updateRejected(String dni, Integer modcod){
        rechazadosMapper.update(dni,modcod);
    }

}

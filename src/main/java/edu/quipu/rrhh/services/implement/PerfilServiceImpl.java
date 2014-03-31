package edu.quipu.rrhh.services.implement;

import edu.quipu.rrhh.models.Perfil;
import edu.quipu.rrhh.persistence.PerfilMapper;
import edu.quipu.rrhh.services.PerfilService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@Repository
@Transactional
public class PerfilServiceImpl implements PerfilService {

    @Autowired
    public PerfilMapper perfilMapper;

    @Override
    public List<Perfil> getProfiles() {
        return perfilMapper.getProfiles();
    }
    @Override
    public void addProfile(String description){
        perfilMapper.addProfile(description);
    }

    @Override
    public void deleteProfile(Integer id){
        perfilMapper.deleteProfile(id);
    }
}

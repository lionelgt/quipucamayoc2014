package edu.quipu.rrhh.services.implement;

import edu.quipu.rrhh.models.Rol;
import edu.quipu.rrhh.models.RolPerfil;
import edu.quipu.rrhh.persistence.RolMapper;
import edu.quipu.rrhh.services.RolService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@Repository
@Transactional
public class RolServiceImpl implements RolService {

    @Autowired
    public RolMapper rolMapper;

    @Override
    public List<Rol> getRols(int perfCode) {
        //return null;  //To change body of implemented methods use File | Settings | File Templates.
        return rolMapper.getRols(perfCode);
    }

    @Override
    public void addRol(String description){
        rolMapper.addRol(description);
    }

    @Override
    public void updateRol(Integer id, String description){
        rolMapper.updateRol(id, description);
    }

    @Override
    public void deleteRol(Integer id){
        rolMapper.deleteRol(id);
    }

    @Override
    public void assignRol(Integer idRol, int idProfile){
        rolMapper.assignRol(idRol,idProfile);
    }

    @Override
    public List<RolPerfil> getRolPerfil(){
        return rolMapper.getRolPerfil();
    }

    @Override
    public void updateRolPerfil(Integer idRol, Integer idPerfil){
        rolMapper.updateRolPerfil(idRol, idPerfil);
    }


    @Override
    public void deleteRolPerfil(Integer id){
        rolMapper.deleteRolPerfil(id);
    }

    @Override
    public void deleteRolPerfilByPerfCode(Integer id){
        rolMapper.deleteRolPerfilByPerfCode(id);
    }
}

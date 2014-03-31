package edu.quipu.rrhh.services;

import edu.quipu.rrhh.models.Rol;
import edu.quipu.rrhh.models.RolPerfil;

import java.util.List;

public interface RolService {

    public List<Rol> getRols(int perfCode);
    public void addRol(String description);
    public void updateRol(Integer id, String description);
    public void deleteRol(Integer id);
    public void assignRol(Integer idRol, int idProfile);
    public List<RolPerfil> getRolPerfil();
    public void updateRolPerfil(Integer idRol, Integer idPerfil);
    public void deleteRolPerfil(Integer id);
    public void deleteRolPerfilByPerfCode(Integer id);

}

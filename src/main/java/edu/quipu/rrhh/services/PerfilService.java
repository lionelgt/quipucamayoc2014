package edu.quipu.rrhh.services;

import edu.quipu.rrhh.models.Perfil;

import java.util.List;

public interface PerfilService {

    public List<Perfil> getProfiles();
    public void addProfile(String description);
    public void deleteProfile(Integer id);



}

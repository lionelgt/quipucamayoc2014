package edu.quipu.rrhh.services;

import edu.quipu.rrhh.models.NivelEducacion;

import java.util.List;

public interface NivelEducacionService {
    List<NivelEducacion> findAll(String tipEst);
}

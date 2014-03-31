package edu.quipu.rrhh.services;


import edu.quipu.rrhh.models.EstadoAfp;
import edu.quipu.rrhh.models.RegimenPensionario;

import java.util.List;

public interface EstadoAFPService {
    List<EstadoAfp> FindAllAfp(RegimenPensionario regimenPensionario);
}


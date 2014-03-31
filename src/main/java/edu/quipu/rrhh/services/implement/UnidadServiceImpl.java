package edu.quipu.rrhh.services.implement;

import edu.quipu.rrhh.models.Origen;
import edu.quipu.rrhh.models.Unidad;
import edu.quipu.rrhh.persistence.OrigenMapper;
import edu.quipu.rrhh.persistence.UnidadMapper;
import edu.quipu.rrhh.services.UnidadService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class UnidadServiceImpl implements UnidadService {

    @Autowired
    private UnidadMapper unidadMapper;

    @Autowired
    private OrigenMapper origenMapper;

    @Override
    public boolean unidadEsFacultad(int codigoUnidad) {
        return unidadMapper.findByUdid(codigoUnidad).getUdCod().substring(0, 1).equalsIgnoreCase("F");
    }

    @Override
    public Unidad findAll() {

        List<Unidad> nvl1 = new ArrayList<>();
        List<Unidad> nvl2 = new ArrayList<>();
        List<Unidad> nvl3 = new ArrayList<>();
        List<Unidad> nvl4 = new ArrayList<>();

        Unidad unmsm = new Unidad();
        unmsm.setDsc("UNMSM");
        unmsm.setUnidades(nvl1);

        for (Unidad unidad : unidadMapper.findHastaNivel2()) {
            if (unidad.getNivel() == 1) {
                nvl1.add(unidad);
                nvl2 = new ArrayList<>();
                unidad.setUnidades(nvl2);
            } else if (unidad.getNivel() == 2) {
                nvl2.add(unidad);
                nvl3 = new ArrayList<>();
                unidad.setUnidades(nvl3);
            } else if (unidad.getNivel() == 3) {
                nvl3.add(unidad);
                nvl4 = new ArrayList<>();
                unidad.setUnidades(nvl4);
            } else if (unidad.getNivel() == 4) {
                nvl4.add(unidad);
            }
        }

        return unmsm;
    }

    @Override
    public List<Origen> buscarOrigenes(int udId) {
        return origenMapper.findByUdid(udId);
    }
}

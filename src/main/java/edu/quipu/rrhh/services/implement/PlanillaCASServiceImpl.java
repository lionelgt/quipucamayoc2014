package edu.quipu.rrhh.services.implement;

import edu.quipu.rrhh.models.PlanillaCAS;
import edu.quipu.rrhh.persistence.PlanillaCASMapper;
import edu.quipu.rrhh.persistence.UnidadMapper;
import edu.quipu.rrhh.services.PlanillaCASService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;


@Service
public class PlanillaCASServiceImpl implements PlanillaCASService {

    @Autowired
    private PlanillaCASMapper planillaCASMapper;

    @Autowired
    private UnidadMapper unidadMapper;

    @Override
    public List<PlanillaCAS> obtenerPlanillasCAS(int udid, int anio, int mes, int perfil) {
        List<PlanillaCAS> planillas;
        if(perfil==0)
            planillas= planillaCASMapper.findConYSinServidores(udid, anio, mes);
        else
            planillas= planillaCASMapper.findConServidores(udid, anio, mes);
        return planillas;//Verificar perfil
    }

   /* @Override
    public List<PlanillaCAS> obtenerPlanillasCASVacias(int udid, int anio,
                                                       int mes) {
        return planillaCASMapper.findSinServidores(udid, anio, mes);
    }

    @Override
    public List<PlanillaCAS> obtenerPlanillasCASConMontos(int anio, int mes) {
        return null;
    }

    @Override
    public PlanillaCAS obtenerPlanillaCAS(int anio, int mes, String planilla) {
        return planillaCASMapper.find(anio, mes, planilla);
    }

    @Override
    @Transactional
    public void agregarServidorAPlanilla(int udid, int anio, int mes,
                                         ServidorCAS servidorCAS, String origen, String planilla) {
        planillaCASMapper.createPlanillaNueva(udid, anio, mes, servidorCAS.getRuc().trim(), planilla);
        planillaCASMapper.createDetallePlanilla(udid, anio, mes, servidorCAS.getTotalPago(), servidorCAS.getMonto(), servidorCAS.getNumeroOperacionCuarta(), planilla);
        if (servidorCAS.getNumeroOperacionCuarta().trim().compareToIgnoreCase("NO") == 0 && servidorCAS.getHonorarioMensual() > 1500) {
            planillaCASMapper.createDetallePlanillaImpuesto(udid, anio, mes, (servidorCAS.getTotalPago() / 10), planilla);
        }
    }

    @Override
    public boolean existeDetallePlanillaxPlanilla(int udid, int anio, int mes,
                                                  String apnum) {
        int tamanio = planillaCASMapper.existeDetallePlanillaxPlanilla(udid, anio, mes, apnum);
        if (tamanio != 0)
            return true;
        return false;
    }

    @Override
    @Transactional
    public void generarPlanillas(int udid, int anios, int mes,
                                 List<ServidorCAS> servidoresCAS, String origen, String planilla,
                                 String[] servidoresSeleccionadosRUC) {
        boolean band = false;
        //cambia el estado de apertura_planilla a 'P' (por validar en control previo)
        updateAperturaPlanilla('P', anios, mes, udid, origen, planilla);
        //inserta o updatea segun el caso en las tablas planilla y detalle planilla para terminar con la creacion de planillas
        if (planillaCASMapper.existeDetallePlanillaxPlanilla(udid, anios, mes, planilla) > 0) {
            System.out.println("Updates por que ya existen datos en planilla y detalle planilla");
            for (int i = 0; i < servidoresCAS.size(); i++) {
                if (servidoresCAS.get(i).getEstadoServidor().compareToIgnoreCase("N") == 0) {
                    band = false;
                    for (int j = 0; j < servidoresSeleccionadosRUC.length; j++) {
                        if (servidoresCAS.get(i).getRuc().compareToIgnoreCase(servidoresSeleccionadosRUC[j]) == 0) {
                            System.out.println("Servidores a updatear: " + servidoresCAS.get(i).getRuc());

                            planillaCASMapper.updatePlanilla(servidoresCAS.get(i).getRuc(), anios, servidoresCAS.get(i).getNumeroPlanilla(), servidoresCAS.get(i).getPlanillaCorrelativo(), 'P');
                            planillaCASMapper.updateDetallePlanilla(udid, servidoresCAS.get(i).getTotalPago(), servidoresCAS.get(i).getMonto(), servidoresCAS.get(i).getNumeroOperacionCuarta(), anios, servidoresCAS.get(i).getNumeroPlanilla(), servidoresCAS.get(i).getPlanillaCorrelativo(), servidoresCAS.get(i).getDetallePlanillaCorrelativo());
                            planillaCASMapper.deleteDetallePlanillaImpuesto(anios, servidoresCAS.get(i).getNumeroPlanilla(), servidoresCAS.get(i).getPlanillaCorrelativo(), servidoresCAS.get(i).getDetallePlanillaCorrelativo());
                            if (servidoresCAS.get(i).getNumeroOperacionCuarta().trim().compareToIgnoreCase("NO") == 0 && servidoresCAS.get(i).getHonorarioMensual() > 1500) {
                                planillaCASMapper.insertDetallePlanillaImpuesto2(anios, servidoresCAS.get(i).getPlanillaCorrelativo(), servidoresCAS.get(i).getDetallePlanillaCorrelativo(), (servidoresCAS.get(i).getTotalPago() / 10), planilla);
                            }
                            band = true;
                        }
                    }
                    if (!band) {
                        System.out.println("Servidores a deletear: " + servidoresCAS.get(i).getRuc());
                        planillaCASMapper.deleteDetallePlanillaImpuesto(anios, servidoresCAS.get(i).getNumeroPlanilla(), servidoresCAS.get(i).getPlanillaCorrelativo(), servidoresCAS.get(i).getDetallePlanillaCorrelativo());
                        planillaCASMapper.deleteDetallePlanilla(anios, servidoresCAS.get(i).getNumeroPlanilla(), servidoresCAS.get(i).getPlanillaCorrelativo(), servidoresCAS.get(i).getDetallePlanillaCorrelativo(), udid);
                        planillaCASMapper.deletePlanilla(anios, servidoresCAS.get(i).getNumeroPlanilla(), servidoresCAS.get(i).getPlanillaCorrelativo(), servidoresCAS.get(i).getRuc());

                    }
                }
            }

        } else {
            System.out.println("Inserts por que no existen planillas");
            for (int i = 0; i < servidoresCAS.size(); i++) {
                for (int j = 0; j < servidoresSeleccionadosRUC.length; j++) {
                    if (servidoresCAS.get(i).getRuc().compareToIgnoreCase(servidoresSeleccionadosRUC[j]) == 0) {
                        System.out.println("Servidores a insertar: " + servidoresCAS.get(i).getRuc());
                        planillaCASMapper.createPlanillaControlPrevio(udid, anios, mes, servidoresCAS.get(i).getRuc().trim(), planilla);
                        planillaCASMapper.createDetallePlanilla(udid, anios, mes, servidoresCAS.get(i).getTotalPago(), servidoresCAS.get(i).getMonto(), servidoresCAS.get(i).getNumeroOperacionCuarta(), planilla);
                        if (servidoresCAS.get(i).getNumeroOperacionCuarta().trim().compareToIgnoreCase("NO") == 0 && servidoresCAS.get(i).getHonorarioMensual() > 1500) {
                            planillaCASMapper.createDetallePlanillaImpuesto(udid, anios, mes, (servidoresCAS.get(i).getTotalPago() / 10), planilla);
                        }
                    }
                }
            }
        }
    }*/

    @Override
    @Transactional
    public void cambiarEstadoPlanillas(char plaest, int udid, int anios,int mes, String[] rucs,String [] numerodeplanilla,String[] planillacorrelativo, String origen,
                                       String planilla) {
        updateAperturaPlanilla(plaest, anios, mes, udid, origen, planilla);
        for (int i = 0; i <rucs.length; i++) {
            System.out.println(rucs[i]+" "+numerodeplanilla[i]+" "+planillacorrelativo[i]+" "+plaest+" "+origen+" "+planilla+" "+udid);
            planillaCASMapper.updatePlanilla(rucs[i], anios, numerodeplanilla[i], planillacorrelativo[i], plaest);
            System.out.println("actualizo");
        }
    }

    @Override
    @Transactional
    public void crearAperturaPlanilla(int anio, int mes, String origen, int udid) {
        planillaCASMapper.createAperturaPlanilla(anio, mes, origen, udid);
    }

    @Override
    @Transactional
    public void updateAperturaPlanilla(char apest, int anio, int mes,int udid, String origen, String planilla) {
        if (unidadMapper.findByUdid(udid).getUdCod().substring(0, 3).compareToIgnoreCase("F06") == 0) {
            planillaCASMapper.updateAperturaPlanilla(apest, anio, mes, udid, origen, planilla);
        } else {
            planillaCASMapper.updateAperturaPlanilla(apest, anio, mes, udid, "OR001", planilla);
        }
    }
    /*
    @Override
    public boolean existenPlanillasVacias(int unidadId, int anio, int mes) {
        List<PlanillaCAS> l = obtenerPlanillasCASVacias(unidadId, anio, mes);
        boolean existen = false;
        if (l.size() != 0) {
            existen = true;
        }
        return existen;
    }
*/

}

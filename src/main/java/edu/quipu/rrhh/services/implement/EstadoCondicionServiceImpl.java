package edu.quipu.rrhh.services.implement;


import edu.quipu.rrhh.models.EstadoCondicion;
import edu.quipu.rrhh.models.Servidor;
import edu.quipu.rrhh.persistence.EstadoCondicionMapper;
import edu.quipu.rrhh.services.EstadoCondicionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.*;

@Service
public class EstadoCondicionServiceImpl implements EstadoCondicionService{

    @Autowired
    EstadoCondicionMapper estadoCondicionMapper;

    @Override
    public List<Servidor> listarServidores(){
        return  estadoCondicionMapper.listarServidores();
    }

    @Override
    public List<EstadoCondicion> categoria() {
        return estadoCondicionMapper.categoria();
    }

    @Override
    public List<EstadoCondicion> categoriaprof(Integer valor1, Integer valor2){
        List<EstadoCondicion> estadoCondi = estadoCondicionMapper.categoriaprof(valor1, valor2);
        return estadoCondi;
    }


    @Override
    public List<EstadoCondicion> estado() {
        return estadoCondicionMapper.estado();
    }

    @Override
    public List<EstadoCondicion> tipo() {
        return estadoCondicionMapper.tipo();
    }

    /*@Override
    public List<EstadoCondicion> dependencia() {
        return estadoCondicionMapper.dependencia();
    }*/

    @Override
    public List<EstadoCondicion> regimen() {
        return estadoCondicionMapper.regimen();
    }

    @Override
    public List<EstadoCondicion> entidad() {
        return estadoCondicionMapper.entidad();
    }

    @Override
    public List<EstadoCondicion> estadoafp() {
        return estadoCondicionMapper.estadoafp();
    }

    @Override
    public List<EstadoCondicion> tipopago(){
        return estadoCondicionMapper.tipopago();
    }

    @Override
    public  List<EstadoCondicion> condpla(){
        return estadoCondicionMapper.condpla();
    }

    @Override
    public List<EstadoCondicion> buscarcondlab(String cod, Integer numest) {
        List<EstadoCondicion> estadoCond=estadoCondicionMapper.buscarcondlab(cod, numest);
        return estadoCond;
    }
    @Override
    public List<EstadoCondicion>  buscarcondaseg(String cod, Integer numest){
        List<EstadoCondicion> estadous=estadoCondicionMapper.buscarcondaseg(cod, numest);
        return estadous;
    }

    @Override
    public List<EstadoCondicion>  buscardep(String cod, Integer numest){
        List<EstadoCondicion> estadodep=estadoCondicionMapper.buscardep(cod,numest);
        return estadodep;
    }

    @Override
    public List<EstadoCondicion> buscarbanco(String cod, Integer numest){
        List<EstadoCondicion> estadoBanc=estadoCondicionMapper.buscarbanco(cod, numest);
        return estadoBanc;
    }

    @Override
    public List<EstadoCondicion> buscarcondpla(String cod, Integer numest){
        List<EstadoCondicion> estadocondpla=estadoCondicionMapper.buscarcondpla(cod,numest);
        return estadocondpla;
    }


    @Override
    public List<EstadoCondicion> listar_resolucion(String codigo, Integer numserest){
        List<EstadoCondicion> estadoResol=estadoCondicionMapper.listar_resolucion(codigo, numserest);
        return estadoResol;
    }

    @Override
    public void addCondLab(String cod, Integer numserest, String numres, Integer codest, String codcat, Integer codtip){
        estadoCondicionMapper.addcondlab(cod,numserest,numres,codest,codcat,codtip);
    }

    @Override
    public void addAlertPend(String codigo, Integer numserest, Integer tipalert, String email){
        estadoCondicionMapper.addalertpend(codigo,numserest,tipalert,email);
    }

    @Override
    public void addCondAseg(String codigo, Integer numserest, String numres1, Integer regpensionario, String numsispen, Integer entasegurado, Integer estadoafp){
        estadoCondicionMapper.addconaseg(codigo, numserest, numres1, regpensionario, numsispen, entasegurado, estadoafp);
    }

    @Override
    public void adddep(String codigo, Integer numserest, String numres1, String udcod){
        estadoCondicionMapper.adddep(codigo,numserest,numres1,udcod);
    }

    @Override
    public void addPagoBanco(String codigo, Integer numserest, String ctabanco, Integer codtippago){
        estadoCondicionMapper.addpagobanco(codigo, numserest, ctabanco, codtippago);
    }

    @Override
    public void addCondPla(String codigo, Integer numserest, String numres1, Integer codcond, String fechcese, String obser){
        estadoCondicionMapper.addcondpla(codigo,numserest,numres1,codcond,fechcese,obser);
    }


}

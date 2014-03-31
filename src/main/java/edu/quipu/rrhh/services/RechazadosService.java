package edu.quipu.rrhh.services;

public interface RechazadosService {

    public  void addRejected(String dni, Integer ud, Integer modcod, String obs);
    public void removeRejected(String dni, Integer modcod);
    public void updateRejected(String dni, Integer modcod);

}

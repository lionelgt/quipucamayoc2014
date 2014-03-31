package edu.quipu.rrhh.services;

import edu.quipu.rrhh.models.WorkerEntity;

public interface WorkerEntityService {
    public WorkerEntity findWorker(String id);
    public WorkerEntity validationDni(String id);
    public void addUser(String dni, String email, String fullname, String lastname);
    public void addHistUserPerf(String dni, int dependencyId,String email);
    public void updateStateHistUsuPerf(String id);
    public WorkerEntity findHistUser(String dni);
    public WorkerEntity findEstHistUser(String dni);

    void deleteUserHistUsu(String id);
}

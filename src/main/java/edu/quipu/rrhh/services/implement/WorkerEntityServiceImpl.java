package edu.quipu.rrhh.services.implement;

import edu.quipu.rrhh.models.WorkerEntity;
import edu.quipu.rrhh.persistence.WorkerEntityMapper;
import edu.quipu.rrhh.services.WorkerEntityService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@Repository
@Transactional
public class WorkerEntityServiceImpl implements WorkerEntityService {

    @Autowired
    public WorkerEntityMapper workerEntityMapper;

    @Override
    public WorkerEntity findWorker(String id) {
        WorkerEntity worker=workerEntityMapper.findWorker(id);
        return worker;
    }

    @Override
    public void addUser(String dni,String email,String fullname,String lastname) {
        workerEntityMapper.addUser(dni,email,fullname,lastname);
    }
    @Override
    public void addHistUserPerf(String dni,int dependencyId,String email) {
        System.out.println("long: "+dni.length());
        workerEntityMapper.addHistUserPerf(dni,dependencyId,email);
    }
    @Override
    public WorkerEntity validationDni(String id) {
        WorkerEntity worker=workerEntityMapper.validationDni(id);
        return worker;
    }
    @Override
    public void updateStateHistUsuPerf(String id){
        workerEntityMapper.updateStateHistUsuPerf(id+"  ");
    }

    @Override
    public WorkerEntity findHistUser(String dni){
        WorkerEntity worker = workerEntityMapper.findHistUser(dni);
        return worker;
    }

    @Override
    public WorkerEntity findEstHistUser(String dni){
        WorkerEntity worker =  workerEntityMapper.findEstHistUser(dni);
        return  worker;
    }

    @Override
    public void deleteUserHistUsu(String id) {
        workerEntityMapper.deleteUserHistUsu(id);
    }
}

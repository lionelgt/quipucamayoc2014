package edu.quipu.rrhh.persistence;

import edu.quipu.rrhh.models.WorkerEntity;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.testng.AbstractTestNGSpringContextTests;
import org.testng.Assert;
import org.testng.annotations.Test;

@ContextConfiguration(locations = "/beans.xml")
public class WorkerEntityMapperTest extends AbstractTestNGSpringContextTests {
    @Autowired
    private WorkerEntityMapper workerEntityMapper;

    @Test
    public void showWorkerByIdWhenIsValid() {
        String dni = "10138447  ";
        WorkerEntity worker = workerEntityMapper.findWorker(dni);
        System.out.print(worker.getName());
        Assert.assertNotNull(worker);
        Assert.assertNotNull(worker.getName());
        Assert.assertNotNull(worker.getFirstLastName());
        Assert.assertNotNull(worker.getSecondLastName());
        Assert.assertNotNull(worker.getStateDescription());
        Assert.assertNotNull(worker.getCategoryDescription());
        Assert.assertNotNull(worker.getCategory());
        Assert.assertNotNull(worker.getDependency());

    }

    @Test
    public void showWorkerByIdWhenIsNotValid() {
        String dni = "55555555  ";
        WorkerEntity worker = workerEntityMapper.findWorker(dni);
        Assert.assertNull(worker);

    }
}

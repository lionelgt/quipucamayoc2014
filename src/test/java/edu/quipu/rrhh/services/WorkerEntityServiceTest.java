package edu.quipu.rrhh.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.testng.AbstractTestNGSpringContextTests;
import org.testng.annotations.Test;

import java.util.ArrayList;
import java.util.Collection;

@ContextConfiguration(locations = "/beans.xml")
public class WorkerEntityServiceTest extends AbstractTestNGSpringContextTests {

    @Autowired
    private WorkerEntityService workerEntityService;

    @Test
    public void getElementFromWorkers() {
        /*String dni = "06708651  ";
        WorkerEntity worker = workerEntityService.findWorker(dni);
        Assert.assertNotNull(worker);
        Assert.assertNotNull(worker.getName());
        Assert.assertNotNull(worker.getFirstLastName());
        Assert.assertNotNull(worker.getSecondLastName());
        Assert.assertNotNull(worker.getCategory());
        Assert.assertNotNull(worker.getCategoryDescription());
        Assert.assertNotNull(worker.getDependency());
        Assert.assertNotNull(worker.getStateDescription());*/

        Collection<? extends GrantedAuthority> grantedAuthorities = null;
        //Collection<GrantedAuthority> ga =
        ArrayList<GrantedAuthority> al = (ArrayList < GrantedAuthority >)( (Collection<GrantedAuthority>) grantedAuthorities);
        for(int i=0; i<al.size(); i++){
            System.out.println(al.get(0).getAuthority());
        }





    }


}

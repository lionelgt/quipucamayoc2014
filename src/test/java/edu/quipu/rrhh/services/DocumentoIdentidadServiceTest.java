package edu.quipu.rrhh.services;

import edu.quipu.rrhh.models.DocumentoIdentidad;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.testng.AbstractTestNGSpringContextTests;
import org.testng.Assert;
import org.testng.annotations.Test;

import java.util.List;

@ContextConfiguration(locations = "/beans.xml")
public class DocumentoIdentidadServiceTest extends AbstractTestNGSpringContextTests {

    @Autowired
    private DocumentoIdentidadService documentoIdentidadService;

    @Test
    public void traeTodosLosEstados() {
        List<DocumentoIdentidad> estados = documentoIdentidadService.findAllIdentidad();
        Assert.assertNotNull(estados);
        Assert.assertNotNull(estados.get(0));
        Assert.assertNotNull(estados.get(0).getDescripcion());
    }
}
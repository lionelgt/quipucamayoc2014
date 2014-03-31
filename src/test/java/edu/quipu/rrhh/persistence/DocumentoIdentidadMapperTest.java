package edu.quipu.rrhh.persistence;


import edu.quipu.rrhh.models.DocumentoIdentidad;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.testng.AbstractTestNGSpringContextTests;
import org.testng.Assert;
import org.testng.annotations.Test;

import java.util.List;

@ContextConfiguration(locations = "/beans.xml")
public class DocumentoIdentidadMapperTest extends AbstractTestNGSpringContextTests {

    @Autowired
    private DocumentoIdentidadMapper documentoIdentidadMapper;

    @Test
    public void traeTodosLosEstados() {
        List<DocumentoIdentidad> estados = documentoIdentidadMapper.findAll();
        Assert.assertNotNull(estados);
        Assert.assertNotNull(estados.get(0));
        Assert.assertNotNull(estados.get(0).getDescripcion());
    }
}

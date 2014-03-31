define(['backbone'], function (Backbone) {

    var Servidor = Backbone.Model.extend({
        className: 'edu.quipu.rrhh.models.Servidor',
        url: 'rest/cas/servidor',
        validation: {
            codigo: {
                required: true,
                msg: 'Campo requerido.'
            },
            materno: {
                required: true,
                msg: 'Campo requerido.'
            },
            paterno: {
                required: true,
                msg: 'Campo requerido.'
            },
            nombre: {
                required: true,
                msg: 'Campo requerido.'
            },
            numDoc: {
                required: true,
                msg: 'Campo requerido.'
            },
            nacimiento: {
                required: true,
                msg: 'Campo requerido.'
            },
            fechaInUnmsm: {
                required: true,
                msg: 'Campo requerido.'
            },
            domicilio: {
                required: true,
                msg: 'Campo requerido.'
            }

        }
    });

    return Servidor;
});
define(['backbone'], function (Backbone) {

    var UpdateServidor = Backbone.Model.extend({
        className: 'edu.quipu.rrhh.models.TrabajadorResolucion',
        url: '/rest/resoluciones/updateServidor'

//        idAttribute: "id"
    });

    return UpdateServidor;
});


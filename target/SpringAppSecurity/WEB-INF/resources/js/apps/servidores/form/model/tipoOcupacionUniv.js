define(['backbone'], function (Backbone) {

    var TipoOcupacion = Backbone.Model.extend({
        defaults: {
            name: 'edu.quipu.rrhh.models.TipoOcupacionUni'
        }
    });

    return TipoOcupacion;
});
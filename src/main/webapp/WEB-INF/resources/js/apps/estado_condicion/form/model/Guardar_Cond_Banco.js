define(['backbone'], function (Backbone) {

    var guardarCondBanco = Backbone.Model.extend({

        className: 'edu.quipu.rrhh.models.EstadoCondicion'

    });

    return guardarCondBanco;
});
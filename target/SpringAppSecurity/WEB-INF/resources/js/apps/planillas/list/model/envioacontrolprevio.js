define(['backbone'], function (Backbone) {

    var EnvioaControlPrevio = Backbone.Model.extend({
        className: 'edu.quipu.rrhh.models.EnvioDeServidoresaControlPrevio',
        url: '/api/planillasCAS/updateEstadoServidor' ,
        idAttribute: "anio"
    });

    return EnvioaControlPrevio;
});

define(['backbone'], function (Backbone) {

    var UpdateEstadoPerfil = Backbone.Model.extend({
        className: 'edu.quipu.rrhh.models.Solicitud',
        url: '/api/solicitudes/update'

    });

    return UpdateEstadoPerfil;
});

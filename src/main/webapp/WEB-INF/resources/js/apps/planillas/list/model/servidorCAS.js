define(['backbone'], function (Backbone) {

    var ServidorCAS = Backbone.Model.extend({
        className: 'edu.quipu.rrhh.models.ServidorCAS',
        url: '/api/servidoresCAS'
    });

    return ServidorCAS;
});
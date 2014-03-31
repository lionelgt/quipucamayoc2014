define(['backbone', 'apps/servidores/form/model/estadocivil'], function (Backbone, EstadoCivil) {

    var EstadosCiviles = Backbone.Collection.extend({

        // Reference to this collection's model.
        model: EstadoCivil,
        url: 'rest/cas/serv/estadosciviles'

    });
    return EstadosCiviles;
});
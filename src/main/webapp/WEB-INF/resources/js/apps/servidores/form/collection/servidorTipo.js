define(['backbone', 'apps/servidores/form/model/servidorTipo'], function (Backbone, ServidorTipo) {

    var ServidorTipos = Backbone.Collection.extend({

        // Reference to this collection's model.
        model: ServidorTipo,
        url: 'rest/cas/serv/servidortipo'

    });
    return ServidorTipos;
});

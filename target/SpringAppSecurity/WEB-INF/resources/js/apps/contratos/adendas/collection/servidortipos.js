define(['backbone', 'apps/contratos/adendas/model/servidortipo'], function (Backbone, ServidorTipo) {

    var ServidorTipos = Backbone.Collection.extend({

        // Reference to this collection's model.
        model: ServidorTipo,
        url: 'rest/cas/serv/servidortipos'

    });
    return ServidorTipos;
});
define(['backbone', 'apps/contratos/adendas/model/servidorcargo'], function (Backbone, ServidorCargo) {

    var ServidorCargos = Backbone.Collection.extend({

        // Reference to this collection's model.
        model: ServidorCargo,
        url: 'rest/cas/serv/servidorcargos'

    });
    return ServidorCargos;
});
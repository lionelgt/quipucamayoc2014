define(['backbone', 'apps/estado_condicion/form/model/listar_servidor'], function (Backbone, Servidor) {

    var listarServidor = Backbone.Collection.extend({

        // Reference to this collection's model.
        model: Servidor,
        url: 'api/estado_condicion/listar'
    });
    return listarServidor;
});

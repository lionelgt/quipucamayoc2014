define(['backbone', 'apps/estado_condicion/form/model/listar_servidor'], function (Backbone, ListarServidor) {

    var listarServidor = Backbone.Collection.extend({

        // Reference to this collection's model.
        model: ListarServidor,
        url: 'api/estado_condicion/listar'
    });
    return listarServidor;
});

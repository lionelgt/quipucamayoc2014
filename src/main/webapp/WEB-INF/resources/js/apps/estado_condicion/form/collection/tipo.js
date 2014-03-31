define(['backbone', 'apps/estado_condicion/form/model/tipo'], function (Backbone, TipoModel) {

    var Tipo = Backbone.Collection.extend({

        // Reference to this collection's model.
        model: TipoModel,
        url: 'api/estado_condicion/tipo'
    });
    return Tipo;
});

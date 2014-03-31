define(['backbone', 'apps/estado_condicion/form/model/estado'], function (Backbone, EstadoModel) {

    var TipoEstado = Backbone.Collection.extend({

        // Reference to this collection's model.
        model: EstadoModel,
        url: 'api/estado_condicion/estado'
    });
    return TipoEstado;
});

define(['backbone', 'apps/planillas/list/model/unidad'], function (Backbone, Unidad) {
                                                console.log("iendo");
    var Unidades = Backbone.Collection.extend({

        // Reference to this collection's model.
        model: Unidad,
        url: 'api/unidades'
    });
    return Unidades;
});
define(['backbone', 'apps/estado_condicion/form/model/condpla'], function (Backbone, CondPlaModel) {

    var CondPla = Backbone.Collection.extend({

        // Reference to this collection's model.
        model: CondPlaModel,
        url: 'api/estado_condicion/condpla'
    });
    return CondPla;
});

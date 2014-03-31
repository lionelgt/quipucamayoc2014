define(['backbone', 'apps/estado_condicion/form/model/regimen'], function (Backbone, RegimenModel) {

    var Regimen = Backbone.Collection.extend({

        // Reference to this collection's model.
        model: RegimenModel,
        url: 'api/estado_condicion/regimen'
    });
    return Regimen;
});

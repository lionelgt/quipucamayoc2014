define(['backbone', 'apps/legajos/form/model/legajosTipEstudio'], function (Backbone, TipEstudio) {

    var LegajosTipEstud = Backbone.Collection.extend({

        // Reference to this collection's model.
        model: TipEstudio,
        url: 'api/legajos/TipoEstudio'
    });
    return LegajosTipEstud;
});

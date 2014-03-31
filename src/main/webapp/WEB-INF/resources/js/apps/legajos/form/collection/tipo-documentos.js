define(['backbone', 'apps/legajos/form/model/tipo-documento'], function (Backbone,TipDocument) {

    var TipoDocumento = Backbone.Collection.extend({

        // Reference to this collection's model.
        model: TipDocument,
        url: 'api/legajos/TipoDocumento'
    });
    return TipoDocumento;
});


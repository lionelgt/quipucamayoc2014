define(['backbone', 'apps/servidores/form/model/tipodocumento'], function (Backbone, TipoDocumento) {

    var TiposDocumento = Backbone.Collection.extend({

        // Reference to this collection's model.
        model: TipoDocumento,
        url: 'rest/cas/serv/tiposdocumento'

    });
    return TiposDocumento;
});

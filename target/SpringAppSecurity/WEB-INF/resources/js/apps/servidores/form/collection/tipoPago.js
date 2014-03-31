define(['backbone', 'apps/servidores/form/model/tipoPago'], function (Backbone, TipoPago) {

    var TiposDePago = Backbone.Collection.extend({

        // Reference to this collection's model.
        model: TipoPago,
        url: 'rest/cas/serv/tiposdepago'

    });
    return TiposDePago;
});
define(['backbone', 'apps/estado_condicion/form/model/tipopago'], function (Backbone, TipoPagoModel) {

    var TipoPago = Backbone.Collection.extend({

        // Reference to this collection's model.
        model: TipoPagoModel,
        url: 'api/estado_condicion/tipopago'
    });
    return TipoPago;
});

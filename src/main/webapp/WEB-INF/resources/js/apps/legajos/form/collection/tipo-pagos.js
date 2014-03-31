define(['backbone', 'apps/legajos/form/model/tipo-pago'], function (Backbone,TipPago) {

    var TipoPago = Backbone.Collection.extend({

        // Reference to this collection's model.
        model: TipPago,
        url: 'api/legajos/TipoPago'
    });
    return TipoPago;
});

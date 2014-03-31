define(['backbone', 'apps/contratos/adendas/model/contratocas'], function (Backbone, ContratoCAS) {

    var ContratosCAS = Backbone.Collection.extend({

        // Reference to this collection's model.
        model: ContratoCAS

    });

    return ContratosCAS;
});
define(['backbone', 'apps/legajos/form/model/tipo-beneficio'], function (Backbone,TipoBeneficio) {

    var tipoBeneficio = Backbone.Collection.extend({

        // Reference to this collection's model.
        model: TipoBeneficio,
        url: 'api/legajos/TipoBeneficio'
    });
    return tipoBeneficio;
});


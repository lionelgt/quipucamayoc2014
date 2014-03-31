define(['backbone', 'apps/legajos/form/model/pais-estudio'], function (Backbone, PaisEstudio) {

    var PaisEstud = Backbone.Collection.extend({

        // Reference to this collection's model.
        model: PaisEstudio,
        url: 'api/legajos/pais'

    });
    return PaisEstud;
});
